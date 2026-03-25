import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/wedding-hero.jpg';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury destination wedding"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p
          className={`text-sm md:text-base uppercase tracking-[0.3em] text-background/80 mb-4 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Destination Weddings in India
        </p>
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight max-w-4xl transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Dream Wedding,{' '}
          <span className="italic">Unforgettable</span> Destination
        </h1>
        <p
          className={`mt-6 text-lg md:text-xl text-background/80 max-w-2xl transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          From royal palaces to sun-kissed beaches — plan your perfect celebration at India's most stunning locations
        </p>
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <Link
            to="/wedding/destinations"
            className="px-8 py-4 rounded-full text-base font-medium wedding-gradient text-background transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Explore Destinations
          </Link>
          <Link
            to="/wedding/enquiry"
            className="px-8 py-4 rounded-full text-base font-medium bg-background/20 backdrop-blur-sm text-background border border-background/30 transition-all duration-300 hover:bg-background/30 hover:scale-105"
          >
            Start Planning
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
