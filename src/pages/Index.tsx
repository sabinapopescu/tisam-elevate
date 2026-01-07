import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { ClientsSection } from '@/components/home/ClientsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <BenefitsSection />
        <ProductsSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
