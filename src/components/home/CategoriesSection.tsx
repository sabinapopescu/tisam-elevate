import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import schoolImage from '@/assets/school-furniture.jpg';
import kindergartenImage from '@/assets/kindergarten-furniture.jpg';
import officeImage from '@/assets/office-furniture.jpg';
import metalImage from '@/assets/metal-furniture.jpg';

const categories = [
  {
    id: 'scolar',
    name: 'Mobilier Școlar',
    description: 'Bănci, scaune, table și mobilier pentru clase moderne',
    image: schoolImage,
    href: '/produse/scolar',
    count: '120+ produse',
  },
  {
    id: 'gradinita',
    name: 'Mobilier Grădiniță',
    description: 'Mobilier sigur și colorat pentru cei mici',
    image: kindergartenImage,
    href: '/produse/gradinita',
    count: '85+ produse',
  },
  {
    id: 'birou',
    name: 'Mobilier Birou',
    description: 'Soluții ergonomice pentru spații de lucru profesionale',
    image: officeImage,
    href: '/produse/birou',
    count: '95+ produse',
  },
  {
    id: 'metalic',
    name: 'Mobilier Metalic',
    description: 'Dulapuri, rafturi și sisteme de depozitare robuste',
    image: metalImage,
    href: '/produse/metalic',
    count: '60+ produse',
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Categorii de Produse
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Soluții Complete pentru Orice Spațiu
          </h2>
          <p className="text-muted-foreground">
            De la grădiniță până la birou - oferim mobilier de calitate pentru toate etapele educației și dezvoltării profesionale.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] card-elevated"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 category-overlay" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-primary-foreground/70 text-sm font-medium mb-2">
                  {category.count}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/80 mb-4 max-w-sm">
                  {category.description}
                </p>
                <Button variant="category" size="sm" className="w-fit group-hover:gap-3 transition-all">
                  Vezi Produsele
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
