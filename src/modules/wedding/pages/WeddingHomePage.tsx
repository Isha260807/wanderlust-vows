import { Link } from 'react-router-dom';
import { MapPin, Eye, Calendar, Heart, Compass, Camera, Utensils, Music } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import DestinationCard from '../components/DestinationCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ScrollReveal from '../components/ScrollReveal';
import { destinations, budgetBuckets } from '../data/weddingData';

const steps = [
  { icon: Compass, title: 'Discover', desc: 'Browse stunning destinations across India' },
  { icon: Eye, title: 'Visit', desc: 'Tour venues virtually or in person' },
  { icon: Calendar, title: 'Book', desc: 'Reserve your dream date and venue' },
  { icon: Heart, title: 'Celebrate', desc: 'Let us handle the rest — you just enjoy' },
];

const whyUs = [
  { icon: MapPin, title: '50+ Venues', desc: 'Curated venues across 6 destinations' },
  { icon: Camera, title: 'Top Photographers', desc: 'Award-winning wedding photographers' },
  { icon: Utensils, title: 'Gourmet Catering', desc: 'Multi-cuisine menus for every palate' },
  { icon: Music, title: 'Entertainment', desc: 'Live bands, DJs, and cultural performances' },
];

const WeddingHomePage = () => {
  return (
    <div>
      <HeroSection />

      {/* How It Works */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Simple Process</p>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                How It Works
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-20 h-20 rounded-2xl wedding-gradient flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <step.icon className="w-8 h-8 text-background" />
                  </div>
                  <div className="text-sm font-semibold text-primary mb-1">Step {i + 1}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 px-4 wedding-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Dream Locations</p>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Popular Destinations
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {destinations.slice(0, 5).map((dest, i) => (
              <ScrollReveal key={dest.id} delay={i * 100} className="min-w-[320px] snap-start">
                <DestinationCard destination={dest} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/wedding/destinations"
              className="inline-block px-8 py-3 rounded-full text-sm font-medium border-2 border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Our Promise</p>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Choose Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="text-center p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:wedding-shadow">
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Real Weddings Gallery */}
      <section className="py-24 px-4 wedding-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Inspiration</p>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Real Weddings
              </h2>
            </div>
          </ScrollReveal>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {destinations.map((dest, i) => (
              <ScrollReveal key={dest.id} delay={i * 80}>
                <div className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      src={dest.image}
                      alt={`Wedding in ${dest.name}`}
                      loading="lazy"
                      className="w-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-center justify-center">
                      <p className="text-background font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {dest.name} Wedding
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Love Stories</p>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                What Couples Say
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <TestimonialSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* Budget Buckets */}
      <section className="py-24 px-4 wedding-gradient-soft">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">For Every Budget</p>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Find Your Perfect Range
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {budgetBuckets.map((b, i) => (
              <ScrollReveal key={b.label} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border border-border text-center transition-all duration-300 hover:wedding-shadow hover:-translate-y-1">
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{b.label}</h3>
                  <p className="text-2xl font-bold text-primary mt-2">{b.range}</p>
                  <p className="text-sm text-muted-foreground mt-3">{b.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-4 wedding-gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Begin Your Journey?
          </h2>
          <p className="text-background/80 mb-8 text-lg">
            Let us help you create the wedding of your dreams
          </p>
          <Link
            to="/wedding/enquiry"
            className="inline-block px-10 py-4 rounded-full text-base font-medium bg-background text-foreground transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Start Planning Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WeddingHomePage;
