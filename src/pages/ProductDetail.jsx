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
  ShoppingCart,
  CreditCard,
  MapPin,
} from "lucide-react";
import { POPULAR_PRODUCTS } from "../data/products";
import ProductCard from "../components/home/ProductCard";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { useCart } from "../context/CartContext";

// ── Tenure configuration ──────────────────────────────────────────────────────
const TENURES = [
  { label: "3 Months", months: 3, tag: "Short stay" },
  { label: "6 Months", months: 6, tag: "Most popular" },
  { label: "12 Months", months: 12, tag: "Best value" },
];

// ── Service features ──────────────────────────────────────────────────────────
const SERVICE_FEATURES = [
  { icon: CheckCircle2,  label: "Quality Checked",     desc: "Every item inspected before delivery" },
  { icon: Truck,         label: "Doorstep Delivery",   desc: "Delivered at a time convenient for you" },
  { icon: CalendarClock, label: "Flexible Plans",      desc: "Switch or extend your tenure anytime" },
  { icon: RotateCcw,     label: "Easy Relocation",     desc: "Move your rental hassle-free" },
  { icon: Wrench,        label: "Maintenance Support", desc: "Service visits included in your plan" },
  { icon: ShieldCheck,   label: "Damage Cover",        desc: "Covered against accidental damage" },
];

// ── Delivery info cards ───────────────────────────────────────────────────────
const DELIVERY_INFO = [
  {
    icon: Truck,
    title: "Doorstep Delivery",
    body: "We deliver to your door at a time that suits you. Setup assistance is included.",
  },
  {
    icon: RotateCcw,
    title: "Flexible Pickup",
    body: "Schedule pickup at the end of your tenure with 48 hours notice.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    body: "Servicing and minor repairs are handled throughout your rental period.",
  },
  {
    icon: MapPin,
    title: "Service Availability",
    body: "Available across major cities. Contact us to confirm serviceability in your area.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function ProductDetail() {
  const { productId } = useParams();
  const navigate      = useNavigate();
  const { addItem }   = useCart();

  const [selectedTenure, setSelectedTenure] = useState(TENURES[1]); // 6 months default
  const [imageLoaded,    setImageLoaded]    = useState(false);
  const [imageError,     setImageError]     = useState(false);
  const [addedToCart,    setAddedToCart]    = useState(false);

  const product = POPULAR_PRODUCTS.find((p) => p.id === productId);
  const related = POPULAR_PRODUCTS.filter((p) => p.id !== productId).slice(0, 3);

  // ── Product Not Found ───────────────────────────────────────────────────────
  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-24 px-4 bg-white">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-slate-400" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Product not found</h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            The rental you&apos;re looking for is unavailable or does not exist.
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg" icon={ArrowLeft} iconPosition="left">
              Back to Rentals
            </Button>
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

  // Frontend-only rental total
  const rentalTotal = monthlyRent * selectedTenure.months;

  const handleRentNow = () => navigate("/checkout");

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name,
      image,
      category,
      monthlyRent,
      securityDeposit,
      duration: selectedTenure.label, // e.g. "3 Months"
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

        {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-1 text-sm text-slate-500">
            <li>
              <Link
                to="/"
                className="hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li aria-current="page">
              <span className="text-slate-800 font-medium truncate max-w-[180px] sm:max-w-xs inline-block align-bottom">
                {name}
              </span>
            </li>
          </ol>
        </nav>

        {/* ── Mobile back button ─────────────────────────────────────────── */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex sm:hidden items-center gap-1.5 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back
        </button>

        {/* ══ Main layout: image + info column | sticky sidebar ═══════════ */}
        <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-12 xl:gap-16">

          {/* ── Left column: image + product info ─────────────────────────── */}
          <div>
            {/* Product Image */}
            <div className="group rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] w-full relative shadow-sm mb-8">
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
                  className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-[1.02] ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                  <Package className="w-12 h-12 stroke-1" aria-hidden="true" />
                  <span className="text-sm">{category}</span>
                </div>
              )}
              {/* Skeleton shimmer while loading */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
              )}
              {/* Category badge overlay */}
              <div className="absolute top-4 left-4 z-10">
                <Badge
                  variant={category === "Furniture" ? "primary" : "secondary"}
                  size="md"
                  className="bg-white/95 backdrop-blur-sm shadow-sm border-white/70"
                >
                  {category}
                </Badge>
              </div>
            </div>

            {/* Product header (shown in left col on desktop) */}
            <div className="mb-6">
              {/* Rating row */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100 px-2.5 py-0.5 rounded-full">
                  {category}
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-slate-600">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  <span className="font-semibold text-slate-800">{rating.toFixed(1)}</span>
                  {reviewCount > 0 && (
                    <span className="text-slate-400 text-xs">({reviewCount} reviews)</span>
                  )}
                </span>
              </div>

              {/* Product name */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
                {name}
              </h1>

              {/* Description */}
              {description && (
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {/* ── Product Highlights ─────────────────────────────────────── */}
            {features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Product Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ── Delivery & Service cards ───────────────────────────────── */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Delivery & Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DELIVERY_INFO.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="flex gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <div className="w-9 h-9 bg-brand-50 border border-brand-100 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5 text-brand-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 mb-0.5">{title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── What's included / service features ────────────────────── */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4">What&apos;s included</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SERVICE_FEATURES.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-2 p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-200 hover:shadow-sm transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 text-brand-600" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{label}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column: sticky rental sidebar ───────────────────────── */}
          <div className="mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-6 space-y-4">

              {/* Price card */}
              <div className="bg-gradient-to-br from-brand-50 via-white to-slate-50 border border-brand-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    ₹{monthlyRent.toLocaleString()}
                  </span>
                  <span className="text-base text-slate-500 font-medium">/ month</span>
                </div>
                <p className="text-sm text-slate-500">
                  Security Deposit:{" "}
                  <span className="font-semibold text-slate-700">
                    ₹{securityDeposit.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 ml-1">(refundable)</span>
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-brand-600 font-medium">
                  <CalendarClock className="w-3.5 h-3.5" aria-hidden="true" />
                  {tenureHint}
                </div>
              </div>

              {/* Tenure selector */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <fieldset>
                  <legend className="text-sm font-semibold text-slate-700 mb-3 block">
                    Select Rental Duration
                  </legend>
                  <div className="grid grid-cols-3 gap-2" role="group" aria-label="Rental tenure options">
                    {TENURES.map((t) => {
                      const isActive = selectedTenure.months === t.months;
                      return (
                        <button
                          key={t.label}
                          type="button"
                          onClick={() => setSelectedTenure(t)}
                          aria-pressed={isActive}
                          className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl border text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 ${
                            isActive
                              ? "bg-brand-600 text-white border-brand-600 shadow-md"
                              : "bg-white text-slate-700 border-slate-300 hover:border-brand-400 hover:bg-brand-50"
                          }`}
                        >
                          <span className="font-bold text-[15px] leading-tight">{t.label}</span>
                          <span
                            className={`text-[10px] font-medium mt-0.5 ${
                              isActive ? "text-brand-200" : "text-slate-400"
                            }`}
                          >
                            {t.tag}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              </div>

              {/* Rental Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
                  <Info className="w-3.5 h-3.5" aria-hidden="true" />
                  Estimated Rental Summary
                </div>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Duration</dt>
                    <dd className="font-semibold text-slate-800">{selectedTenure.label}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Monthly rent</dt>
                    <dd className="font-semibold text-slate-800">₹{monthlyRent.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Security deposit</dt>
                    <dd className="font-semibold text-slate-800">₹{securityDeposit.toLocaleString()}</dd>
                  </div>
                  <div className="border-t border-slate-200 pt-2.5 flex justify-between items-center">
                    <dt className="font-semibold text-slate-700">Est. rental total</dt>
                    <dd className="font-extrabold text-brand-700 text-lg">
                      ₹{rentalTotal.toLocaleString()}
                    </dd>
                  </div>
                </dl>
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                  * Estimated total for {selectedTenure.months} months of rental. Deposit is billed separately and fully refunded at tenure end.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5">
                <Button
                  variant="primary"
                  size="lg"
                  icon={CreditCard}
                  iconPosition="left"
                  className="w-full justify-center"
                  onClick={handleRentNow}
                  aria-label={`Rent ${name} for ${selectedTenure.label}`}
                >
                  Rent Now · {selectedTenure.label}
                </Button>
                <Button
                  variant={addedToCart ? "secondary" : "outline"}
                  size="lg"
                  icon={ShoppingCart}
                  iconPosition="left"
                  className="w-full justify-center"
                  onClick={handleAddToCart}
                  aria-label={addedToCart ? "Added to cart" : `Add ${name} to cart`}
                >
                  {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
                </Button>
                {addedToCart && (
                  <Link
                    to="/cart"
                    className="flex items-center justify-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
                  >
                    <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                    View Cart
                  </Link>
                )}
              </div>

              {/* Trust nudges */}
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                  Damage cover included
                </span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                  Easy cancellation
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ══ Related Products ═════════════════════════════════════════════ */}
        {related.length > 0 && (
          <div className="mt-20 pt-10 border-t border-slate-100">
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
