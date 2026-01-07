import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Grid, List, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import schoolImage from '@/assets/school-furniture.jpg';
import kindergartenImage from '@/assets/kindergarten-furniture.jpg';
import officeImage from '@/assets/office-furniture.jpg';
import metalImage from '@/assets/metal-furniture.jpg';

const categoryInfo: Record<string, { title: string; description: string; image: string }> = {
  scolar: {
    title: 'Mobilier Școlar',
    description: 'Bănci, scaune, table și tot ce ai nevoie pentru o sală de clasă modernă.',
    image: schoolImage,
  },
  gradinita: {
    title: 'Mobilier Grădiniță',
    description: 'Mobilier sigur, colorat și adaptat nevoilor celor mici.',
    image: kindergartenImage,
  },
  birou: {
    title: 'Mobilier Birou',
    description: 'Soluții ergonomice pentru spații de lucru productive.',
    image: officeImage,
  },
  metalic: {
    title: 'Mobilier Metalic',
    description: 'Dulapuri, rafturi și sisteme de depozitare robuste.',
    image: metalImage,
  },
};

const allProducts = [
  { id: 1, name: 'Bancă Școlară Reglabilă', category: 'scolar', price: 1250, image: schoolImage },
  { id: 2, name: 'Scaun Școlar Ergonomic', category: 'scolar', price: 650, image: schoolImage },
  { id: 3, name: 'Tablă Magnetică 120x90', category: 'scolar', price: 1450, image: schoolImage },
  { id: 4, name: 'Catedră Profesor', category: 'scolar', price: 3200, image: schoolImage },
  { id: 5, name: 'Masă Grădiniță Rotundă', category: 'gradinita', price: 2200, image: kindergartenImage },
  { id: 6, name: 'Scaun Copii Colorat', category: 'gradinita', price: 380, image: kindergartenImage },
  { id: 7, name: 'Dulap Vestiar 4 Secțiuni', category: 'gradinita', price: 3800, image: kindergartenImage },
  { id: 8, name: 'Pat Pliant Grădiniță', category: 'gradinita', price: 1650, image: kindergartenImage },
  { id: 9, name: 'Birou Ergonomic Director', category: 'birou', price: 8500, image: officeImage },
  { id: 10, name: 'Scaun Office Premium', category: 'birou', price: 2950, image: officeImage },
  { id: 11, name: 'Masă Conferință 12 Pers', category: 'birou', price: 15000, image: officeImage },
  { id: 12, name: 'Dulap Metalic 3 Uși', category: 'metalic', price: 4200, image: metalImage },
  { id: 13, name: 'Raft Depozitare Industial', category: 'metalic', price: 2800, image: metalImage },
  { id: 14, name: 'Seif Metalic Siguranță', category: 'metalic', price: 6500, image: metalImage },
];

const filters = [
  { label: 'Toate', value: '' },
  { label: 'Școlar', value: 'scolar' },
  { label: 'Grădiniță', value: 'gradinita' },
  { label: 'Birou', value: 'birou' },
  { label: 'Metalic', value: 'metalic' },
];

const Products = () => {
  const { category } = useParams();
  const [activeFilter, setActiveFilter] = useState(category || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const currentCategory = category ? categoryInfo[category] : null;
  
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = !activeFilter || product.category === activeFilter;
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-primary">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                {currentCategory?.title || 'Toate Produsele'}
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {currentCategory?.description || 'Descoperă gama completă de mobilier pentru instituții educaționale și birouri.'}
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-12 bg-background">
          <div className="container">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Caută produse..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-5 h-5 text-muted-foreground" />
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeFilter === filter.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* View Mode */}
              <div className="flex items-center gap-1 ml-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-muted-foreground mb-6">
              {filteredProducts.length} produse găsite
            </p>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/produs/${product.id}`}
                  className={`group bg-card rounded-2xl overflow-hidden card-elevated ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 shrink-0' : 'aspect-square'
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <span className="text-secondary text-sm font-medium capitalize">
                      {categoryInfo[product.category]?.title || product.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold text-foreground">
                        de la {product.price.toLocaleString()} MDL
                      </span>
                      <Button variant="ghost" size="sm">
                        Detalii
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
