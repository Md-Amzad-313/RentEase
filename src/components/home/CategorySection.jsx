import React from 'react';
import {
  Sofa,
  Tv,
  BedDouble,
  Table,
  Armchair,
  Layers,
  Refrigerator,
  WashingMachine,
  Microwave,
  AirVent,
} from 'lucide-react';
import CategoryCard from './CategoryCard';

/**
 * CategorySection Component
 * Part 2.2 — Browse Categories Section for RentEase homepage.
 * Showcases the two primary rental categories: Furniture & Appliances.
 */
export default function CategorySection() {
  const furnitureCategory = {
    title: 'Furniture',
    description:
      'Create a comfortable space with furniture that fits your lifestyle.',
    tag: 'Living & Bedroom',
    icon: Sofa,
    examples: [
      { name: 'Beds', icon: BedDouble },
      { name: 'Sofas', icon: Sofa },
      { name: 'Tables', icon: Table },
      { name: 'Chairs', icon: Armchair },
      { name: 'Wardrobes', icon: Layers },
    ],
    ctaText: 'Explore Furniture',
    ctaLink: '/products',
    imageSrc:
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Comfortable modern furniture including bed and bedroom set',
  };

  const appliancesCategory = {
    title: 'Appliances',
    description:
      'Get the essential appliances you need without the upfront cost.',
    tag: 'Home Essentials',
    icon: Tv,
    examples: [
      { name: 'TVs', icon: Tv },
      { name: 'Refrigerators', icon: Refrigerator },
      { name: 'Washing Machines', icon: WashingMachine },
      { name: 'Microwaves', icon: Microwave },
      { name: 'Air Conditioners', icon: AirVent },
    ],
    ctaText: 'Explore Appliances',
    ctaLink: '/products',
    imageSrc:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern home appliances in a contemporary kitchen',
  };

  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="relative py-16 sm:py-24 bg-white/60 border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          {/* Section Eyebrow */}
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5">
            EXPLORE RENTALS
          </span>

          {/* Section Main Heading */}
          <h2
            id="categories-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Everything you need for your space
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            From comfortable furniture to everyday appliances, rent what you
            need with flexible monthly plans.
          </p>
        </div>

        {/* Categories 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <CategoryCard {...furnitureCategory} />
          <CategoryCard {...appliancesCategory} />
        </div>
      </div>
    </section>
  );
}
