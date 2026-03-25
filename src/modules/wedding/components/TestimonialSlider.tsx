import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/weddingData';

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="w-full flex-shrink-0 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <p className="text-xl md:text-2xl leading-relaxed text-foreground italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="mt-3 font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-primary w-8' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
