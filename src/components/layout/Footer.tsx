import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  produse: [
    { name: 'Mobilier Școlar', href: '/produse/scolar' },
    { name: 'Mobilier Grădiniță', href: '/produse/gradinita' },
    { name: 'Mobilier Birou', href: '/produse/birou' },
    { name: 'Mobilier Metalic', href: '/produse/metalic' },
  ],
  companie: [
    { name: 'Despre Noi', href: '/despre' },
    { name: 'Clienți & Parteneri', href: '/despre#clienti' },
    { name: 'Certificări', href: '/despre#certificari' },
    { name: 'Cariere', href: '/cariere' },
  ],
  suport: [
    { name: 'Contact', href: '/contact' },
    { name: 'Livrare', href: '/livrare' },
    { name: 'Garanție', href: '/garantie' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-bold">
                <span className="text-accent">TISAM</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed">
              Producător și distribuitor de mobilier pentru instituții educaționale și birouri. 
              Calitate certificată, livrare rapidă în toată Moldova.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+37368522202" className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5 text-accent" />
                <span>+373 68 52-22-02</span>
              </a>
              <a href="mailto:info@tisam.md" className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@tisam.md</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/90">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span>mun. Chișinău, str. Uzinelor 12/1</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <Clock className="w-5 h-5 text-accent" />
                <span>Luni - Vineri: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Produse</h4>
            <ul className="space-y-3">
              {footerLinks.produse.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Companie</h4>
            <ul className="space-y-3">
              {footerLinks.companie.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Suport</h4>
            <ul className="space-y-3">
              {footerLinks.suport.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} TISAM. Toate drepturile rezervate.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
