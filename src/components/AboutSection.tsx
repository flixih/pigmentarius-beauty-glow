import { useLanguage } from "@/contexts/LanguageContext";

const REAL_1 = "https://picheapp.com/wp-content/uploads/2025/09/import-9610.jpg";
const REAL_3 = "https://picheapp.com/wp-content/uploads/2025/09/import-9612.jpg";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Images — stacked on mobile, overlapping on desktop */}
          <div className="relative h-64 md:h-80 lg:h-[500px]">
            <img src={REAL_1} alt="Pigmentarius Salon" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-elevated" />
            <img src={REAL_3} alt="Pigmentarius brows" className="absolute -bottom-4 -right-4 w-2/5 h-2/5 object-cover rounded-xl shadow-elevated border-4 border-background hidden md:block" />
            <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-xl p-3 shadow-elevated hidden md:block">
              <p className="font-serif text-2xl font-bold">20+</p>
              <p className="text-xs tracking-wide">{t("about_stat3")}</p>
            </div>
          </div>

          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">{t("about_label")}</p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t("about_title1")}{" "}<span className="italic text-primary">{t("about_title2")}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>{t("about_p1")}</p>
              <p>{t("about_p2")}</p>
              <p>{t("about_p3")}</p>
            </div>

            {/* Owner */}
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
              <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center font-serif text-xl font-bold text-primary flex-shrink-0">W</div>
              <div>
                <p className="font-semibold text-foreground text-sm">Windy Arroyo</p>
                <p className="text-xs text-primary tracking-wide">{t("about_founder")}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border text-center">
              {[
                { value: "211+", label: t("about_stat1") },
                { value: "4.8", label: t("about_stat2") },
                { value: "20+", label: t("about_stat3") },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
