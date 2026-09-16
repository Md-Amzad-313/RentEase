import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Package,
  CreditCard,
  AlertTriangle,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

// Derive the estimated rental total for a single cart line
function lineTotal(item) {
  const months = parseInt(item.duration, 10);
  return item.monthlyRent * item.quantity * (isNaN(months) ? 1 : months);
}

export default function Cart() {
  const navigate = useNavigate();
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItemCount,
    monthlySubtotal,
    depositTotal,
  } = useCart();

  const handleClearCart = () => {
    if (window.confirm("Remove all items from your cart?")) {
      clearCart();
    }
  };

  // ── Empty state ─────────────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center py-24 px-4 bg-white">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-9 h-9 text-slate-400" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Your rental cart is empty</h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Browse our rental collection and select items to get started.
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg" icon={Package} iconPosition="left">
              Explore Rentals
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  // ── Estimated totals ────────────────────────────────────────────────────────
  // Use the duration of the first item as the "primary" tenor shown in summary;
  // individual line totals are shown per-item.
  const grandEstimate = items.reduce((sum, item) => sum + lineTotal(item), 0);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Page header ─────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Your Rental Cart</h1>
            <p className="text-slate-500 text-sm mt-1">
              {totalItemCount} {totalItemCount === 1 ? "item" : "items"} selected for rental
            </p>
          </div>
          <button
            onClick={handleClearCart}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-rose-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded px-2 py-1"
            aria-label="Clear all cart items"
          >
            <Trash2 className="w-4 h-4" aria-hidden="true" />
            Clear cart
          </button>
        </div>

        {/* ── Two-col layout: items list | summary ────────────────────────── */}
        <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-10">

          {/* Cart items list */}
          <div className="space-y-4 mb-8 lg:mb-0">
            {items.map((item) => {
              const months = parseInt(item.duration, 10);
              const itemEstimate = lineTotal(item);

              return (
                <article
                  key={`${item.productId}-${item.duration}`}
                  className="flex gap-4 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm"
                  aria-label={`${item.name}, ${item.duration} rental`}
                >
                  {/* Product image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={`${item.name} – rental item`}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400">
                        <Package className="w-8 h-8 stroke-1" aria-hidden="true" />
                      </div>
                    )}
                  </div>

                  {/* Item details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <Badge
                          variant={item.category === "Furniture" ? "primary" : "secondary"}
                          size="sm"
                          className="mb-1"
                        >
                          {item.category}
                        </Badge>
                        <h2 className="text-base font-bold text-slate-900 truncate">{item.name}</h2>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Rental duration:{" "}
                          <span className="font-semibold text-slate-700">{item.duration}</span>
                        </p>
                      </div>
                      {/* Remove button */}
                      <button
                        onClick={() => removeItem(item.productId, item.duration)}
                        className="shrink-0 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Pricing row */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                      <span className="font-bold text-slate-900 text-base">
                        ₹{item.monthlyRent.toLocaleString()}
                        <span className="text-xs font-normal text-slate-500 ml-0.5">/ mo</span>
                      </span>
                      <span className="text-slate-500 text-xs">
                        Deposit: ₹{item.securityDeposit.toLocaleString()}
                      </span>
                    </div>

                    {/* Quantity + line estimate row */}
                    <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
                      {/* Quantity control */}
                      <div
                        className="flex items-center border border-slate-300 rounded-xl overflow-hidden"
                        role="group"
                        aria-label={`Quantity for ${item.name}`}
                      >
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.duration, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="p-2 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                        <span
                          className="px-3 text-sm font-semibold text-slate-900 min-w-[2rem] text-center"
                          aria-live="polite"
                          aria-label={`Quantity: ${item.quantity}`}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.duration, item.quantity + 1)
                          }
                          className="p-2 text-slate-600 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Line estimate */}
                      <div className="text-right text-xs text-slate-500">
                        <span className="block text-sm font-bold text-brand-700">
                          ₹{itemEstimate.toLocaleString()}
                        </span>
                        <span>est. for {item.duration}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ── Summary card ─────────────────────────────────────────────────── */}
          <aside aria-label="Rental summary">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:sticky lg:top-6">
              <h2 className="text-base font-bold text-slate-800 mb-4">Rental Summary</h2>

              <dl className="space-y-2.5 text-sm">
                <div className="flex justify-between text-slate-600">
                  <dt>Rental items</dt>
                  <dd className="font-semibold text-slate-800">{totalItemCount}</dd>
                </div>
                <div className="flex justify-between text-slate-600">
                  <dt>Monthly subtotal</dt>
                  <dd className="font-semibold text-slate-800">
                    ₹{monthlySubtotal.toLocaleString()}/mo
                  </dd>
                </div>
                <div className="flex justify-between text-slate-600">
                  <dt>Security deposit</dt>
                  <dd className="font-semibold text-slate-800">₹{depositTotal.toLocaleString()}</dd>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
                  <dt className="font-semibold text-slate-700">Est. rental total</dt>
                  <dd className="font-extrabold text-brand-700 text-lg">
                    ₹{grandEstimate.toLocaleString()}
                  </dd>
                </div>
              </dl>

              {/* Disclaimer */}
              <div className="flex gap-2 mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-700">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  Estimated rental total is based on selected durations. Security deposit is billed
                  once and fully refunded at tenure end.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5 space-y-2.5">
                <Button
                  variant="primary"
                  size="lg"
                  icon={CreditCard}
                  iconPosition="left"
                  className="w-full justify-center"
                  onClick={() => navigate("/checkout")}
                  aria-label="Proceed to checkout"
                >
                  Proceed to Checkout
                </Button>
                <Link to="/products" className="block">
                  <Button variant="ghost" size="md" className="w-full justify-center text-slate-500">
                    Continue Browsing
                  </Button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
