import { Link } from 'react-router-dom';
import { MapPin, Building2 } from 'lucide-react';
import { Destination, formatPrice } from '../data/weddingData';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Link
      to={`/wedding/destinations/${destination.id}`}
      className="group block rounded-2xl overflow-hidden bg-card wedding-shadow transition-all duration-500 hover:wedding-shadow-hover hover:-translate-y-2"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/90 text-foreground backdrop-blur-sm">
            {destination.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 text-background">
          <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            {destination.name}
          </h3>
          <div className="flex items-center gap-1 text-sm opacity-90 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            {destination.location}
          </div>
        </div>
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Starting from</p>
          <p className="text-lg font-semibold text-primary">{formatPrice(destination.startingPrice)}</p>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <Building2 className="w-4 h-4" />
          {destination.venueCount} Venues
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
