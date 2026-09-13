import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  CheckCircle2,
  Truck,
  RotateCcw,
  Wrench,
  CalendarClock,
  ShieldCheck,
  ChevronRight,
  Package,
  Info,
  BadgeCheck,
} from "lucide-react";
import { POPULAR_PRODUCTS } from "../data/products";
import ProductCard from "../components/home/ProductCard";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

// ── Tenure config ─────────────────────────────────────────────────────────────
const TENURES = [
  { label: "3 Months", months: 3, tag: "Short stay" },
  { label: "6 Months", months: 6, tag: "Most popular" },
  { label: "12 Months", months: 12, tag: "Best value" },
];

// ── Service features shown below the main info ────────────────────────────────
const SERVICE_FEATURES = [
  { icon: CheckCircle2, label: "Quality Checked",    desc: "Every item inspected before delivery" },
  { icon: Truck,        label: "Doorstep Delivery",  desc: "Delivered at a time convenient for you" },
  { icon: CalendarClock,label: "Flexible Plans",     desc: "Switch or extend your tenure anytime" },
  { icon: RotateCcw,    label: "Easy Relocation",    desc: "Move your rental hassle-free" },
  { icon: Wrench,       label: "Maintenance Support",desc: "Service visits included in your plan" },
  { icon: ShieldCheck,  label: "Fully Insured",      desc: "Covered against accidental damage" },
];

// ── Delivery / pickup info cards ──────────────────────────────────────────────
const DELIVERY_INFO = [
  {
    icon: Truck,
    title: "Doorstep Delivery",
    body: "We deliver to your door at a time that suits you. Setup assistance is included at no extra charge.",
  },
  {
    icon: RotateCcw,
    title: "Flexible Pickup",
    body: "Schedule a pickup at the end of your tenure. Just let us know 48 hours in advance.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    body: "Our team handles servicing and minor repairs throughout your rental period.",
  },
  {
    icon: ShieldCheck,
    title: "Service Availability",
    body: "Available across major cities. Contact us to confirm serviceability in your area.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function ProductDetail() {
  const { productId } = useParams();
  const navigate      = useNavigate();

  const [selectedTenure, setSelectedTenure] = useState(TENURES[1]); // default: 6 Months
  const [imageLoaded,   setImageLoaded]   = useState(false);
  const [imageError,    setImageError]    = useState(false);
  const [addedToCart,   setAddedToCart]   = useState(false);

  const product = POPULAR_PRODUCTS.find((p) => p.id === productId);
  const related = POPULAR_PRODUCTS.filter((p) => p.id !== productId).slice(0, 3);

  // ── Product Not Found ───────────────────────────────────────────────────────
  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-md">
          <Package className="w-16 h-16 text-slate-300 mx-auto mb-6" aria-hidden="true" />
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Product not found</h1>
          <p className="text-slate-500 mb-8">
            The rental you&apos;re looking for is unavailable or does not exist.
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">Back to Rentals</Button>
          </Link>
        </div>
      </section>
    );
  }

  const {
    name,
    category,
    monthlyRent,
    securityDeposit,
    rating,
    reviewCount = 0,
    image,
    fallbackImage,
    description,
    features = [],
    tenureHint = "Flexible 3, 6 & 12 month plans",
  } = product;

  // ── Rental summary calculation (frontend-only) ──────────────────────────────
  const rentalTotal = monthlyRent * selectedTenure.months;

  const handleRentNow   = () => navigate("/checkout");
  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
          <Link to="/"         className="hover:text-brand-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <Link to="/products" className="hover:text-brand-600 transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span className="text-slate-800 font-medium truncate max-w-[220px]">{name}</span>
        </nav>

        {/* ── Mobile back button ───────────────────────────────────────────── */}
        <button
          onClick={() => navigate(-1)}
          className="flex sm:hidden items-center gap-1.5 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back
        </button>

        {/* ══ Main 2-col grid ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">

          {/* ── LEFT: Image ─────────────────────────────────────────────────── */}
          <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] w-full relative">
            {!imageError ? (
              <img
                src={image}
                alt={`${name} – available for monthly rental at RentEase`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  if (fallbackImage && e.target.src !== fallbackImage) {
                    e.target.src = fallbackImage;
                  } else {
                    setImageError(true);
                  }
                }}
                className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                <Package className="w-12 h-12 stroke-1" aria-hidden="true" />
                <span className="text-sm">{category}</span>
              </div>
            )}
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <Badge
                variant={category === "Furniture" ? "primary" : "secondary"}
                size="md"
                className="bg-white/95 backdrop-blur shadow-sm"
              >
                {category}
              </Badge>
            </div>
          </div>

          {/* ── RIGHT: Product info ──────────────────────────────────────────── */}
          <div className="flex flex-col">

            {/* Category eyebrow + rating */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                {category}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                {rating.toFixed(1)}
                {reviewCount > 0 && (
                  <span className="text-xs font-normal text-slate-400 ml-0.5">
                    ({reviewCount} reviews)
                  </span>
                )}
              </span>
            </div>

            {/* Product name */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-3">
              {name}
            </h1>

            {/* Short description */}
            {description && (
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {description}
              </p>
            )}

            {/* ── Monthly rent display ─────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-brand-50 to-slate-50 border border-brand-100 rounded-xl p-4 mb-5">
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                  ₹{monthlyRent.toLocaleString()}
                </span>
                <span className="text-base text-slate-500 font-medium">/ month</span>
              </div>
              <p className="text-sm text-slate-500 mb-1">
                Security Deposit:{" "}
                <span className="font-semibold text-slate-700">₹{securityDeposit.toLocaleString()}</span>
                <span className="text-xs text-slate-400 ml-1">(refundable)</span>
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-brand-600 font-medium">
                <CalendarClock className="w-3.5 h-3.5" aria-hidden="true" />
                {tenureHint}
              </span>
            </div>

            {/* ── Tenure selector ─────────────────────────────────────────── */}
            <fieldset className="mb-5">
              <legend className="text-sm font-semibold text-slate-700 mb-2.5">
                Select Rental Duration
              </legend>
              <div className="grid grid-cols-3 gap-2.5" role="group" aria-label="Rental tenure options">
                {TENURES.map((t) => {
                  const isActive = selectedTenure.months === t.months;
                  return (
                    <button
                      key={t.label}
                      type="button"
                      onClick={() => setSelectedTenure(t)}
                      aria-pressed={isActive}
                      className={`flex flex-col items-center py-3 px-2 rounded-xl border text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                        isActive
                          ? "bg-brand-600 text-white border-brand-600 shadow-md"
                          : "bg-white text-slate-700 border-slate-300 hover:border-brand-400 hover:bg-brand-50"
                      }`}
                    >
                      <span className="font-bold text-base leading-none mb-1">{t.label}</span>
                      <span
                        className={`text-[11px] font-normal ${
                          isActive ? "text-brand-100" : "text-slate-400"
                        }`}
                      >
                        {t.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* ── Rental Summary ───────────────────────────────────────────── */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5 text-sm">
              <div className="flex items-center gap-1.5 text-slate-500 mb-3 text-xs font-medium uppercase tracking-wide">
                <Info className="w-3.5 h-3.5" aria-hidden="true" />
                Estimated Rental Summary
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-600">
                  <span>Duration</span>
                  <span className="font-semibold text-slate-800">{selectedTenure.label}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Monthly rent</span>
                  <span className="font-semibold text-slate-800">₹{monthlyRent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Security deposit</span>
                  <span className="font-semibold text-slate-800">₹{securityDeposit.toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-200 pt-2 mt-1 flex justify-between">
                  <span className="font-semibold text-slate-700">Est. rental total</span>
                  <span className="font-bold text-brand-700 text-base">
                    ₹{rentalTotal.toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                * Rental total is an indicative estimate for {selectedTenure.months} months. Security deposit is billed separately and refunded at the end of the rental period.
              </p>
            </div>

            {/* ── CTAs ─────────────────────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                variant="primary"
                size="lg"
                className="flex-1 justify-center"
                onClick={handleRentNow}
                aria-label={`Rent ${name} for ${selectedTenure.label}`}
              >
                Rent Now · {selectedTenure.label}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 justify-center"
                onClick={handleAddToCart}
                aria-label={addedToCart ? "Added to cart" : `Add ${name} to cart`}
              >
                {addedToCart ? (
                  <span className="flex items-center gap-1.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                    Added to Cart
                  </span>
                ) : (
                  "Add to Cart"
                )}
              </Button>
            </div>

            {/* ── Key product features (from mock data) ───────────────────── */}
            {features.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Product Highlights
                </p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ══ Delivery & Pickup info cards ══════════════════════════════════ */}
        <div className="mt-14">
          <h2 className="text-lg font-bold text-slate-900 mb-5">Delivery & Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DELIVERY_INFO.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col gap-2 p-5 bg-slate-50 border border-slate-200 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-brand-600 shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-800">{title}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Service features grid ════════════════════════════════════════ */}
        <div className="mt-14">
          <h2 className="text-lg font-bold text-slate-900 mb-5">What&apos;s included</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SERVICE_FEATURES.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-200 transition-colors"
              >
                <Icon className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Related Products ═════════════════════════════════════════════ */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3">
                YOU MAY ALSO LIKE
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">More rentals for your space</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
