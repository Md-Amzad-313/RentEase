import React, { useState } from 'react';

import { POPULAR_PRODUCTS } from '../data/products';
import ProductCard from '../components/home/ProductCard';

/**
 * Products Page – Rental Collection
 * Displays all mock products with a simple category filter.
 */
export default function Products() {
    const categories = ['All', 'Furniture', 'Appliances'];
  const [selected, setSelected] = useState('All');
  const priceRanges = ['All', 'Under ₹800', '₹800 – ₹1 200', '₹1 200 – ₹1 600', 'Above ₹1 600'];
  const [priceRange, setPriceRange] = useState('All');
  const sortOptions = ['Recommended', 'Price Low-High', 'Price High-Low', 'Rating High-Low', 'Name A-Z'];
  const [sortOption, setSortOption] = useState('Recommended');

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

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  selected === cat
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Price Range Tabs */}
          <div className="flex gap-2">
            {priceRanges.map((range) => (
              <button
                key={range}
                onClick={() => setPriceRange(range)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  priceRange === range
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          {/* Sort Select */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-md border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            {sortOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {/* Clear Filters */}
          {(selected !== 'All' || priceRange !== 'All' || sortOption !== 'Recommended') && (
            <button
              onClick={resetFilters}
              className="px-3 py-1 rounded-md text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Result Count */}
        <p className="text-sm text-slate-600 mb-4 text-center">
          {sortedProducts.length} rentals available
        </p>

        {/* Product Grid or Empty State */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl font-medium text-slate-700 mb-2">No rentals found</p>
            <p className="text-slate-500 mb-4">
              Try adjusting your filters or clear them to see available rentals.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              Clear Filters
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
