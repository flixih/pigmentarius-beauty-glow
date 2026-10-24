import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";

export type LegalSlug = "privacidad" | "cookies" | "terminos" | "accesibilidad";
type Doc = { title: string; desc: string; body: [string, string[]][] };
const EMAIL = "pigmentariusforms@gmail.com";
const PHONE = "(787) 826-1684";

const DOCS: Record<LegalSlug, Record<"es" | "en", Doc>> = {
  privacidad: {
    es: { title: "Política de privacidad", desc: "Cómo Pigmentarius Hair & Brow Salon trata tus datos personales.", body: [
      ["Qué datos recogemos", ["Si nos envías una solicitud de cita, recogemos: nombre, apellido, teléfono o email, servicio, fecha y hora deseadas y tu mensaje. Hoy la forma principal de reservar es por teléfono o Fresha."]],
      ["Cómo se procesan", [`La solicitud se envía mediante una función de nuestro servidor (send-booking, alojada en Supabase) que la reenvía por email a ${EMAIL}.`]],
      ["Para qué y por cuánto tiempo", ["Usamos los datos solo para coordinar tu cita y los guardamos el tiempo necesario para ello. No vendemos ni compartimos tus datos."]],
      ["Terceros", ["Proveedor de hosting del sitio, Supabase (procesamiento del formulario), Google Fonts (tipografías) y Google Maps solo si abres el enlace o cargas el mapa. Los enlaces a Instagram, Facebook y Fresha te llevan a sitios con sus propias políticas."]],
      ["Tus derechos", [`Puedes pedir acceso, corrección o eliminación de tus datos escribiendo a ${EMAIL}.`]],
      ["Menores", ["Este sitio no está dirigido a menores de 13 años y no recogemos datos de ellos a sabiendas (COPPA)."]],
      ["Global Privacy Control", ["Respetamos la señal Global Privacy Control. No usamos analítica, publicidad ni píxeles de seguimiento."]],
    ]},
    en: { title: "Privacy policy", desc: "How Pigmentarius Hair & Brow Salon handles your personal data.", body: [
      ["What we collect", ["If you send an appointment request we collect: first name, last name, phone or email, service, preferred date and time, and your message. Today the main way to book is by phone or Fresha."]],
      ["How it is processed", [`The request is sent through a server function (send-booking, hosted on Supabase) that forwards it by email to ${EMAIL}.`]],
      ["Purpose and retention", ["We use the data only to schedule your appointment and keep it as long as needed for that. We do not sell or share your data."]],
      ["Third parties", ["Website hosting, Supabase (form processing), Google Fonts, and Google Maps only if you open the link or load the map. Instagram, Facebook and Fresha links lead to sites with their own policies."]],
      ["Your rights", [`Request access, correction or deletion by emailing ${EMAIL}.`]],
      ["Children", ["This site is not directed to children under 13 and we do not knowingly collect their data (COPPA)."]],
      ["Global Privacy Control", ["We honor the Global Privacy Control signal. We use no analytics, advertising or tracking pixels."]],
    ]},
  },
  cookies: {
    es: { title: "Política de cookies", desc: "Almacenamiento que usa el sitio de Pigmentarius.", body: [
      ["Solo almacenamiento esencial", ["No usamos cookies de analítica ni publicidad. El sitio guarda en tu navegador (localStorage) únicamente: tu preferencia de idioma, tu preferencia de tema y, si aplica, tu elección de consentimiento."]],
      ["Cómo borrarlo", ["Puedes borrarlo en la configuración de tu navegador en cualquier momento."]],
    ]},
    en: { title: "Cookie policy", desc: "Storage used by the Pigmentarius website.", body: [
      ["Essential storage only", ["We use no analytics or advertising cookies. The site stores in your browser (localStorage) only: your language preference, your theme preference and, if applicable, your consent choice."]],
      ["How to clear it", ["You can clear it in your browser settings at any time."]],
    ]},
  },
  terminos: {
    es: { title: "Términos de uso", desc: "Términos de uso del sitio de Pigmentarius Hair & Brow Salon.", body: [
      ["Sitio informativo", ["Este sitio es informativo. La disponibilidad y los precios de los servicios se confirman en consulta."]],
      ["Microblading, maquillaje permanente y láser", ["Los resultados varían por persona. Se realiza una consulta y se completa un formulario de consentimiento informado en el salón. Los clientes deben tener 18 años o más (o venir con su tutor donde la ley lo permita). Las contraindicaciones se revisan en el salón. No hacemos afirmaciones médicas ni garantizamos resultados."]],
      ["Reseñas", ["Las reseñas mostradas son reseñas reales de Google."]],
      ["Fotos", [`Las fotos son propiedad de Pigmentarius. Las fotos de clientes y de antes y después se muestran con su permiso; cualquier cliente puede pedir que se retire su foto escribiendo a ${EMAIL}.`]],
      ["Ley aplicable", ["Estos términos se rigen por las leyes de Puerto Rico."]],
    ]},
    en: { title: "Terms of use", desc: "Terms of use for the Pigmentarius Hair & Brow Salon website.", body: [
      ["Informational site", ["This site is informational. Service availability and prices are confirmed on consultation."]],
      ["Microblading, permanent makeup and laser", ["Results vary by person. A consultation and an informed-consent form are completed at the salon. Clients must be 18 or older (or accompanied by a guardian where the law allows). Contraindications are reviewed on site. We make no medical claims or guarantees."]],
      ["Reviews", ["Reviews shown are real Google reviews."]],
      ["Photos", [`Photos belong to Pigmentarius. Client and before/after photos are shown with permission; any client may request removal by emailing ${EMAIL}.`]],
      ["Governing law", ["These terms are governed by the laws of Puerto Rico."]],
    ]},
  },
  accesibilidad: {
    es: { title: "Declaración de accesibilidad", desc: "Compromiso de accesibilidad de Pigmentarius (WCAG 2.1 AA).", body: [
      ["Nuestro compromiso", ["Buscamos que este sitio cumpla con las pautas WCAG 2.1 nivel AA y lo revisamos de forma continua."]],
      ["Contacto", [`Si encuentras una barrera, llama al ${PHONE} o escribe a ${EMAIL}. Respondemos en un máximo de 2 días laborables.`]],
    ]},
    en: { title: "Accessibility statement", desc: "Pigmentarius accessibility commitment (WCAG 2.1 AA).", body: [
      ["Our commitment", ["We aim for this site to meet WCAG 2.1 level AA and review it continuously."]],
      ["Contact", [`If you find a barrier, call ${PHONE} or email ${EMAIL}. We respond within 2 business days.`]],
    ]},
  },
};

const Legal = ({ slug }: { slug: LegalSlug }) => {
  const { lang } = useLanguage();
  const doc = DOCS[slug][lang === "en" ? "en" : "es"];
  usePageMeta(`${doc.title} | Pigmentarius Hair & Brow Salon`, doc.desc, `/${slug}`);
  return (
    <div style={{ background: "var(--cream)", color: "var(--ink)" }}>
      <Navbar />
      <main id="main" className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <Link to="/" className="text-sm link-hover" style={{ color: "var(--ink-mid)" }}>← {lang === "es" ? "Inicio" : "Home"}</Link>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-8">{doc.title}</h1>
        {doc.body.map(([h, ps]) => (
          <section key={h} className="mb-6">
            <h2 className="font-serif text-2xl mb-2">{h}</h2>
            {ps.map((p) => <p key={p} className="leading-relaxed" style={{ color: "var(--ink-mid)" }}>{p}</p>)}
          </section>
        ))}
        <p className="text-sm mt-10" style={{ color: "var(--ink-mid)" }}>{lang === "es" ? "Actualizado" : "Updated"}: 2026-10-24</p>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
