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
} from "lucide-react";
import { POPULAR_PRODUCTS } from "../data/products";
import ProductCard from "../components/home/ProductCard";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

const TENURE_OPTIONS = ["3 Months", "6 Months", "12 Months"];

const FEATURES = [
  { icon: CheckCircle2, label: "Quality Checked", desc: "Every item inspected before delivery" },
  { icon: Truck, label: "Doorstep Delivery", desc: "Delivered at a time convenient for you" },
  { icon: CalendarClock, label: "Flexible Plans", desc: "Choose 3, 6 or 12 month tenures" },
  { icon: RotateCcw, label: "Easy Relocation", desc: "Move your rental hassle-free" },
  { icon: Wrench, label: "Maintenance Support", desc: "Free servicing during your rental period" },
  { icon: ShieldCheck, label: "Fully Insured", desc: "Covered against accidental damage" },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedTenure, setSelectedTenure] = useState("6 Months");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = POPULAR_PRODUCTS.find((p) => p.id === productId);

  // Related: up to 3 products excluding current
  const related = POPULAR_PRODUCTS.filter((p) => p.id !== productId).slice(0, 3);

  // ── Product Not Found ──────────────────────────────────────────────────────
  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">📦</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Product not found</h1>
          <p className="text-slate-500 mb-8">
            The rental you&apos;re looking for is unavailable or does not exist.
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">
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
    image,
    fallbackImage,
    tenureHint = "Flexible 3, 6 & 12 month plans",
  } = product;

  const handleRentNow = () => {
    // Frontend-only: navigate to checkout placeholder
    navigate("/checkout");
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-brand-600 transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-medium truncate max-w-[200px]">{name}</span>
        </nav>

        {/* ── Back button (mobile) ────────────────────────────────────────── */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-6 sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* ── Main 2-col layout ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {/* LEFT — Image ─────────────────────────────────────────────────── */}
          <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] w-full relative">
            {!imageError ? (
              <img
                src={image}
                alt={`${name} – available for monthly rental`}
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
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                <span className="text-5xl mb-2">📦</span>
                <span className="text-sm">{category}</span>
              </div>
            )}
            {/* Category badge over image */}
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

          {/* RIGHT — Info ──────────────────────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Category + Rating */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                {category}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {rating.toFixed(1)}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
              {name}
            </h1>

            {/* Pricing */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                  ₹{monthlyRent.toLocaleString()}
                </span>
                <span className="text-base text-slate-500 font-medium">/ month</span>
              </div>
              <p className="text-sm text-slate-500 mb-2">
                Security Deposit: <span className="font-semibold text-slate-700">₹{securityDeposit.toLocaleString()}</span>
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-brand-600 font-medium">
                <CalendarClock className="w-3.5 h-3.5" />
                {tenureHint}
              </span>
            </div>

            {/* Tenure Selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-700 mb-2">
                Select Rental Tenure
              </p>
              <div className="flex gap-2" role="group" aria-label="Rental tenure options">
                {TENURE_OPTIONS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTenure(t)}
                    className={`flex-1 py-2 px-3 rounded-xl border text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                      selectedTenure === t
                        ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                        : "bg-white text-slate-700 border-slate-300 hover:border-brand-400 hover:bg-brand-50"
                    }`}
                    aria-pressed={selectedTenure === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Selected tenure: <span className="font-semibold text-slate-700">{selectedTenure}</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                variant="primary"
                size="lg"
                className="flex-1 justify-center"
                onClick={handleRentNow}
              >
                Rent Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 justify-center"
                onClick={handleAddToCart}
              >
                {addedToCart ? "Added ✓" : "Add to Cart"}
              </Button>
            </div>

            {/* Delivery Info cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 text-brand-600" />
                  <span className="text-sm font-semibold text-slate-800">Doorstep Delivery</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Get your rental delivered to your doorstep at a convenient time.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <RotateCcw className="w-4 h-4 text-brand-600" />
                  <span className="text-sm font-semibold text-slate-800">Easy Pickup</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Schedule pickup when your rental period ends.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Features ─────────────────────────────────────────────────────── */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">What&apos;s included</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {FEATURES.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
              >
                <Icon className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Related Products ─────────────────────────────────────────────── */}
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
