import { useLanguage } from "@/contexts/LanguageContext";

const REAL_1 = "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800";
const REAL_2 = "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="nosotros" className="py-20 md:py-32 relative" style={{ background: "var(--bg3)" }}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(40 80% 60% / 0.07) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative h-72 md:h-96 lg:h-[500px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/8">
              <img src={REAL_1} alt="Pigmentarius" className="w-full h-full object-cover opacity-75" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.3) 0%, transparent 60%)" }} />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/5 aspect-square rounded-xl overflow-hidden border-2 border-[#0a0a0a] hidden md:block">
              <img src={REAL_2} alt="Pigmentarius salon" className="w-full h-full object-cover opacity-80" />
            </div>
            {/* Floating stat */}
            <div className="absolute -top-4 -left-4 rounded-xl p-4 border border-white/10 hidden md:block" style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(20px)" }}>
              <p className="font-serif text-2xl font-bold" style={{ background: "linear-gradient(135deg, #fff 0%, hsl(330 85% 70%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>20+</p>
              <p className="text-white/40 text-xs tracking-wide">{t("about_stat3")}</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase mb-6">
              {t("about_label")}
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t("about_title1")}{" "}
              <span className="italic" style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("about_title2")}
              </span>
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed text-sm md:text-base">
              <p>{t("about_p1")}</p>
              <p>{t("about_p2")}</p>
              <p>{t("about_p3")}</p>
            </div>

            {/* Owner */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/8">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg font-bold border border-white/15" style={{ background: "var(--card)", color: "hsl(330 85% 65%)" }}>W</div>
              <div>
                <p className="text-white font-semibold text-sm">Windy Arroyo</p>
                <p className="text-xs tracking-wide" style={{ color: "hsl(330 85% 60%)" }}>{t("about_founder")}</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/8 text-center">
              {[
                { value: "211+", label: t("about_stat1") },
                { value: "4.8★", label: t("about_stat2") },
                { value: "20+",  label: t("about_stat3") },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-xl md:text-2xl font-bold" style={{ background: "linear-gradient(135deg, #fff 0%, hsl(330 85% 70%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.value}</p>
                  <p className="text-white/30 text-xs mt-1">{s.label}</p>
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
