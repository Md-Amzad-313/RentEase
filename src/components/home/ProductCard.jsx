import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CalendarClock, Package } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

/**
 * ProductCard Component
 * Reusable product preview card used in the Popular Rentals section.
 * Receives product info via props and renders an interactive, accessible card.
 */
export default function ProductCard({ product }) {
  const {
    name,
    category,
    monthlyRent,
    securityDeposit,
    rating,
    image,
    fallbackImage,
    tenureHint = 'Flexible 3, 6 & 12 month plans',
  } = product;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-200/80 transition-all duration-300 overflow-hidden">
      {/* Top Section: Image, Category Badge, Rating */}
      <div>
        {/* Image Container with Fixed Aspect Ratio */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
          {!imageError ? (
            <img
              src={image}
              alt={name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                if (fallbackImage && e.target.src !== fallbackImage) {
                  e.target.src = fallbackImage;
                } else {
                  setImageError(true);
                }
              }}
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            /* Fallback display */
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4">
              <Package className="w-10 h-10 mb-1 stroke-1" />
              <span className="text-xs font-medium">{category}</span>
            </div>
          )}

          {/* Category Badge overlay on top-left */}
          <div className="absolute top-3 left-3 z-10">
            <Badge
              variant={category === 'Furniture' ? 'primary' : 'secondary'}
              size="sm"
              className="bg-white/95 backdrop-blur-md shadow-xs border-white/80 font-semibold"
            >
              {category}
            </Badge>
          </div>

          {/* Rating Pill on top-right */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-slate-800 shadow-xs border border-white/80">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{rating.toFixed(1)}</span>
            </span>
          </div>
        </div>

        {/* Content Details Area */}
        <div className="p-5">
          {/* Product Name */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-700 transition-colors line-clamp-1">
            {name}
          </h3>

          {/* Pricing Hierarchy */}
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              ₹{monthlyRent.toLocaleString()}
            </span>
            <span className="text-xs font-medium text-slate-500">/ month</span>
          </div>

          <p className="text-xs text-slate-500 mt-0.5">
            Security deposit ₹{securityDeposit.toLocaleString()}
          </p>

          {/* Tenure Hint */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
            <CalendarClock className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span>{tenureHint}</span>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="px-5 pb-5 pt-0">
        <Link to={`/products/${product.id}`} className="block w-full">
          <Button
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="w-full justify-center group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 shadow-xs transition-all duration-200"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
