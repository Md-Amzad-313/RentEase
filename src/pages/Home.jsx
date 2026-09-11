import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import PopularRentals from '../components/home/PopularRentals';
import HowItWorks from '../components/home/HowItWorks';
import WhyChooseRentEase from '../components/home/WhyChooseRentEase';
import FinalCTA from '../components/home/FinalCTA';

/**
 * Home Page
 * Renders the RentEase Homepage.
 * Part 2.1: Hero Section.
 * Part 2.2: Browse Categories Section.
 * Part 2.3: Popular Rentals Section.
 * Part 2.4: How RentEase Works Section.
 * Part 2.5: Why Choose RentEase + Final CTA Section.
 */
export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <CategorySection />
      <PopularRentals />
      <HowItWorks />
      <WhyChooseRentEase />
      <FinalCTA />
    </div>
  );
}

