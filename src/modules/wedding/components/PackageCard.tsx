import { Check } from 'lucide-react';
import { PlannerPackage, formatPrice } from '../data/weddingData';

interface PackageCardProps {
  pkg: PlannerPackage;
  onSelect?: () => void;
}

const PackageCard = ({ pkg, onSelect }: PackageCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:wedding-shadow">
      <h4 className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
        {pkg.name}
      </h4>
      <p className="text-2xl font-bold text-primary mt-2">{formatPrice(pkg.price)}</p>
      <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>

      <ul className="mt-4 space-y-2">
        {pkg.includes.map(item => (
          <li key={item} className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-primary" />
            {item}
          </li>
        ))}
      </ul>

      {onSelect && (
        <button
          onClick={onSelect}
          className="mt-6 w-full py-3 rounded-full text-sm font-medium wedding-gradient text-background transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
          Select Package
        </button>
      )}
    </div>
  );
};

export default PackageCard;
