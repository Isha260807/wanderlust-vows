import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Planner, formatPrice } from '../data/weddingData';

interface PlannerCardProps {
  planner: Planner;
}

const PlannerCard = ({ planner }: PlannerCardProps) => {
  return (
    <Link
      to={`/wedding/planners/${planner.id}`}
      className="group block rounded-2xl overflow-hidden bg-card border border-border p-6 transition-all duration-500 hover:wedding-shadow-hover hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <img
          src={planner.avatar}
          alt={planner.name}
          className="w-16 h-16 rounded-full bg-muted"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
            {planner.name}
          </h3>
          <p className="text-sm text-muted-foreground">{planner.company}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium">{planner.rating}</span>
            <span className="text-xs text-muted-foreground">({planner.reviewCount})</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="w-3.5 h-3.5" />
        {planner.cities.join(', ')}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {planner.specialties.map(s => (
          <span key={s} className="px-2.5 py-1 rounded-full text-xs bg-muted text-muted-foreground">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Starting from</p>
          <p className="text-base font-semibold text-primary">{formatPrice(planner.startingPrice)}</p>
        </div>
        <span className="px-4 py-2 rounded-full text-xs font-medium wedding-gradient text-background transition-all duration-300 group-hover:shadow-md">
          View Profile
        </span>
      </div>
    </Link>
  );
};

export default PlannerCard;
