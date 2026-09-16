import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  CalendarClock,
  Truck,
  RefreshCw,
  ShieldCheck,
  Package,
} from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

/**
 * Hero Visual Component
 * Displays a lifestyle visual representing modern urban apartment living,
 * comfortable furniture, quality appliances, and rental convenience.
 * Includes interactive floating cards with fallback support.
 */
function HeroVisual() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reliable high-resolution modern living space image
  const primaryImageUrl =
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80';
  const fallbackImageUrl =
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto animate-hero-fade-in-delayed">
      {/* Ambient background glows */}
      <div
        className="absolute -top-10 -right-10 w-72 h-72 bg-brand-200/40 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Image Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group transition-all duration-300">
        {/* Aspect ratio frame */}
        <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-100">
          {!imageError ? (
            <img
              src={primaryImageUrl}
              alt="Modern urban apartment furnished with comfortable living room sofa and home essentials"
              loading="eager"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                if (e.target.src !== fallbackImageUrl) {
                  e.target.src = fallbackImageUrl;
                } else {
                  setImageError(true);
                }
              }}
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0 scale-95'
              }`}
            />
          ) : (
            /* Graceful offline fallback composition */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-50 to-indigo-100/70 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-lg mb-4">
                <Package className="w-8 h-8" />
              </div>
              <p className="text-base font-semibold text-slate-800">
                Rental-Ready Furniture & Appliances
              </p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                Beds, sofas, desks, refrigerators and more — delivered to your door.
              </p>
            </div>
          )}

          {/* Subtle gradient overlay to enhance floating cards contrast */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating Pill Tag (Top Left of Image) */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-md border border-white/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Quick Delivery
            </span>
          </div>
        </div>

        {/* Floating Highlight Card 1 (Bottom Left Overlay) */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs z-10">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-200/90 flex items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 leading-tight">
                Doorstep Setup Included
              </p>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                Delivery, assembly & scheduled pickup
              </p>
            </div>
          </div>
        </div>

        {/* Floating Highlight Card 2 (Top Right Offset for Desktop/Tablet) */}
        <div className="hidden sm:flex absolute top-4 right-4 z-10 items-center gap-2 bg-slate-900/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-medium shadow-lg border border-slate-700/50">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Verified Quality Guarantee</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Rental Value Highlights Component
 * Displays the 3 key rental value points under the hero section.
 */
function ValueHighlights({ className = '' }) {
  const highlights = [
    {
      id: 'plans',
      title: 'Flexible Plans',
      description: '3, 6 & 12 month options',
      icon: CalendarClock,
    },
    {
      id: 'delivery',
      title: 'Doorstep Delivery',
      description: 'Delivered when you need it',
      icon: Truck,
    },
    {
      id: 'relocation',
      title: 'Easy Relocation',
      description: 'Move without the hassle',
      icon: RefreshCw,
    },
  ];

  return (
    <div
      className={`pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-4 ${className}`}
    >
      {highlights.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className="flex items-start gap-3 group transition-colors duration-150"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-100 group-hover:text-brand-700 transition-colors">
              <IconComponent className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * RentEase Landing Page Hero Section
 * Fully responsive:
 * - Desktop: 2-column grid with Left text/CTAs/value points and Right lifestyle visual
 * - Mobile: Badge -> Heading -> Description -> CTAs -> Lifestyle visual -> Value points
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-brand-100/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col animate-hero-fade-in">
            {/* Small Badge */}
            <div className="mb-5 self-start">
              <Badge variant="primary" size="md" icon={Sparkles}>
                Flexible monthly rentals
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5 text-balance">
              Furniture & appliances on rent.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-700">
                Month to month.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 text-balance">
              Skip the large upfront purchase. Rent beds, sofas, desks,
              refrigerators and more on flexible 3, 6 or 12-month plans.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10">
              <Link to="/products" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto shadow-md shadow-brand-500/25 justify-center"
                >
                  Explore Rentals
                </Button>
              </Link>

              <Link to="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-slate-300 hover:border-slate-400 justify-center"
                >
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Mobile-only visual placement:
                In mobile layout, the visual appears immediately after CTAs and before Value points */}
            <div className="lg:hidden mb-8">
              <HeroVisual />
            </div>

            {/* Rental Value Highlights */}
            <ValueHighlights />
          </div>

          {/* Desktop Lifestyle Rental Visual Column */}
          <div className="hidden lg:block lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
