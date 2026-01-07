import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-10 md:p-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Pregătit să Dotezi Instituția Ta?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-md">
                Solicită o ofertă personalizată și consultanță gratuită. 
                Echipa noastră te va contacta în maxim 24 de ore.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Solicită Ofertă Gratuită
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-card/10 backdrop-blur-lg rounded-2xl p-8 border border-primary-foreground/10">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                Contactează-ne Direct
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+37368522202"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Telefon</div>
                    <div className="text-lg font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                      +373 68 52-22-02
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:info@tisam.md"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Email</div>
                    <div className="text-lg font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                      info@tisam.md
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
