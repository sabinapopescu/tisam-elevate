import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Acasă', href: '/' },
  {
    name: 'Produse',
    href: '/produse',
    children: [
      { name: 'Mobilier Școlar', href: '/produse/scolar' },
      { name: 'Mobilier Grădiniță', href: '/produse/gradinita' },
      { name: 'Mobilier Birou', href: '/produse/birou' },
      { name: 'Mobilier Metalic', href: '/produse/metalic' },
    ],
  },
  { name: 'Despre Noi', href: '/despre' },
  { name: 'Contact', href: '/contact' },
];

const languages = [
  { code: 'RO', label: 'Română' },
  { code: 'RU', label: 'Русский' },
  { code: 'EN', label: 'English' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState('RO');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 header-blur shadow-header py-3'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={cn(
              "text-2xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-primary" : "text-primary-foreground"
            )}>
              <span className="text-accent">TISAM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/90 hover:text-primary-foreground",
                    location.pathname === item.href && (isScrolled ? "text-primary" : "text-primary-foreground")
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-slide-down">
                    <div className="bg-card rounded-lg shadow-card-hover border border-border p-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-border/50 rounded-lg px-2 py-1">
              {languages.map((lang, idx) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={cn(
                    "px-2 py-1 text-xs font-medium rounded transition-colors",
                    currentLang === lang.code
                      ? "bg-primary text-primary-foreground"
                      : isScrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-primary-foreground/70 hover:text-primary-foreground"
                  )}
                >
                  {lang.code}
                </button>
              ))}
            </div>

            {/* Phone */}
            <a
              href="tel:+37368522202"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>+373 68 52-22-02</span>
            </a>

            {/* CTA */}
            <Button variant={isScrolled ? "default" : "hero"} size="default">
              Solicită Ofertă
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-down">
            <div className="bg-card rounded-xl shadow-card-hover border border-border p-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="tel:+37368522202"
                  className="flex items-center gap-2 px-4 py-2 text-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>+373 68 52-22-02</span>
                </a>
                <Button variant="hero" className="w-full" size="lg">
                  Solicită Ofertă
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
