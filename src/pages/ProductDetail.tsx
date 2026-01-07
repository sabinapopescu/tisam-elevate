import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Package, 
  Shield, 
  Truck,
  Phone,
  MessageCircle
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import schoolImage from '@/assets/school-furniture.jpg';
import kindergartenImage from '@/assets/kindergarten-furniture.jpg';
import officeImage from '@/assets/office-furniture.jpg';

// Mock product data
const productData = {
  id: 1,
  name: 'Set Școlar Standard - Bancă + Scaun',
  category: 'Mobilier Școlar',
  description: 'Set complet format din bancă și scaun pentru elevi, cu înălțime reglabilă pentru a se adapta diferitelor vârste. Fabricat din materiale certificate și durabile.',
  price: 1850,
  images: [schoolImage, kindergartenImage, officeImage],
  specs: [
    { label: 'Material cadru', value: 'Oțel vopsit electrostatic' },
    { label: 'Material blat', value: 'PAL laminat 18mm' },
    { label: 'Înălțime reglabilă', value: '64-76 cm' },
    { label: 'Dimensiuni blat', value: '70 x 50 cm' },
    { label: 'Greutate maximă', value: '80 kg' },
    { label: 'Garanție', value: '5 ani' },
  ],
  features: [
    'Înălțime reglabilă pe 6 nivele',
    'Margini rotunjite pentru siguranță',
    'Suprafață anti-zgârieturi',
    'Ușor de curățat și întreținut',
    'Asamblare rapidă (15 minute)',
    'Disponibil în mai multe culori',
  ],
  usage: ['Clase primare (clasele 1-4)', 'Clase gimnaziale (clasele 5-9)', 'Licee și colegii'],
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // In a real app, we would fetch the product based on ID
  const product = productData;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Acasă</Link>
            <span>/</span>
            <Link to="/produse" className="hover:text-foreground">Produse</Link>
            <span>/</span>
            <Link to="/produse/scolar" className="hover:text-foreground">{product.category}</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="text-secondary font-medium">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-bold text-foreground">
                  de la {product.price.toLocaleString()} MDL
                </span>
                <span className="text-muted-foreground">/ set</span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-foreground font-medium">Cantitate:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="hero" size="xl" className="flex-1 min-w-[200px]">
                  <MessageCircle className="w-5 h-5" />
                  Solicită Ofertă
                </Button>
                <Button variant="outline" size="xl">
                  <Phone className="w-5 h-5" />
                  Sună Acum
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-xl">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Livrare Gratuită</span>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Garanție 5 Ani</span>
                </div>
                <div className="text-center">
                  <Package className="w-6 h-6 mx-auto text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Stoc Disponibil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details Tabs */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {/* Specifications */}
            <div className="bg-card rounded-2xl p-6 card-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Specificații Tehnice
              </h3>
              <div className="space-y-4">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-card rounded-2xl p-6 card-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Caracteristici
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="bg-card rounded-2xl p-6 card-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Utilizare Recomandată
              </h3>
              <ul className="space-y-3">
                {product.usage.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Ai întrebări despre acest produs? Echipa noastră de consultanți 
                  te poate ajuta să alegi varianta potrivită.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link to="/produse">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4" />
                Înapoi la Produse
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
