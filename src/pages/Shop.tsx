import { ArrowLeft, ShoppingCart, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ledMask from "@/assets/led-mask.jpg";
import logo from "@/assets/logo.webp";

const products = [
  {
    id: 1,
    name: "Máscara LED de Terapia de Luz Roja",
    description:
      "Máscara facial LED con 4 modos de terapia de luz portátil. 2000mAh recargable con control remoto. Infrarrojo y luz roja, 400 LEDs con función de temporizador. Ideal para uso en casa y viajes.",
    price: 93.49,
    originalPrice: 155.00,
    image: ledMask,
    rating: 4.6,
    reviews: 1016,
    features: [
      "4 modos de terapia de luz",
      "2000mAh batería recargable",
      "Control remoto incluido",
      "400 LEDs de alta potencia",
      "Infrarrojo 850NM y luz roja",
      "Función de temporizador",
    ],
    affiliateUrl:
      "https://www.amazon.com/NVBOTY-LED-light-therapy-mask/dp/B0DGTFQNKJ/",
  },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-md shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Pigmentarius" className="h-10 w-auto object-contain" />
          </Link>
          <h1 className="font-serif text-xl md:text-2xl font-bold text-foreground">
            Tienda <span className="italic text-primary">Online</span>
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Volver
          </Link>
        </div>
      </header>

      {/* Product */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Image */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-auto object-cover aspect-square"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              Producto Destacado
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              {selectedProduct.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(selectedProduct.rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/30"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {selectedProduct.rating} ({selectedProduct.reviews.toLocaleString()} reseñas)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-3xl font-bold text-foreground">
                ${selectedProduct.price.toFixed(2)}
              </span>
              {selectedProduct.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${selectedProduct.originalPrice.toFixed(2)}
                </span>
              )}
              {selectedProduct.originalPrice && (
                <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
                  -{Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}%
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {selectedProduct.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={selectedProduct.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow w-full md:w-auto"
            >
              <ShoppingCart size={18} />
              Comprar Ahora
            </a>

            <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
              Serás redirigido a Amazon para completar la compra.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
