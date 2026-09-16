import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home as HomeIcon,
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
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CalendarClock,
  Truck,
  Users,
} from 'lucide-react';
import { POPULAR_PRODUCTS } from '../data/products';
import Button from '../components/ui/Button';
import heroImage from '../assets/hero.png';

/**
 * Structured Category & Subcategory Catalog Data
 */
const CATEGORY_DATA = {
  furniture: {
    id: 'furniture',
    title: 'Furniture',
    tagline: 'Living, Bedroom & Study Essentials',
    description:
      'Transform your home with modern, comfortable, and durable furniture. From queen beds to ergonomic study desks, rent what you need without the heavy upfront price tag.',
    icon: Sofa,
    queryParam: 'Furniture',
    badge: '3+ Items in Stock',
    bannerImage: heroImage,
    subcategories: [
      {
        id: 'beds',
        name: 'Beds & Mattresses',
        description: 'Comfortable queen and single beds engineered for restful sleep.',
        count: '1+ products',
        startingPrice: 899,
        icon: BedDouble,
        link: '/products?category=Furniture',
        popular: true,
      },
      {
        id: 'sofas',
        name: 'Sofas & Seating',
        description: 'Plush 3-seater sofas and lounge couches for living spaces.',
        count: '1+ products',
        startingPrice: 1199,
        icon: Sofa,
        link: '/products?category=Furniture',
        popular: true,
      },
      {
        id: 'tables-desks',
        name: 'Tables & Desks',
        description: 'Ergonomic study desks, workstations, and dining surfaces.',
        count: '1+ products',
        startingPrice: 599,
        icon: Table,
        link: '/products?category=Furniture',
        popular: true,
      },
      {
        id: 'chairs',
        name: 'Chairs & Ergonomics',
        description: 'High-back ergonomic work chairs and comfortable accent seating.',
        count: '2+ options',
        startingPrice: 499,
        icon: Armchair,
        link: '/products?category=Furniture',
        popular: false,
      },
      {
        id: 'storage',
        name: 'Storage & Wardrobes',
        description: 'Multi-door wardrobes, bookshelves, and sleek utility cabinets.',
        count: '2+ options',
        startingPrice: 699,
        icon: Layers,
        link: '/products?category=Furniture',
        popular: false,
      },
    ],
  },
  appliances: {
    id: 'appliances',
    title: 'Appliances',
    tagline: 'Smart Electronics & Kitchen Utilities',
    description:
      'Equip your living space with energy-efficient home appliances. Enjoy top brand refrigerators, washing machines, and smart TVs with free delivery and routine servicing.',
    icon: Tv,
    queryParam: 'Appliances',
    badge: '3+ Items in Stock',
    bannerImage:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    subcategories: [
      {
        id: 'refrigerators',
        name: 'Refrigerators',
        description: 'Frost-free double door and compact energy-saver refrigerators.',
        count: '1+ products',
        startingPrice: 1499,
        icon: Refrigerator,
        link: '/products?category=Appliances',
        popular: true,
      },
      {
        id: 'washing-machines',
        name: 'Washing Machines',
        description: 'Quiet inverter front-load and top-load automatic washing machines.',
        count: '1+ products',
        startingPrice: 999,
        icon: WashingMachine,
        link: '/products?category=Appliances',
        popular: true,
      },
      {
        id: 'televisions',
        name: 'Smart Televisions',
        description: '43-inch and 55-inch Full HD & 4K Smart TVs with streaming apps.',
        count: '1+ products',
        startingPrice: 799,
        icon: Tv,
        link: '/products?category=Appliances',
        popular: true,
      },
      {
        id: 'air-conditioners',
        name: 'Air Conditioners',
        description: 'Split inverter ACs for rapid and silent room climate control.',
        count: 'Available soon',
        startingPrice: 1299,
        icon: AirVent,
        link: '/products?category=Appliances',
        popular: false,
      },
      {
        id: 'kitchen-appliances',
        name: 'Kitchen Appliances',
        description: 'Microwave ovens, induction cooktops, and essential culinary gear.',
        count: 'Available soon',
        startingPrice: 449,
        icon: Microwave,
        link: '/products?category=Appliances',
        popular: false,
      },
    ],
  },
};

/**
 * Featured Popular Categories Curated Showcase
 */
const POPULAR_CATEGORIES = [
  {
    title: 'Queen Bedroom Suite',
    category: 'Furniture',
    description: 'Solid wood queen bed with ergonomic headboard and supportive posture base.',
    startingRent: 899,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    link: '/products?category=Furniture',
    tag: 'Top Rated',
  },
  {
    title: 'Living Room Comfort',
    category: 'Furniture',
    description: 'Generously cushioned 3-seater sofas tailored for relaxation and hosting.',
    startingRent: 1199,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    link: '/products?category=Furniture',
    tag: 'Most Rented',
  },
  {
    title: 'Work From Home Setups',
    category: 'Furniture',
    description: 'Clean minimalist study desks with integrated cable management.',
    startingRent: 599,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
    link: '/products?category=Furniture',
    tag: 'WFH Choice',
  },
  {
    title: 'Smart Cooling & Fridges',
    category: 'Appliances',
    description: '300L Frost-free double door refrigerators with 5-star energy efficiency.',
    startingRent: 1499,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?auto=format&fit=crop&w=600&q=80',
    link: '/products?category=Appliances',
    tag: 'Essential',
  },
  {
    title: 'Automated Laundry',
    category: 'Appliances',
    description: 'Inverter-powered front load washing machines with 15 wash cycles.',
    startingRent: 999,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80',
    link: '/products?category=Appliances',
    tag: 'Customer Fav',
  },
  {
    title: 'Smart Home Entertainment',
    category: 'Appliances',
    description: '43-inch Full HD Smart TVs with built-in Wi-Fi and streaming apps.',
    startingRent: 799,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
    link: '/products?category=Appliances',
    tag: 'Entertainment',
  },
];

/**
 * Value Proposition Pillars
 */
const VALUE_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Lower Upfront Cost',
    description:
      'Avoid high capital expenditures. Furnish your entire home with low, predictable monthly rental payments and minimal security deposits.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Rental Plans',
    description:
      'Choose 3, 6, or 12-month tenures. Upgrade your items, extend your plan, or return with zero penalty once your lease finishes.',
  },
  {
    icon: Truck,
    title: 'Free Delivery & Setup',
    description:
      'Our dedicated logistics crew delivers, unboxes, and expertly sets up your furniture and appliances right where you want them.',
  },
  {
    icon: Users,
    title: 'Ideal for Urban Living',
    description:
      'Tailored for mobile professionals, students, and relocating families who prioritize agility over the burden of ownership.',
  },
];

/**
 * Categories Page Component (Part 3.13)
 * Comprehensive category browser with deep navigation links into the products catalog.
 */
export default function Categories() {
  const furnitureTotal = POPULAR_PRODUCTS.filter((p) => p.category === 'Furniture').length;
  const appliancesTotal = POPULAR_PRODUCTS.filter((p) => p.category === 'Appliances').length;

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* STEP 1: Breadcrumb Navigation */}
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
              Categories
            </li>
          </ol>
        </nav>

        {/* STEP 1: Page Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5 shadow-2xs">
            EXPLORE BY CATEGORY
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Browse Categories
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Find furniture and appliances that fit your space, lifestyle, and budget.
          </p>
        </header>

        {/* Quick Category Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl gap-2">
            <a
              href="#furniture-section"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-brand-700 hover:bg-white transition-all shadow-2xs"
            >
              <Sofa className="w-4 h-4 text-brand-600" />
              <span>Furniture ({furnitureTotal}+)</span>
            </a>
            <a
              href="#appliances-section"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-brand-700 hover:bg-white transition-all shadow-2xs"
            >
              <Tv className="w-4 h-4 text-brand-600" />
              <span>Appliances ({appliancesTotal}+)</span>
            </a>
          </div>
        </div>

        {/* STEP 2 & 3: Primary Category 1 — Furniture */}
        <section
          id="furniture-section"
          aria-labelledby="furniture-heading"
          className="mb-16 sm:mb-20 scroll-mt-20"
        >
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shadow-2xs">
                    <Sofa className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                      {CATEGORY_DATA.furniture.tagline}
                    </span>
                  </div>
                </div>

                <h2
                  id="furniture-heading"
                  className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3"
                >
                  {CATEGORY_DATA.furniture.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {CATEGORY_DATA.furniture.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link to="/products?category=Furniture">
                    <Button
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="shadow-sm shadow-brand-500/20"
                    >
                      Browse All Furniture
                    </Button>
                  </Link>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">
                    Starting from <strong className="text-slate-900">₹599/month</strong>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 shadow-inner group">
                  <img
                    src={CATEGORY_DATA.furniture.bannerImage}
                    alt="Comfortable modern furniture in bedroom setting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-1">
                      CURATED COLLECTION
                    </p>
                    <p className="text-sm sm:text-base font-semibold">
                      Solid wood beds, compact desks & comfortable seating
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subcategories Grid for Furniture */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Furniture Subcategories
                </h3>
                <span className="text-xs font-medium text-slate-500">
                  {CATEGORY_DATA.furniture.subcategories.length} Categories
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {CATEGORY_DATA.furniture.subcategories.map((subcat) => {
                  const SubIcon = subcat.icon;
                  return (
                    <div
                      key={subcat.id}
                      className="group relative flex flex-col justify-between bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all duration-200 p-5 sm:p-6"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-brand-50 text-slate-700 group-hover:text-brand-600 flex items-center justify-center border border-slate-200/80 group-hover:border-brand-200 transition-colors shadow-2xs">
                            <SubIcon className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                            {subcat.count}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                          {subcat.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {subcat.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          From <strong className="text-slate-900 font-bold">₹{subcat.startingPrice}</strong>/mo
                        </span>
                        <Link
                          to={subcat.link}
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 group-hover:translate-x-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1.5 py-0.5"
                        >
                          <span>Explore</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* STEP 2 & 3: Primary Category 2 — Appliances */}
        <section
          id="appliances-section"
          aria-labelledby="appliances-heading"
          className="mb-16 sm:mb-20 scroll-mt-20"
        >
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 shadow-2xs">
                    <Tv className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 rounded-full">
                      {CATEGORY_DATA.appliances.tagline}
                    </span>
                  </div>
                </div>

                <h2
                  id="appliances-heading"
                  className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3"
                >
                  {CATEGORY_DATA.appliances.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {CATEGORY_DATA.appliances.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link to="/products?category=Appliances">
                    <Button
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="shadow-sm shadow-brand-500/20"
                    >
                      Browse All Appliances
                    </Button>
                  </Link>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">
                    Starting from <strong className="text-slate-900">₹799/month</strong>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 shadow-inner group">
                  <img
                    src={CATEGORY_DATA.appliances.bannerImage}
                    alt="Modern appliances in clean contemporary kitchen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-1">
                      ENERGY EFFICIENT
                    </p>
                    <p className="text-sm sm:text-base font-semibold">
                      Double-door fridges, front loaders & smart TVs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subcategories Grid for Appliances */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Appliances Subcategories
                </h3>
                <span className="text-xs font-medium text-slate-500">
                  {CATEGORY_DATA.appliances.subcategories.length} Categories
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {CATEGORY_DATA.appliances.subcategories.map((subcat) => {
                  const SubIcon = subcat.icon;
                  return (
                    <div
                      key={subcat.id}
                      className="group relative flex flex-col justify-between bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all duration-200 p-5 sm:p-6"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-brand-50 text-slate-700 group-hover:text-brand-600 flex items-center justify-center border border-slate-200/80 group-hover:border-brand-200 transition-colors shadow-2xs">
                            <SubIcon className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                            {subcat.count}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                          {subcat.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {subcat.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          From <strong className="text-slate-900 font-bold">₹{subcat.startingPrice}</strong>/mo
                        </span>
                        <Link
                          to={subcat.link}
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 group-hover:translate-x-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1.5 py-0.5"
                        >
                          <span>Explore</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* STEP 5: Featured / Popular Rental Categories Section */}
        <section
          aria-labelledby="featured-categories-heading"
          className="mb-16 sm:mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
              TOP PICKS
            </span>
            <h2
              id="featured-categories-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
            >
              Popular Rental Categories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Browse the highest requested furniture and appliance packages by RentEase customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_CATEGORIES.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-brand-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-200/60 shadow-2xs">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-auto">
                  <div>
                    <span className="text-xs text-slate-500 block">Starting Rent</span>
                    <span className="text-base font-extrabold text-slate-900">
                      ₹{item.startingRent}
                      <span className="text-xs font-normal text-slate-500">/mo</span>
                    </span>
                  </div>
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-brand-600 text-slate-800 hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-2xs"
                  >
                    <span>View Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STEP 6: Why Rent By Category Info Section */}
        <section
          aria-labelledby="why-rent-heading"
          className="mb-16 sm:mb-20 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12"
        >
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5">
              THE RENTEASE ADVANTAGE
            </span>
            <h2
              id="why-rent-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Why Rent by Category?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Subscription living offers the freedom to adapt as your work, location, and lifestyle evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PILLARS.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100 mb-4 shadow-2xs">
                    <PillarIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* STEP 7: Call to Action Section */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-10 lg:px-16 text-white shadow-xl relative overflow-hidden"
        >
          {/* Decorative ambient background accents */}
          <div
            className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-brand-600/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">
              FLEXIBLE LIVING STARTS HERE
            </span>
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4"
            >
              Ready to find your next rental?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Browse our furniture and appliance collection and choose a rental plan that works for you.
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
                  Browse Products
                </Button>
              </Link>
              <Link to="/" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
