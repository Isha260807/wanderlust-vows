import { Outlet, Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { to: '/wedding', label: 'Home' },
  { to: '/wedding/destinations', label: 'Destinations' },
  { to: '/wedding/planners', label: 'Planners' },
  { to: '/wedding/enquiry', label: 'Enquiry' },
];

const WeddingLayout = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/wedding" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Weddings
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    location.pathname === link.to ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/wedding/enquiry"
                className="px-5 py-2 rounded-full text-sm font-medium wedding-gradient text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Plan Your Wedding
              </Link>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-b border-border animate-wedding-fade-in">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium py-2 ${
                    location.pathname === link.to ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Weddings</span>
              </div>
              <p className="text-sm opacity-70">Creating unforgettable destination wedding experiences across India's most beautiful locations.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Destinations</h4>
              <div className="space-y-2 text-sm opacity-70">
                {['Goa', 'Jaipur', 'Udaipur', 'Kerala', 'Rishikesh'].map(d => (
                  <Link key={d} to={`/wedding/destinations/${d.toLowerCase()}`} className="block hover:opacity-100 transition-opacity">{d}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Services</h4>
              <div className="space-y-2 text-sm opacity-70">
                {['Full Planning', 'Decor & Design', 'Photography', 'Catering', 'Entertainment'].map(s => (
                  <p key={s}>{s}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Get in Touch</h4>
              <p className="text-sm opacity-70 mb-2">hello@weddings.example.com</p>
              <p className="text-sm opacity-70">+91 98765 43210</p>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm opacity-50">
            © 2026 Weddings. Crafted with love.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeddingLayout;
