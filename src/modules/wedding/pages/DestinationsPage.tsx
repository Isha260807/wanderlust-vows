import { useState } from 'react';
import { Search } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import ScrollReveal from '../components/ScrollReveal';
import { destinations } from '../data/weddingData';

const categories = ['All', 'Beach', 'Heritage', 'Hill', 'Resort'] as const;

const DestinationsPage = () => {
  const [active, setActive] = useState<string>('All');
  const [search, setSearch] = useState('');

  const filtered = destinations.filter(d => {
    const matchCat = active === 'All' || d.category === active;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-32 px-4 wedding-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-background mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Explore Destinations
          </h1>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 wedding-shadow"
            />
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? 'wedding-gradient text-background shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dest, i) => (
              <ScrollReveal key={dest.id} delay={i * 80}>
                <DestinationCard destination={dest} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No destinations found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
