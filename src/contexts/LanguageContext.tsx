import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

const translations = {
  es: {
    // Navbar
    nav_inicio: "Inicio",
    nav_servicios: "Servicios",
    nav_nosotros: "Nosotros",
    nav_galeria: "Galería",
    nav_resenas: "Reseñas",
    nav_contacto: "Contacto",
    nav_reservar: "Reservar",
    // Hero
    hero_eyebrow: "Añasco, Puerto Rico",
    hero_title1: "Cabello Hermoso.",
    hero_title2: "Cejas Perfectas.",
    hero_title3: "Tu Confianza Empieza Aquí.",
    hero_desc: "Especialistas en coloración, microblading, maquillaje permanente y tratamientos capilares en Añasco, Puerto Rico.",
    hero_cta: "Reservar Cita",
    hero_call: "Llamar",
    hero_stat1: "Rating Google",
    hero_stat2: "Reseñas Reales",
    hero_stat3: "Años de Exp.",
    // About
    about_label: "Nuestra Historia",
    about_title1: "Donde la Belleza se Encuentra con el",
    about_title2: "Arte",
    about_p1: "Pigmentarius Hair & Brow Salon es el destino de belleza de confianza en el oeste de Puerto Rico, reconocido por su excepcional arte capilar, diseño perfecto de cejas y cuidado personalizado.",
    about_p2: "Nuestra fundadora Windy Arroyo es especialista en cabello rizado, coloración avanzada y microblading. Su pasión crea una experiencia que clientas describen como \"la Clínica Mayo del cabello.\"",
    about_p3: "Desde el primer contacto te llamamos Princesa y te tratamos con el cariño que mereces.",
    about_stat1: "Clientes Felices",
    about_stat2: "Estrellas Google",
    about_stat3: "Años de Experiencia",
    about_founder: "Fundadora & Directora Artística",
    // Services
    services_label: "Lo Que Ofrecemos",
    services_title1: "Nuestros",
    services_title2: "Servicios",
    services_cta: "Reservar Cita",
    services_more: "Más Info →",
    // Gallery
    gallery_label: "Nuestro Trabajo Real",
    gallery_title1: "Galería de",
    gallery_title2: "Transformaciones",
    gallery_follow: "Síguenos @pigmentariushs →",
    // Reviews
    reviews_label: "Reseñas Reales de Google",
    reviews_title1: "Lo Que Dicen Nuestros",
    reviews_title2: "Clientes",
    reviews_count: "clientes felices en Google",
    reviews_verified: "Reseña Google ✓",
    reviews_google: "Ver todas las reseñas en Google →",
    // Contact
    contact_label: "Contáctanos",
    contact_title1: "Reserva tu",
    contact_title2: "Cita",
    contact_desc: "Llámanos, escríbenos o completa el formulario. Somos flexibles y estamos pendientes de ti.",
    contact_address: "Dirección",
    contact_phone: "Teléfono",
    contact_hours: "Horario",
    contact_directions: "Obtener Direcciones →",
    contact_form_title: "Solicitar Cita",
    contact_name: "Nombre",
    contact_lastname: "Apellido",
    contact_contact: "Teléfono o Email",
    contact_service: "Servicio Deseado",
    contact_service_placeholder: "Selecciona un servicio",
    contact_date: "Fecha Preferida",
    contact_time: "Hora",
    contact_message: "Mensaje (opcional)",
    contact_message_placeholder: "Cuéntanos más sobre lo que deseas...",
    contact_submit: "Solicitar Cita →",
    contact_success_title: "¡Solicitud Enviada!",
    contact_success_desc: "Te contactaremos pronto para confirmar tu cita. 💛",
    // CTA
    cta_label: "Añasco, Puerto Rico",
    cta_title1: "¿Lista para tu",
    cta_title2: "Nuevo Look",
    cta_desc: "Únete a más de 211 clientas satisfechas. Reserva tu cita hoy.",
    cta_book: "Reservar Cita",
    cta_follow: "Síguenos @pigmentariushs para ver nuestro trabajo",
    // Hours
    hours_closed: "Cerrado",
    // Footer
    footer_links: "Enlaces Rápidos",
    footer_contact: "Contacto",
    footer_rights: "Todos los derechos reservados.",
    footer_made: "Hecho con",
    footer_in: "en Puerto Rico",
    // Why
    why_label: "La Diferencia Pigmentarius",
    why_title1: "Por Qué",
    why_title2: "Elegirnos",
    why_quote: "\"Este lugar es como ir al Mayo Clinic pero para el cabello.\" — Cliente Real ⭐⭐⭐⭐⭐",
  },
  en: {
    // Navbar
    nav_inicio: "Home",
    nav_servicios: "Services",
    nav_nosotros: "About",
    nav_galeria: "Gallery",
    nav_resenas: "Reviews",
    nav_contacto: "Contact",
    nav_reservar: "Book Now",
    // Hero
    hero_eyebrow: "Añasco, Puerto Rico",
    hero_title1: "Beautiful Hair.",
    hero_title2: "Perfect Brows.",
    hero_title3: "Your Confidence Starts Here.",
    hero_desc: "Specialists in hair color, microblading, permanent makeup and advanced hair treatments in Añasco, Puerto Rico.",
    hero_cta: "Book Appointment",
    hero_call: "Call Us",
    hero_stat1: "Google Rating",
    hero_stat2: "Real Reviews",
    hero_stat3: "Years Exp.",
    // About
    about_label: "Our Story",
    about_title1: "Where Beauty Meets",
    about_title2: "Art",
    about_p1: "Pigmentarius Hair & Brow Salon is the trusted beauty destination in western Puerto Rico, known for exceptional hair artistry, perfect brow design, and personalized care.",
    about_p2: "Our founder Windy Arroyo specializes in curly hair, advanced color and microblading. Her passion creates an experience clients describe as \"the Mayo Clinic of hair.\"",
    about_p3: "From your very first contact, we call you Princess and treat you with the care you deserve.",
    about_stat1: "Happy Clients",
    about_stat2: "Google Stars",
    about_stat3: "Years Experience",
    about_founder: "Founder & Artistic Director",
    // Services
    services_label: "What We Offer",
    services_title1: "Our",
    services_title2: "Services",
    services_cta: "Book Appointment",
    services_more: "Learn More →",
    // Gallery
    gallery_label: "Our Real Work",
    gallery_title1: "Gallery of",
    gallery_title2: "Transformations",
    gallery_follow: "Follow us @pigmentariushs →",
    // Reviews
    reviews_label: "Real Google Reviews",
    reviews_title1: "What Our",
    reviews_title2: "Clients Say",
    reviews_count: "happy clients on Google",
    reviews_verified: "Google Review ✓",
    reviews_google: "See all reviews on Google →",
    // Contact
    contact_label: "Contact Us",
    contact_title1: "Book Your",
    contact_title2: "Appointment",
    contact_desc: "Call us, message us, or fill out the form. We're flexible and always here for you.",
    contact_address: "Address",
    contact_phone: "Phone",
    contact_hours: "Hours",
    contact_directions: "Get Directions →",
    contact_form_title: "Request Appointment",
    contact_name: "First Name",
    contact_lastname: "Last Name",
    contact_contact: "Phone or Email",
    contact_service: "Desired Service",
    contact_service_placeholder: "Select a service",
    contact_date: "Preferred Date",
    contact_time: "Time",
    contact_message: "Message (optional)",
    contact_message_placeholder: "Tell us more about what you'd like...",
    contact_submit: "Request Appointment →",
    contact_success_title: "Request Sent!",
    contact_success_desc: "We'll contact you soon to confirm your appointment. 💛",
    // CTA
    cta_label: "Añasco, Puerto Rico",
    cta_title1: "Ready for Your",
    cta_title2: "New Look",
    cta_desc: "Join over 211 satisfied clients. Book your appointment today.",
    cta_book: "Book Appointment",
    cta_follow: "Follow @pigmentariushs to see our work",
    // Hours
    hours_closed: "Closed",
    // Footer
    footer_links: "Quick Links",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",
    footer_made: "Made with",
    footer_in: "in Puerto Rico",
    // Why
    why_label: "The Pigmentarius Difference",
    why_title1: "Why",
    why_title2: "Choose Us",
    why_quote: "\"This place is like going to the Mayo Clinic, but for your hair.\" — Real Client ⭐⭐⭐⭐⭐",
  },
};

type TranslationKey = keyof typeof translations.es;

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  const t = (key: TranslationKey) => translations[lang][key] ?? key;
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
