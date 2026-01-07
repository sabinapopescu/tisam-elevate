import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+373 68 52-22-02',
    href: 'tel:+37368522202',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@tisam.md',
    href: 'mailto:info@tisam.md',
  },
  {
    icon: MapPin,
    title: 'Adresă',
    value: 'mun. Chișinău, str. Uzinelor 12/1',
    href: '#map',
  },
  {
    icon: Clock,
    title: 'Program',
    value: 'Luni - Vineri: 09:00 - 18:00',
    href: null,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-primary">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Contactează-ne
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Suntem aici să te ajutăm. Contactează-ne pentru o consultanță gratuită 
                sau pentru a solicita o ofertă personalizată.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Solicită o Ofertă
                </h2>
                <p className="text-muted-foreground mb-8">
                  Completează formularul și îți vom răspunde în maxim 24 de ore.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Numele *
                      </label>
                      <Input placeholder="Introduceți numele" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Organizația
                      </label>
                      <Input placeholder="Numele instituției" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email *
                      </label>
                      <Input type="email" placeholder="email@exemplu.md" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Telefon *
                      </label>
                      <Input type="tel" placeholder="+373 XX XXX XXX" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Categorie de interes
                    </label>
                    <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Selectează categoria</option>
                      <option value="scolar">Mobilier Școlar</option>
                      <option value="gradinita">Mobilier Grădiniță</option>
                      <option value="birou">Mobilier Birou</option>
                      <option value="metalic">Mobilier Metalic</option>
                      <option value="altele">Altele</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mesaj
                    </label>
                    <Textarea 
                      placeholder="Descrieți necesitățile dumneavoastră..." 
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="w-4 h-4" />
                    Trimite Cererea
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Informații de Contact
                </h2>
                <p className="text-muted-foreground mb-8">
                  Ne poți contacta direct prin telefon sau email.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="benefit-icon shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div 
                  id="map" 
                  className="rounded-2xl overflow-hidden bg-muted h-64 flex items-center justify-center"
                >
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Hartă interactivă
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
