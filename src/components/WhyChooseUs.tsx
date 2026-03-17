import { Award, Users, Gem, MessageCircle, Flower2, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { lang, t } = useLanguage();
  const benefits = [
    { icon: Award, title: { es: "20+ Años de Excelencia", en: "20+ Years of Excellence" }, desc: { es: "Dos décadas transformando vidas bajo la dirección de Windy Arroyo.", en: "Two decades transforming lives under the direction of Windy Arroyo." } },
    { icon: Users, title: { es: "Equipo Capacitado", en: "Skilled Team" }, desc: { es: "Equipo en constante formación con las últimas técnicas.", en: "Team in constant training with the latest techniques." } },
    { icon: Gem, title: { es: "Productos Premium", en: "Premium Products" }, desc: { es: "Solo los mejores productos profesionales de belleza.", en: "Only the finest professional beauty products." } },
    { icon: MessageCircle, title: { es: "Atención Personalizada", en: "Personal Attention" }, desc: { es: "Desde el primer llamado te llamamos Princesa.", en: "From your first call, we call you Princess." } },
    { icon: Flower2, title: { es: "Ambiente Cálido", en: "Warm Atmosphere" }, desc: { es: "Un espacio acogedor donde el equipo trabaja como familia.", en: "A welcoming space where the team works like family." } },
    { icon: Heart, title: { es: "211+ Reseñas de 5★", en: "211+ 5-Star Reviews" }, desc: { es: "Clientes viajan desde Pennsylvania para visitarnos.", en: "Clients fly in from Pennsylvania just to see us." } },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">{t("why_label")}</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-3">
            {t("why_title1")} <span className="italic text-primary">{t("why_title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-sm mx-auto text-xs italic">{t("why_quote")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {benefits.map((b) => (
            <div key={b.title.es} className="group flex flex-col md:flex-row gap-3 md:gap-4 items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <b.icon size={22} />
              </div>
              <div>
                <h3 className="font-serif text-sm md:text-base font-semibold text-foreground mb-1">{b.title[lang]}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{b.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-border text-center">
          {[
            { value: "4.8★", label: { es: "Rating Google", en: "Google Rating" } },
            { value: "211+", label: { es: "Reseñas Verificadas", en: "Verified Reviews" } },
            { value: "20+", label: { es: "Años en el Mercado", en: "Years in Business" } },
            { value: "100%", label: { es: "Satisfacción", en: "Satisfaction" } },
          ].map((s) => (
            <div key={s.value}>
              <p className="font-serif text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground tracking-wide mt-1">{s.label[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
