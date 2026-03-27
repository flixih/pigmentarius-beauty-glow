import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// ─── Rate limiting (in-memory per Edge Function instance) ───────────────────
const ipHitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT  = 5;    // max requests
const WINDOW_MS   = 60_000; // per 60 seconds per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = ipHitMap.get(ip);
  if (!rec || now > rec.resetAt) {
    ipHitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (rec.count >= RATE_LIMIT) return true;
  rec.count++;
  return false;
}

// ─── CORS helper ────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  "https://pigmentarius-beauty-glow.lovable.app",
  "https://preview--pigmentarius-beauty-glow.lovable.app",
  // add your custom domain here when you connect it
];

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// ─── Input validation ────────────────────────────────────────────────────────
function sanitize(v: unknown, maxLen = 200): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, maxLen).replace(/[<>]/g, "");
}

function validateEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

// ─── Main handler ────────────────────────────────────────────────────────────
serve(async (req) => {
  const origin = req.headers.get("origin");
  const cors = corsHeaders(origin);

  // Preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  // Rate limit by IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Too many requests. Please wait a moment." }), {
      status: 429, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  // Body size guard (max 10KB)
  const contentLength = parseInt(req.headers.get("content-length") ?? "0");
  if (contentLength > 10_000) {
    return new Response(JSON.stringify({ error: "Request too large" }), {
      status: 413, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  // Sanitize all fields
  const nombre   = sanitize(body.nombre,   100);
  const apellido = sanitize(body.apellido, 100);
  const contacto = sanitize(body.contacto, 150);
  const servicio = sanitize(body.servicio, 150);
  const fecha    = sanitize(body.fecha,    50);
  const hora     = sanitize(body.hora,     20);
  const mensaje  = sanitize(body.mensaje,  500);

  // Validate required fields
  if (!nombre || !contacto || !servicio) {
    return new Response(JSON.stringify({ error: "Missing required fields: nombre, contacto, servicio" }), {
      status: 400, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  // If contacto looks like an email, validate it
  if (contacto.includes("@") && !validateEmail(contacto)) {
    return new Response(JSON.stringify({ error: "Invalid email format" }), {
      status: 400, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  // ── Send via EmailJS REST API (key stays server-side) ─────────────────────
  const EMAILJS_SERVICE_ID  = Deno.env.get("EMAILJS_SERVICE_ID")!;
  const EMAILJS_TEMPLATE_ID = Deno.env.get("EMAILJS_TEMPLATE_ID")!;
  const EMAILJS_PRIVATE_KEY = Deno.env.get("EMAILJS_PRIVATE_KEY")!;
  const EMAILJS_PUBLIC_KEY  = Deno.env.get("EMAILJS_PUBLIC_KEY")!;

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PRIVATE_KEY || !EMAILJS_PUBLIC_KEY) {
    console.error("[send-booking] Missing EmailJS env vars");
    return new Response(JSON.stringify({ error: "Server configuration error" }), {
      status: 500, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  const emailPayload = {
    service_id:  EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id:     EMAILJS_PUBLIC_KEY,
    accessToken: EMAILJS_PRIVATE_KEY,
    template_params: {
      from_name: `${nombre} ${apellido}`.trim(),
      contacto,
      servicio,
      fecha:    fecha  || "No especificada",
      hora:     hora   || "No especificada",
      mensaje:  mensaje || "Ninguno",
      to_email: "pigmentariusforms@gmail.com",
      reply_to: contacto.includes("@") ? contacto : "pigmentariusforms@gmail.com",
    },
  };

  let emailRes: Response;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout
    emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailPayload),
      signal: controller.signal,
    });
    clearTimeout(timeout);
  } catch (err) {
    console.error("[send-booking] EmailJS fetch failed:", (err as Error).message);
    return new Response(JSON.stringify({ error: "Failed to send email. Please try again." }), {
      status: 502, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  // Log for monitoring (no secrets, no PII beyond hash)
  const ipHash = btoa(ip).slice(0, 8);
  console.log(JSON.stringify({
    ts:       new Date().toISOString(),
    route:    "send-booking",
    ip_hash:  ipHash,
    service:  servicio,
    status:   emailRes.status,
  }));

  if (!emailRes.ok) {
    console.error("[send-booking] EmailJS error:", emailRes.status);
    return new Response(JSON.stringify({ error: "Email service error. Please call us directly." }), {
      status: 502, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200, headers: { ...cors, "Content-Type": "application/json" },
  });
});
