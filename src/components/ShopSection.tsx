import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "Productos de Reparación Capilar",
  "Mantenimiento de Keratina",
  "Protección para Cabello con Color",
  "Mascarillas Capilares",
  "Productos Profesionales de Estilizado",
];

const ShopSection = () => {
  return (
    <section id="tienda" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Productos Profesionales</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tienda <span className="italic text-primary">Online</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Los mismos productos profesionales que usamos en el salón, ahora disponibles para ti en casa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => (
            <div
              key={cat}
              className="group bg-cream-dark rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{cat}</h3>
              <p className="text-muted-foreground text-sm mt-2">Próximamente</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Descubre nuestros productos profesionales de belleza.</p>
          <Link
            to="/tienda"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
          >
            <ShoppingBag size={16} />
            Ver Tienda
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
