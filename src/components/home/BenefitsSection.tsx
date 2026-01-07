import { Factory, BadgeCheck, Truck, HeadphonesIcon, Shield, Award } from 'lucide-react';

const benefits = [
  {
    icon: Factory,
    title: 'Producător Local',
    description: 'Fabricat în Moldova cu materiale certificate și standarde europene de calitate.',
  },
  {
    icon: BadgeCheck,
    title: 'Calitate Certificată',
    description: 'Produse testate și certificate conform normelor de siguranță pentru instituții.',
  },
  {
    icon: Truck,
    title: 'Livrare Rapidă',
    description: 'Livrare gratuită pentru comenzi de la 15,000 MDL în toată țara.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Consultanță Gratuită',
    description: 'Echipa noastră vă ajută să alegeți mobilierul potrivit pentru spațiul dumneavoastră.',
  },
  {
    icon: Shield,
    title: 'Garanție Extinsă',
    description: 'Oferim garanție de până la 5 ani pentru toate produsele noastre.',
  },
  {
    icon: Award,
    title: 'Prețuri Directe',
    description: 'Preturi de producător, fără intermediari, pentru cel mai bun raport calitate-preț.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            De Ce TISAM?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Partenerul Tău de Încredere
          </h2>
          <p className="text-muted-foreground">
            De peste 15 ani dotăm instituțiile educaționale și birourile din Moldova cu mobilier de calitate superioară.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card rounded-2xl p-8 card-elevated group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="benefit-icon mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
