import hairStyling from "@/assets/hair-styling.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={hairStyling}
                alt="Professional hair styling at Pigmentarius Salon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elevated hidden md:block">
              <p className="font-serif text-3xl font-bold">20+</p>
              <p className="text-sm tracking-wide">Years of Excellence</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              Where Beauty Meets{" "}
              <span className="italic text-primary">Artistry</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Pigmentarius Hair & Brow Salon is a trusted beauty destination in Puerto Rico known for exceptional hair artistry, perfect eyebrow design, and personalized beauty care.
              </p>
              <p>
                For more than two decades, our expert stylists have helped clients look and feel their best with professional techniques, high-quality products, and a welcoming atmosphere.
              </p>
              <p>
                Our salon is proudly women-owned and dedicated to creating a relaxing and inclusive space for every client.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { value: "215+", label: "Happy Clients" },
                { value: "4.8", label: "Star Rating" },
                { value: "20+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-wide mt-1">{stat.label}</p>
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
