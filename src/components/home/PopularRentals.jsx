import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import ProductCard from './ProductCard';
import { POPULAR_PRODUCTS } from '../../data/products';

/**
 * PopularRentals Component
 * Part 2.3 — Popular Rentals preview showcase for the RentEase homepage.
 * Renders a responsive grid of high-demand rental items across Furniture & Appliances.
 */
export default function PopularRentals() {
  return (
    <section
      id="popular-rentals"
      aria-labelledby="popular-rentals-heading"
      className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          {/* Header Texts */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5">
              POPULAR RENTALS
            </span>

            {/* Main Heading */}
            <h2
              id="popular-rentals-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3"
            >
              Popular rental choices
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
              Top-selected furniture and appliance rentals on flexible 3, 6, and 12-month tenures.
            </p>
          </div>

          {/* Desktop Right Link: View all rentals → */}
          <div className="hidden md:block shrink-0">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors group"
            >
              <span>View all rentals</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Product Grid:
            - Desktop (xl): 4 columns
            - Tablet (sm/lg): 2 or 3 columns
            - Mobile: 1 column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {POPULAR_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View all rentals CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-brand-600 hover:text-brand-700 shadow-xs hover:border-brand-300 w-full sm:w-auto transition-all"
          >
            <span>View all rentals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
