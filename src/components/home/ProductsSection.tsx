import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import schoolImage from '@/assets/school-furniture.jpg';
import kindergartenImage from '@/assets/kindergarten-furniture.jpg';
import officeImage from '@/assets/office-furniture.jpg';

const products = [
  {
    id: 1,
    name: 'Set Școlar Standard',
    category: 'Mobilier Școlar',
    description: 'Bancă + scaun pentru elevi, reglabile pe înălțime',
    image: schoolImage,
    price: 'de la 1,850 MDL',
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Masă Grădiniță Rotundă',
    category: 'Mobilier Grădiniță',
    description: 'Masă din lemn pentru 6 copii, margini rotunjite pentru siguranță',
    image: kindergartenImage,
    price: 'de la 2,200 MDL',
    badge: null,
  },
  {
    id: 3,
    name: 'Birou Ergonomic Director',
    category: 'Mobilier Birou',
    description: 'Birou executiv cu spațiu de depozitare integrat',
    image: officeImage,
    price: 'de la 8,500 MDL',
    badge: 'Nou',
  },
  {
    id: 4,
    name: 'Tablă Magnetică 120x90',
    category: 'Mobilier Școlar',
    description: 'Tablă albă magnetică cu ramă de aluminiu',
    image: schoolImage,
    price: 'de la 1,450 MDL',
    badge: null,
  },
  {
    id: 5,
    name: 'Dulap Vestiar 4 Secțiuni',
    category: 'Mobilier Grădiniță',
    description: 'Vestiar colorat pentru copii cu cuiere și raft',
    image: kindergartenImage,
    price: 'de la 3,800 MDL',
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'Scaun Ergonomic Office',
    category: 'Mobilier Birou',
    description: 'Scaun de birou cu suport lombar reglabil',
    image: officeImage,
    price: 'de la 2,950 MDL',
    badge: null,
  },
];

export function ProductsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Produse Populare
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Cele Mai Căutate Produse
            </h2>
          </div>
          <Link to="/produse">
            <Button variant="outline" size="lg">
              Vezi Tot Catalogul
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden card-elevated"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === 'Nou' 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-accent text-accent-foreground'
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-secondary text-sm font-medium">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-bold text-foreground">
                    {product.price}
                  </span>
                  <Button variant="ghost" size="sm">
                    <ShoppingBag className="w-4 h-4" />
                    Detalii
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
