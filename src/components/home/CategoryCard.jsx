import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

/**
 * CategoryCard Component
 * Displays a rich, interactive card for RentEase rental categories (Furniture / Appliances).
 * Features layered visuals, example product pills with Lucide icons, and a conversion CTA.
 */
export default function CategoryCard({
  title,
  description,
  tag,
  icon: MainIcon,
  examples = [],
  ctaText,
  ctaLink = '/products',
  imageSrc,
  imageAlt,
  accentColor = 'brand',
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-200/80 transition-all duration-300 p-6 sm:p-8 lg:p-10 overflow-hidden">
      {/* Subtle top-right ambient glow */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 bg-brand-100/40 rounded-full blur-3xl -z-10 group-hover:bg-brand-200/50 transition-colors duration-300 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header Row: Icon + Tag */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100/80 shadow-sm group-hover:scale-105 group-hover:bg-brand-100 transition-all duration-300">
            <MainIcon className="w-6 h-6" />
          </div>
          {tag && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-200/60 transition-colors">
              <Sparkles className="w-3 h-3 text-brand-500" />
              {tag}
            </span>
          )}
        </div>

        {/* Category Title & Description */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5 max-w-md">
          {description}
        </p>

        {/* Visual Accent Element: Curated category preview banner */}
        {imageSrc && !imageError && (
          <div className="relative mt-6 rounded-2xl overflow-hidden aspect-[16/8] bg-slate-100 border border-slate-100 shadow-inner">
            <img
              src={imageSrc}
              alt={imageAlt || `${title} category preview`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Example Items List */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
            Popular in {title}
          </span>
          <div className="flex flex-wrap gap-2">
            {examples.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-white text-slate-700 hover:text-brand-700 border border-slate-200/80 hover:border-brand-200 hover:shadow-xs transition-all duration-150 text-xs sm:text-sm font-medium select-none"
                >
                  {ItemIcon && (
                    <ItemIcon className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-brand-600 shrink-0" />
                  )}
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <Link to={ctaLink} className="block w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="w-full sm:w-auto shadow-sm shadow-brand-500/20 group-hover:shadow-brand-500/30 group-hover:bg-brand-700 transition-all justify-center"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
