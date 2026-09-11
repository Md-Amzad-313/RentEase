import React from 'react';
import { Link } from 'react-router-dom';
import { PackageSearch, CalendarDays, Truck, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

/**
 * HowItWorks Component
 * Part 2.4 — "How RentEase Works" section on the homepage.
 * Explains the 3-step rental journey with clear visual hierarchy,
 * step indicators, and a centered conversion CTA.
 */
export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      stepLabel: 'Step 01',
      title: 'Choose what you need',
      description:
        'Browse our collection of furniture and appliances and find what fits your space and lifestyle.',
      icon: PackageSearch,
    },
    {
      number: '02',
      stepLabel: 'Step 02',
      title: 'Pick your rental plan',
      description:
        'Choose a flexible monthly rental plan with a tenure that works for you.',
      icon: CalendarDays,
    },
    {
      number: '03',
      stepLabel: 'Step 03',
      title: 'Get it delivered',
      description:
        'Schedule your delivery and get your rental delivered conveniently to your doorstep.',
      icon: Truck,
    },
  ];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative py-16 sm:py-24 bg-white border-t border-slate-200/80 overflow-hidden"
    >
      {/* Subtle ambient lighting in the background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-50/60 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
          {/* Eyebrow */}
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5">
            HOW IT WORKS
          </span>

          {/* Heading */}
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Renting made simple
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            From choosing your essentials to getting them delivered, RentEase
            keeps the entire rental experience simple and flexible.
          </p>
        </div>

        {/* 3-Step Cards Container with Desktop Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative group flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-200/80 transition-all duration-300 p-6 sm:p-8"
              >
                {/* Desktop subtle connector between steps 1->2 and 2->3 */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-14 -right-4 w-8 border-t-2 border-dashed border-slate-200 z-10 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                <div>
                  {/* Top Row: Icon & Step Number Indicator */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100/80 shadow-xs group-hover:scale-105 group-hover:bg-brand-100 group-hover:text-brand-700 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-200/60 transition-colors">
                      {step.stepLabel}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-brand-700 transition-colors mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle card bottom accent line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>Step {index + 1} of 3</span>
                  <span className="text-brand-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Simple & Flexible <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link to="/products" className="inline-block">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="shadow-md shadow-brand-500/20 hover:shadow-brand-500/30 hover:scale-[1.02] active:scale-100 transition-all px-8 py-3.5"
            >
              Browse Rentals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
