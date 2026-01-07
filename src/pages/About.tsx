import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Factory, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-classroom.jpg';

const values = [
  {
    icon: Award,
    title: 'Calitate Fără Compromis',
    description: 'Folosim doar materiale certificate și procese de producție testate conform standardelor europene.',
  },
  {
    icon: Users,
    title: 'Focusați pe Client',
    description: 'Fiecare proiect este abordat individual, cu consultanță personalizată și suport continuu.',
  },
  {
    icon: Factory,
    title: 'Producție Locală',
    description: 'Suntem mândri să producem în Moldova, contribuind la economia locală și asigurând livrări rapide.',
  },
  {
    icon: Target,
    title: 'Inovație Continuă',
    description: 'Investim constant în tehnologii noi și design modern pentru a oferi cele mai bune soluții.',
  },
];

const milestones = [
  { year: '2008', event: 'Fondarea companiei TISAM în Chișinău' },
  { year: '2012', event: 'Extinderea producției și prima certificare ISO' },
  { year: '2016', event: 'Parteneriat cu Ministerul Educației' },
  { year: '2020', event: '500+ instituții dotate în Moldova' },
  { year: '2024', event: 'Lansarea liniei de mobilier ergonomic premium' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Despre TISAM"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Despre Noi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Partenerul Tău în Crearea Spațiilor Educaționale
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                De peste 15 ani, TISAM este lider în producția și distribuția de mobilier 
                pentru instituții educaționale și birouri din Moldova. Calitate, inovație 
                și dedicare - aceste valori ne ghidează în fiecare proiect.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Contactează-ne
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                  Misiunea Noastră
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  Creăm Spații care Inspiră Învățarea și Productivitatea
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Credem că mediul fizic are un impact direct asupra calității educației 
                  și a productivității la locul de muncă. De aceea, ne dedicăm creării de 
                  mobilier care nu doar arată bine, ci este funcțional, durabil și sigur.
                </p>
                <ul className="space-y-4">
                  {[
                    'Mobilier ergonomic adaptat vârstei și nevoilor utilizatorilor',
                    'Materiale certificate, sigure pentru copii și adulți',
                    'Design modern care transformă orice spațiu',
                    'Suport complet de la consultanță la instalare',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 card-elevated">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Istoria Noastră
                </h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {milestone.year.slice(-2)}
                        </div>
                        {index < milestones.length - 1 && (
                          <div className="w-0.5 h-full bg-border mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <span className="text-sm font-medium text-secondary">
                          {milestone.year}
                        </span>
                        <p className="text-foreground">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Valorile Noastre
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Ce Ne Definește
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Pregătit să Colaborăm?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contactează-ne pentru o consultanță gratuită și o ofertă personalizată 
              pentru instituția ta.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Solicită Ofertă
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
