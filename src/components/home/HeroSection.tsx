import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-classroom.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sală de clasă modernă cu mobilier TISAM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium backdrop-blur-sm border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Producător Local din Moldova
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-slide-up">
            Mobilier de Calitate pentru{' '}
            <span className="text-accent">Școli, Grădinițe</span> și{' '}
            <span className="text-accent">Birouri</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-slide-up delay-100">
            Creăm spații educaționale și profesionale care inspiră. 
            Calitate europeană, producție locală, livrare rapidă în toată Moldova.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 animate-slide-up delay-200">
            <Button variant="hero" size="xl">
              Solicită Ofertă Personalizată
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Vezi Catalogul
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-primary-foreground/20 animate-fade-in delay-300">
            <div>
              <div className="text-3xl font-bold text-primary-foreground">15+</div>
              <div className="text-sm text-primary-foreground/70">Ani de Experiență</div>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <div className="text-3xl font-bold text-primary-foreground">500+</div>
              <div className="text-sm text-primary-foreground/70">Instituții Dotate</div>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <div className="text-3xl font-bold text-primary-foreground">100%</div>
              <div className="text-sm text-primary-foreground/70">Calitate Certificată</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
}
