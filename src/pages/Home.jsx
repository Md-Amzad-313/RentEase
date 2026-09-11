import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import PopularRentals from '../components/home/PopularRentals';

/**
 * Home Page
 * Renders the RentEase Homepage.
 * Part 2.1: Hero Section.
 * Part 2.2: Browse Categories Section.
 * Part 2.3: Popular Rentals Section.
 */
export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <CategorySection />
      <PopularRentals />
    </div>
  );
}

