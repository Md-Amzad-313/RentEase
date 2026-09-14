import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Truck,
  CalendarClock,
  ShieldCheck,
  Package,
  AlertCircle,
  ArrowLeft,
  ChevronRight,
  MapPin,
  User,
  Phone,
  Mail,
  Home,
  FileText,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Badge from "../components/ui/Badge";

// Helper to calculate line total based on tenure duration
function getLineTotal(item) {
  const months = parseInt(item.duration, 10);
  return item.monthlyRent * item.quantity * (isNaN(months) ? 1 : months);
}

// Delivery preference options
const DELIVERY_PREFERENCES = [
  {
    id: "standard",
    title: "Standard Delivery",
    desc: "Delivered within 2–4 business days after verification",
    tag: "Free",
    icon: Truck,
  },
  {
    id: "flexible",
    title: "Flexible Delivery",
    desc: "Choose your preferred time slot after order confirmation",
    tag: "Priority Slot",
    icon: CalendarClock,
  },
];

export default function Checkout() {
  const navigate = useNavigate();
  const {
    items,
    totalItemCount,
    monthlySubtotal,
    depositTotal,
    clearCart,
  } = useCart();

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [deliveryPref, setDeliveryPref] = useState("standard");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSummaryData, setOrderSummaryData] = useState(null);

  // Grand total of all rentals
  const grandEstimate = items.reduce((sum, item) => sum + getLineTotal(item), 0);

  // Form Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // Basic Frontend Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter a valid full name";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim().replace(/\D/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Street address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Order Placement
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        const element = document.getElementById(firstErrorKey);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      return;
    }

    setIsSubmitting(true);

    // Save snapshot of order before clearing cart
    const orderData = {
      orderId: `RE-${Math.floor(100000 + Math.random() * 900000)}`,
      items: [...items],
      itemCount: totalItemCount,
      monthlyTotal: monthlySubtotal,
      depositTotal: depositTotal,
      grandEstimate: grandEstimate,
      deliveryPref: deliveryPref,
      formData: { ...formData },
      notes: notes,
      date: new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    setTimeout(() => {
      setOrderSummaryData(orderData);
      clearCart();
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  };

  // ── Success State: Rental Request Submitted ────────────────────────────────
  if (orderSummaryData) {
    return (
      <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header check icon */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs text-center mb-8">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full mb-3">
              <span>Rental Request Submitted</span>
              <span>✅</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Rental Request Submitted ✅
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto mb-6 font-medium">
              &ldquo;Your rental request has been submitted successfully.&rdquo;
            </p>

            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700">
              <span className="text-slate-500 font-medium">Request Reference:</span>
              <span className="font-mono font-bold text-slate-900">{orderSummaryData.orderId}</span>
            </div>
          </div>

          {/* Details Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 mb-8">
            {/* Order Summary Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-brand-600" />
                Order Summary
              </h2>
              <span className="text-xs font-semibold text-slate-500">
                {orderSummaryData.itemCount} {orderSummaryData.itemCount === 1 ? "Product" : "Products"}
              </span>
            </div>

            {/* Product Details List */}
            <div className="space-y-4">
              {orderSummaryData.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-16 h-16 rounded-xl bg-white overflow-hidden shrink-0 border border-slate-200/80">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          <Package className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-base text-slate-900 truncate">{item.name}</p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-1">
                        <span className="inline-flex items-center gap-1 font-medium bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-700">
                          <CalendarClock className="w-3.5 h-3.5 text-brand-600" />
                          Rental duration: <strong className="text-slate-900">{item.duration}</strong>
                        </span>
                        <span>Qty: <strong>{item.quantity}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:text-right flex sm:flex-col justify-between items-center sm:items-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 block sm:inline">Monthly rent: </span>
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        ₹{(item.monthlyRent * item.quantity).toLocaleString()} / month
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Security deposit: <span className="font-semibold text-slate-700">₹{(item.securityDeposit * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Cost Breakdown */}
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 space-y-2.5 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Monthly Rent</span>
                <span className="font-semibold text-slate-900">₹{orderSummaryData.monthlyTotal.toLocaleString()} / month</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Security Deposit (Refundable)</span>
                <span className="font-semibold text-slate-900">₹{orderSummaryData.depositTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Doorstep Delivery &amp; Setup</span>
                <span className="font-semibold text-emerald-600">FREE</span>
              </div>
              <div className="border-t border-slate-200 pt-3 flex justify-between items-center text-base">
                <span className="font-bold text-slate-900">Estimated Total Plan Cost</span>
                <span className="font-extrabold text-brand-700 text-lg">₹{orderSummaryData.grandEstimate.toLocaleString()}</span>
              </div>
            </div>

            {/* Delivery Recipient Info */}
            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                Delivery Address
              </h3>
              <p className="text-sm font-semibold text-slate-900">{orderSummaryData.formData.fullName} ({orderSummaryData.formData.mobile})</p>
              <p className="text-xs text-slate-600 mt-0.5">
                {orderSummaryData.formData.address}, {orderSummaryData.formData.city}, {orderSummaryData.formData.state} - {orderSummaryData.formData.pincode}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/products" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={Package}
                iconPosition="left"
                className="w-full justify-center text-base shadow-sm"
              >
                Continue Shopping
              </Button>
            </Link>
            <Link to="/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                icon={Home}
                iconPosition="left"
                className="w-full justify-center text-base"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Empty Cart State ───────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-white">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-slate-400" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Your rental cart is empty</h1>
          <p className="text-slate-500 mb-8 leading-relaxed text-sm sm:text-base">
            You don&apos;t have any active rental items in your cart to checkout.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/products">
              <Button variant="primary" size="lg" icon={Package} iconPosition="left">
                Explore Rentals
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="outline" size="lg">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // ── Normal Checkout Flow ───────────────────────────────────────────────────
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Page Header & Stepper ────────────────────────────────────────── */}
        <div className="mb-8 sm:mb-10">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center flex-wrap gap-1 text-xs sm:text-sm text-slate-500">
              <li>
                <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li>
                <Link to="/cart" className="hover:text-brand-600 transition-colors">Cart</Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li aria-current="page" className="text-slate-800 font-semibold">
                Checkout
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100 px-3 py-0.5 rounded-full mb-2">
                Checkout
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Complete Your Rental
              </h1>
              <p className="text-slate-600 text-sm mt-1">
                Review your rental details and delivery information before placing your order.
              </p>
            </div>

            {/* Stepper indicator */}
            <div className="flex items-center gap-2 text-xs font-semibold">
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>Cart</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <div className="flex items-center gap-1.5 text-brand-600">
                <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  2
                </span>
                <span className="font-bold">Delivery &amp; Review</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>Confirmation</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Two-Column Layout ────────────────────────────────────────────── */}
        <div className="lg:grid lg:grid-cols-[1fr_420px] lg:gap-10 items-start">

          {/* ── LEFT COLUMN: Form, Preference & Notes ──────────────────────── */}
          <form onSubmit={handlePlaceOrder} noValidate className="space-y-8">

            {/* 1. Delivery Information */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Delivery Address</h2>
                  <p className="text-xs text-slate-500">Where should we deliver your rentals?</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Full Name */}
                <Input
                  label="Full Name"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  leftIcon={User}
                  required
                />

                {/* Mobile & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Mobile Number"
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    error={errors.mobile}
                    leftIcon={Phone}
                    required
                  />
                  <Input
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    leftIcon={Mail}
                    required
                  />
                </div>

                {/* Street Address */}
                <Input
                  label="Street Address / Flat / Building"
                  id="address"
                  name="address"
                  placeholder="House/Flat No., Building Name, Street"
                  value={formData.address}
                  onChange={handleChange}
                  error={errors.address}
                  leftIcon={Home}
                  required
                />

                {/* City, State, Pincode Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Input
                    label="City"
                    id="city"
                    name="city"
                    placeholder="e.g. Mumbai"
                    value={formData.city}
                    onChange={handleChange}
                    error={errors.city}
                    required
                  />
                  <Input
                    label="State"
                    id="state"
                    name="state"
                    placeholder="e.g. Maharashtra"
                    value={formData.state}
                    onChange={handleChange}
                    error={errors.state}
                    required
                  />
                  <Input
                    label="Pincode"
                    id="pincode"
                    name="pincode"
                    placeholder="6-digit PIN"
                    value={formData.pincode}
                    onChange={handleChange}
                    error={errors.pincode}
                    required
                  />
                </div>
              </div>
            </div>

            {/* 2. Delivery Preference */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Delivery Preference</h2>
                  <p className="text-xs text-slate-500">Choose your preferred fulfillment option</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DELIVERY_PREFERENCES.map((pref) => {
                  const IconComponent = pref.icon;
                  const isSelected = deliveryPref === pref.id;

                  return (
                    <label
                      key={pref.id}
                      className={`relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "border-brand-600 bg-brand-50/40 shadow-xs"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="deliveryPref"
                        value={pref.id}
                        checked={isSelected}
                        onChange={() => setDeliveryPref(pref.id)}
                        className="sr-only"
                      />
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <IconComponent
                              className={`w-4 h-4 ${isSelected ? "text-brand-600" : "text-slate-500"}`}
                            />
                            <span className="font-bold text-sm text-slate-900">{pref.title}</span>
                          </div>
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              isSelected ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {pref.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{pref.desc}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs">
                        <span
                          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-brand-600 bg-brand-600" : "border-slate-300"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                        </span>
                        <span className={isSelected ? "text-brand-700 font-semibold" : "text-slate-500"}>
                          {isSelected ? "Selected" : "Select"}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 3. Additional Rental Notes */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Delivery Notes (Optional)</h2>
                  <p className="text-xs text-slate-500">Provide any specific instructions for delivery personnel</p>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="sr-only">
                  Additional delivery instructions
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Ring the bell twice, elevator available up to 4th floor, please call 30 mins prior to arrival."
                  className="w-full text-sm rounded-xl bg-white border border-slate-300 p-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20 transition-all resize-y"
                />
              </div>
            </div>

            {/* Mobile Submit Button (Stacked) */}
            <div className="block lg:hidden">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                icon={CreditCard}
                iconPosition="left"
                className="w-full justify-center shadow-md shadow-brand-500/20 text-base"
              >
                {isSubmitting ? "Submitting Request..." : "Place Rental Request"}
              </Button>
            </div>
          </form>

          {/* ── RIGHT COLUMN: Sticky Order Summary ─────────────────────────── */}
          <aside aria-label="Order summary" className="mt-8 lg:mt-0">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs lg:sticky lg:top-24">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900">Rental Summary</h2>
                <Badge variant="primary" size="sm">
                  {totalItemCount} {totalItemCount === 1 ? "Item" : "Items"}
                </Badge>
              </div>

              {/* Items List in Summary */}
              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.duration}`}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white overflow-hidden shrink-0 border border-slate-200/60">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          <Package className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">{item.name}</p>
                      <p className="text-[11px] text-slate-500">
                        {item.duration} · Qty: <span className="font-semibold text-slate-700">{item.quantity}</span>
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-bold text-slate-900">₹{(item.monthlyRent * item.quantity).toLocaleString()}/mo</p>
                      <p className="text-[10px] text-slate-400">Dep: ₹{(item.securityDeposit * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Calculations */}
              <dl className="space-y-2.5 text-sm mb-6">
                <div className="flex justify-between text-slate-600">
                  <dt>Monthly Rent Subtotal</dt>
                  <dd className="font-bold text-slate-900">₹{monthlySubtotal.toLocaleString()}/mo</dd>
                </div>
                <div className="flex justify-between text-slate-600">
                  <dt>Refundable Security Deposit</dt>
                  <dd className="font-semibold text-slate-800">₹{depositTotal.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between text-slate-600">
                  <dt>Doorstep Delivery &amp; Setup</dt>
                  <dd className="font-semibold text-emerald-600">FREE</dd>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
                  <div>
                    <dt className="font-bold text-slate-900">Est. Rental Plan Total</dt>
                    <dd className="text-[11px] text-slate-400">Based on chosen tenures</dd>
                  </div>
                  <dd className="text-xl font-extrabold text-brand-700">
                    ₹{grandEstimate.toLocaleString()}
                  </dd>
                </div>
              </dl>

              {/* Informational alert */}
              <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-amber-800 mb-6 flex gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <p className="leading-relaxed">
                  Monthly rent is billed at the start of every cycle. Security deposit is refundable upon tenure completion.
                </p>
              </div>

              {/* Desktop Place Order CTA */}
              <div className="hidden lg:block space-y-3">
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  icon={CreditCard}
                  iconPosition="left"
                  className="w-full justify-center shadow-md shadow-brand-500/20 text-base"
                  onClick={handlePlaceOrder}
                >
                  {isSubmitting ? "Submitting Request..." : "Place Rental Request"}
                </Button>

                <Link to="/cart" className="block text-center">
                  <span className="text-xs text-slate-500 hover:text-brand-600 transition-colors inline-flex items-center gap-1">
                    <ArrowLeft className="w-3.5 h-3.5" /> Modify items in Cart
                  </span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5 justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span>100% Quality Checked</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  <span>Free KYC Verification</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
