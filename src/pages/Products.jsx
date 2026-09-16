import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { POPULAR_PRODUCTS } from '../data/products';
import ProductCard from '../components/home/ProductCard';
import { X } from 'lucide-react';

/**
 * Products Page – Rental Collection
 * Displays all mock products with category, price, and sorting filters.
 * Supports URL search parameter (?category=Furniture / ?category=Appliances).
 */
export default function Products() {
  const categories = ['All', 'Furniture', 'Appliances'];
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [selected, setSelected] = useState(
    initialCategory && ['Furniture', 'Appliances'].includes(initialCategory) ? initialCategory : 'All'
  );
  const priceRanges = ['All', 'Under ₹800', '₹800 – ₹1 200', '₹1 200 – ₹1 600', 'Above ₹1 600'];
  const [priceRange, setPriceRange] = useState('All');
  const sortOptions = ['Recommended', 'Price Low-High', 'Price High-Low', 'Rating High-Low', 'Name A-Z'];
  const [sortOption, setSortOption] = useState('Recommended');

  // Sync state if URL query params change (e.g. from /categories navigation)
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && ['Furniture', 'Appliances'].includes(cat)) {
      setSelected(cat);
    } else if (!cat) {
      setSelected('All');
    }
  }, [searchParams]);

  const handleCategorySelect = (cat) => {
    setSelected(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = POPULAR_PRODUCTS.filter((p) => {
    const categoryMatch = selected === 'All' ? true : p.category === selected;
    const priceMatch = (() => {
      if (priceRange === 'All') return true;
      if (priceRange === 'Under ₹800') return p.monthlyRent < 800;
      if (priceRange === '₹800 – ₹1 200') return p.monthlyRent >= 800 && p.monthlyRent <= 1200;
      if (priceRange === '₹1 200 – ₹1 600') return p.monthlyRent >= 1200 && p.monthlyRent <= 1600;
      if (priceRange === 'Above ₹1 600') return p.monthlyRent > 1600;
      return true;
    })();
    return categoryMatch && priceMatch;
  });

  // Apply sorting based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'Price Low-High':
        return a.monthlyRent - b.monthlyRent;
      case 'Price High-Low':
        return b.monthlyRent - a.monthlyRent;
      case 'Rating High-Low':
        return b.rating - a.rating;
      case 'Name A-Z':
        return a.name.localeCompare(b.name);
      default:
        return 0; // Recommended - original order
    }
  });

  // Reset all filters to defaults
  const resetFilters = () => {
    setSelected('All');
    setPriceRange('All');
    setSortOption('Recommended');
    setSearchParams({});
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5">
            RENTAL COLLECTION
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Find the right essentials for your space
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Browse furniture and appliances available on flexible monthly rental plans.
          </p>
        </div>

        {/* Filters & Sort Toolbar */}
        <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 sm:p-6 mb-10 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-center lg:justify-start">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline-block">
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                    selected === cat
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price Range Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline-block">
                Price:
              </span>
              {priceRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setPriceRange(range)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                    priceRange === range
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            {/* Sort & Reset Actions */}
            <div className="flex items-center gap-2.5 w-full lg:w-auto justify-center lg:justify-end">
              <div className="flex items-center gap-2">
                <label htmlFor="sort-select" className="text-xs font-bold uppercase tracking-wider text-slate-500 sr-only">
                  Sort by
                </label>
                <select
                  id="sort-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="text-xs sm:text-sm rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20 font-medium"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {(selected !== 'All' || priceRange !== 'All' || sortOption !== 'Recommended') && (
                <button
                  onClick={resetFilters}
                  className="px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Result Count */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-6 px-1">
          <p>
            Showing <strong className="text-slate-900">{sortedProducts.length}</strong> {sortedProducts.length === 1 ? 'rental' : 'rentals'}
          </p>
          {(selected !== 'All' || priceRange !== 'All') && (
            <span className="text-xs font-medium text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
              Filtered ({selected !== 'All' ? selected : ''}{selected !== 'All' && priceRange !== 'All' ? ' · ' : ''}{priceRange !== 'All' ? priceRange : ''})
            </span>
          )}
        </div>

        {/* Product Grid or Empty State */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200/80">
            <p className="text-xl font-bold text-slate-800 mb-2">No rentals found</p>
            <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
              Try adjusting your category or price filters to explore available furniture and appliances.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
