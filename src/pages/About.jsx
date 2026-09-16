import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home as HomeIcon,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarClock,
  Truck,
  Users,
  CheckCircle2,
  Wallet,
  Search,
  Sliders,
  ClipboardList,
  Sofa,
  Tv,
  Layers,
  HeartHandshake,
  RefreshCw,
  Leaf,
  Mail,
  Check,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import heroImage from '../assets/hero.png';

/**
 * Mission Values Data
 */
const MISSION_VALUES = [
  {
    icon: Wallet,
    title: 'Affordability',
    description:
      'Reduce the upfront cost of setting up a home by swapping large capital purchases for lightweight, predictable monthly rentals.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    icon: CalendarClock,
    title: 'Flexibility',
    description:
      'Choose rental durations that fit your needs — 3, 6, or 12 months — with easy extensions, swaps, and relocation options.',
    color: 'bg-brand-50 text-brand-600 border-brand-100',
  },
  {
    icon: Truck,
    title: 'Convenience',
    description:
      'Make delivery, unboxing, professional assembly, and scheduled returns hassle-free so you can settle in immediately.',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
];

/**
 * How It Works 4-Step Process
 */
const PROCESS_STEPS = [
  {
    step: '01',
    icon: Search,
    title: 'Browse',
    description:
      'Explore curated collections of essential bedroom, living, study furniture, and modern home appliances.',
  },
  {
    step: '02',
    icon: Sliders,
    title: 'Choose',
    description:
      'Select your preferred item specifications, rental tenure (3, 6, or 12 months), and delivery options.',
  },
  {
    step: '03',
    icon: ClipboardList,
    title: 'Rent',
    description:
      'Submit your rental request online with transparent pricing, zero hidden charges, and minimal security deposit.',
  },
  {
    step: '04',
    icon: HomeIcon,
    title: 'Enjoy',
    description:
      'Get your essentials delivered straight to your doorstep and enjoy the freedom of comfortable subscription living.',
  },
];

/**
 * Why Choose RentEase Feature Cards
 */
const WHY_CHOOSE_FEATURES = [
  {
    icon: CalendarClock,
    title: 'Flexible Rental Plans',
    description:
      'Custom 3, 6, and 12-month rental tenures tailored for student semesters, work contracts, or temporary relocations.',
  },
  {
    icon: Wallet,
    title: 'Affordable Monthly Pricing',
    description:
      'Accessible monthly subscription rates with low security deposits that keep your hard-earned savings intact.',
  },
  {
    icon: Layers,
    title: 'Furniture & Appliances in One Place',
    description:
      'Everything you need for bedroom, living room, study, and kitchen under a single unified rental platform.',
  },
  {
    icon: Truck,
    title: 'Convenient Doorstep Delivery',
    description:
      'Prompt delivery and careful doorstep placement so you do not have to worry about transport logistics.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Rental Management',
    description:
      'Clear, self-service dashboard to manage active rentals, review monthly breakdowns, and request support.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Customer Support',
    description:
      'Friendly customer success team ready to assist with setup questions, plan modifications, and returns.',
  },
];

/**
 * Illustrative Highlights & Platform Scope
 */
const PLATFORM_METRICS = [
  {
    label: 'Flexible Plans',
    value: '3, 6 & 12 Mo',
    detail: 'Adaptable to your timeline',
  },
  {
    label: 'Rental Catalog',
    value: 'Furniture & Appliances',
    detail: 'Complete home essentials',
  },
  {
    label: 'Online Process',
    value: '100% Digital',
    detail: 'Simple online rental requests',
  },
  {
    label: 'Modern Living',
    value: 'Zero Ownership Burden',
    detail: 'Move freely without selling hassles',
  },
];

/**
 * Target Audience Highlights
 */
const TARGET_AUDIENCE = [
  'Students relocating for college or university',
  'Working professionals on short or long-term job contracts',
  'People moving to a new city looking for instant setup',
  'Individuals staying temporarily in rental apartments',
  'Smart spenders who prefer flexibility over heavy ownership costs',
];

/**
 * Problem Solving Highlights
 */
const SOLVED_PROBLEMS = [
  'Avoiding thousands in upfront furniture & appliance purchase costs',
  'Eliminating the hassle of moving heavy goods during city relocations',
  'No need to deal with second-hand buyer bargaining when moving out',
  'Access to quality, verified essentials without long-term debt',
];

/**
 * About Us Page Component (Part 3.14)
 */
export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1"
              >
                <HomeIcon className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-slate-900 px-1" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>

        {/* 1. HERO SECTION */}
        <section
          aria-labelledby="about-hero-heading"
          className="relative bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-14 mb-16 sm:mb-20 overflow-hidden"
        >
          {/* Subtle ambient lighting */}
          <div
            className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-brand-50/60 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-4 shadow-2xs">
                ABOUT RENTEASE
              </span>

              <h1
                id="about-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
              >
                Making Rental Living Simple & Flexible
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Rent the furniture and appliances you need, when you need them — with flexible monthly
                plans designed for modern living.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <Link to="/products" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="w-full sm:w-auto justify-center shadow-sm shadow-brand-500/20"
                  >
                    Explore Rentals
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    icon={Mail}
                    iconPosition="left"
                    className="w-full sm:w-auto justify-center bg-white hover:bg-slate-50 border-slate-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200/90 shadow-md group">
                <img
                  src={heroImage}
                  alt="Modern urban living space furnished with RentEase essentials"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-md border border-white/60 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                    Flexible Monthly Subscriptions
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Quality furniture and appliances delivered to your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHO WE ARE */}
        <section
          aria-labelledby="who-we-are-heading"
          className="mb-16 sm:mb-20 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5">
              WHO WE ARE
            </span>
            <h2
              id="who-we-are-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Built for the Way You Live
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              RentEase was created to solve the friction of setting up a temporary or long-term home.
              Whether you are moving across the city or across the country, we provide the essentials
              without locking you into expensive purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Column 1: Who RentEase is for */}
            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Designed for Modern Lifestyles
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Our rental subscription model is specifically tailored to meet the needs of:
                </p>
                <ul className="space-y-3">
                  {TARGET_AUDIENCE.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: The Problems We Solve */}
            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    The Problem We Address
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Traditional home setup is full of friction and unnecessary financial commitments:
                </p>
                <ul className="space-y-3">
                  {SOLVED_PROBLEMS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR MISSION */}
        <section
          aria-labelledby="mission-heading"
          className="mb-16 sm:mb-20 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-xl relative overflow-hidden"
        >
          {/* Ambient decorative glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">
              OUR MISSION
            </span>
            <h2
              id="mission-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4"
            >
              To make quality furniture and appliances accessible through simple, affordable and flexible rental plans.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We believe comfort shouldn't require long-term debt or moving stress. RentEase empowers you
              to create a home on your own terms.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {MISSION_VALUES.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-slate-600 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-700/90 text-brand-400 flex items-center justify-center mb-4 border border-slate-600/60">
                      <ValIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. HOW RENTEASE WORKS */}
        <section
          aria-labelledby="how-it-works-heading"
          className="mb-16 sm:mb-20 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5">
              SIMPLE 4-STEP PROCESS
            </span>
            <h2
              id="how-it-works-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              How RentEase Works
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Getting started is straightforward, transparent, and completely digital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, idx) => {
              const StepIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black text-brand-600 bg-brand-50 border border-brand-200/80 px-2.5 py-1 rounded-lg">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-brand-50 text-slate-700 group-hover:text-brand-600 flex items-center justify-center border border-slate-200/80 group-hover:border-brand-200 transition-colors shadow-2xs">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. WHY CHOOSE RENTEASE */}
        <section
          aria-labelledby="why-choose-heading"
          className="mb-16 sm:mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
              KEY ADVANTAGES
            </span>
            <h2
              id="why-choose-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
            >
              Why Choose RentEase?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Designed around flexibility, convenience, and transparent monthly pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_FEATURES.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-brand-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100 mb-4 shadow-2xs">
                      <FeatureIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. RENTEASE BY THE NUMBERS (ILLUSTRATIVE / MOCK) */}
        <section
          aria-labelledby="numbers-heading"
          className="mb-16 sm:mb-20 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5">
              PLATFORM OVERVIEW
            </span>
            <h2
              id="numbers-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2"
            >
              RentEase at a Glance
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear, transparent framework engineered for modern subscription living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORM_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 text-center flex flex-col items-center justify-center"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {metric.label}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-brand-600 mb-1">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-500">{metric.detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. SUSTAINABILITY / RESPONSIBLE RENTING */}
        <section
          aria-labelledby="sustainability-heading"
          className="mb-16 sm:mb-20 bg-emerald-50/60 rounded-3xl border border-emerald-200/80 p-6 sm:p-10 lg:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-2xs">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-0.5 rounded-full mb-3">
              RESPONSIBLE RENTING
            </span>
            <h2
              id="sustainability-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Rent More, Buy Less
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Renting supports a more circular approach to home setup. By sharing and reusing quality furniture
              and appliances across multiple tenures, rental models help avoid fast-consumption purchases
              and reduce items discarded during frequent city relocations.
            </p>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 bg-white/80 border border-emerald-200/80 px-4 py-2 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Extending the lifecycle of quality household goods</span>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section
          aria-labelledby="about-cta-heading"
          className="rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-10 lg:px-16 text-white shadow-xl relative overflow-hidden"
        >
          {/* Decorative ambient background accents */}
          <div
            className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">
              FLEXIBLE LIVING STARTS HERE
            </span>
            <h2
              id="about-cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4"
            >
              Ready to Make Your Space Feel Like Home?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Explore flexible furniture and appliance rentals designed around your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/products" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto justify-center shadow-lg shadow-brand-500/20"
                >
                  Browse Rentals
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  icon={Mail}
                  iconPosition="left"
                  className="w-full sm:w-auto justify-center bg-slate-800/80 hover:bg-slate-800 text-white border-slate-700"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

