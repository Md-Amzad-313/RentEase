import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import PopularRentals from '../components/home/PopularRentals';
import HowItWorks from '../components/home/HowItWorks';

/**
 * Home Page
 * Renders the RentEase Homepage.
 * Part 2.1: Hero Section.
 * Part 2.2: Browse Categories Section.
 * Part 2.3: Popular Rentals Section.
 * Part 2.4: How RentEase Works Section.
 */
export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <CategorySection />
      <PopularRentals />
      <HowItWorks />
    </div>
  );
}

