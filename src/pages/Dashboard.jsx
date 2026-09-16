import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  CreditCard,
  CalendarClock,
  Wrench,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  User,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  RotateCcw,
  Headphones,
  HelpCircle,
  FileText,
  AlertCircle,
  X,
  Plus,
  Truck,
  Sparkles,
} from "lucide-react";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { POPULAR_PRODUCTS } from "../data/products";

// ── Mock Initial Data ────────────────────────────────────────────────────────
const INITIAL_ACTIVE_RENTALS = [
  {
    id: "rent-101",
    productId: "prod-1",
    name: "Modern Queen Bed",
    category: "Furniture",
    monthlyRent: 899,
    securityDeposit: 2000,
    duration: "6 Months",
    totalMonths: 6,
    currentMonth: 4,
    startDate: "15 May 2026",
    renewalDate: "15 Nov 2026",
    status: "Active",
    nextBillingDate: "15 Oct 2026",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "rent-102",
    productId: "prod-4",
    name: "Double Door Refrigerator",
    category: "Appliances",
    monthlyRent: 1499,
    securityDeposit: 3000,
    duration: "12 Months",
    totalMonths: 12,
    currentMonth: 5,
    startDate: "10 Apr 2026",
    renewalDate: "10 Apr 2027",
    status: "Active",
    nextBillingDate: "10 Oct 2026",
    image:
      "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?auto=format&fit=crop&w=600&q=80",
  },
];

const INITIAL_RENTAL_HISTORY = [
  {
    id: "hist-201",
    productId: "prod-3",
    name: "Study & Work Desk",
    category: "Furniture",
    duration: "3 Months",
    period: "01 Jan 2026 – 01 Apr 2026",
    totalPaid: 1797,
    depositRefunded: 1500,
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hist-202",
    productId: "prod-6",
    name: "43-inch Smart TV",
    category: "Appliances",
    duration: "6 Months",
    period: "10 Aug 2025 – 10 Feb 2026",
    totalPaid: 4794,
    depositRefunded: 1800,
    status: "Returned",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview"); // overview, rentals, history, support, profile
  const [activeRentals] = useState(INITIAL_ACTIVE_RENTALS);
  const [rentalHistory] = useState(INITIAL_RENTAL_HISTORY);

  // Profile state
  const [profile, setProfile] = useState({
    name: "Amzad",
    email: "amzad@example.com",
    phone: "+91 98765 43210",
    location: "Jodhpur, Rajasthan",
    address: "House 42, Residency Road, Jodhpur - 342001",
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editProfileForm, setEditProfileForm] = useState({ ...profile });

  // Maintenance Modal State
  const [maintenanceModal, setMaintenanceModal] = useState({
    isOpen: false,
    rental: null,
    issueType: "Routine Inspection",
    notes: "",
    submitted: false,
    requestId: "",
  });

  // Rental Details Modal State
  const [detailsModal, setDetailsModal] = useState({
    isOpen: false,
    rental: null,
  });

  // Financial calculations
  const currentMonthlyTotal = activeRentals.reduce((sum, r) => sum + r.monthlyRent, 0);
  const totalDepositsHeld = activeRentals.reduce((sum, r) => sum + r.securityDeposit, 0);
  const totalHistorySpend = rentalHistory.reduce((sum, r) => sum + r.totalPaid, 0);

  // Open Maintenance Modal
  const handleOpenMaintenance = (rental) => {
    setMaintenanceModal({
      isOpen: true,
      rental,
      issueType: "Routine Inspection",
      notes: "",
      submitted: false,
      requestId: "",
    });
  };

  // Submit Maintenance Request
  const handleSubmitMaintenance = (e) => {
    e.preventDefault();
    const reqId = `MNT-${Math.floor(1000 + Math.random() * 9000)}`;
    setMaintenanceModal((prev) => ({
      ...prev,
      submitted: true,
      requestId: reqId,
    }));
  };

  // Save Profile Changes
  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfile({ ...editProfileForm });
    setIsEditingProfile(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Dashboard Header ────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Profile Avatar Badge */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center font-extrabold text-2xl shadow-md shadow-brand-500/20 shrink-0">
                {profile.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Welcome back, {profile.name}!
                  </h1>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    <Sparkles className="w-3 h-3 text-brand-600" /> Demo Account
                  </span>
                </div>
                <p className="text-slate-600 text-sm mt-1">
                  Preview your sample active rentals, tenure progress, and maintenance requests.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/products">
                <Button variant="primary" size="md" icon={Plus} iconPosition="left" className="shadow-xs">
                  New Rental
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="md" icon={Headphones} iconPosition="left">
                  Support
                </Button>
              </Link>
            </div>
          </div>

          {/* ── Dashboard Navigation Tabs ──────────────────────────────────── */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {[
              { id: "overview", label: "Overview", icon: LayoutDashboard },
              { id: "rentals", label: `My Rentals (${activeRentals.length})`, icon: Package },
              { id: "history", label: `Rental History (${rentalHistory.length})`, icon: Clock },
              { id: "support", label: "Support & Help", icon: Headphones },
              { id: "profile", label: "Account Profile", icon: User },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                    isActive
                      ? "bg-brand-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 4 Overview Summary Cards (Shown on Overview & Rentals) ───────── */}
        {(activeTab === "overview" || activeTab === "rentals") && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {/* Card 1: Active Rentals */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Rentals</p>
                <h3 className="text-2xl font-extrabold text-slate-900">{activeRentals.length}</h3>
                <p className="text-xs text-slate-500 mt-0.5">Subscriptions running</p>
              </div>
            </div>

            {/* Card 2: Monthly Rental */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Monthly Rental</p>
                <h3 className="text-2xl font-extrabold text-slate-900">₹{currentMonthlyTotal.toLocaleString()}</h3>
                <p className="text-xs text-slate-500 mt-0.5">Recurring cycle</p>
              </div>
            </div>

            {/* Card 3: Upcoming Renewal */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <CalendarClock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Upcoming Pickup</p>
                <h3 className="text-2xl font-extrabold text-slate-900">18 Sep</h3>
                <p className="text-xs text-slate-500 mt-0.5">Scheduled inspection</p>
              </div>
            </div>

            {/* Card 4: Support Requests */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Support Requests</p>
                <h3 className="text-2xl font-extrabold text-slate-900">1</h3>
                <p className="text-xs text-slate-500 mt-0.5">Free service visit</p>
              </div>
            </div>
          </div>
        )}

        {/* ── Main Tab Content ────────────────────────────────────────────── */}
        <div className="space-y-8">

          {/* ════ SECTION: ACTIVE RENTALS ════════════════════════════════════ */}
          {(activeTab === "overview" || activeTab === "rentals") && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Package className="w-5 h-5 text-brand-600" />
                    Active Rentals
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your ongoing rental subscriptions, renewal dates, and maintenance controls.
                  </p>
                </div>
                <Badge variant="success" size="sm">
                  {activeRentals.length} Active Plans
                </Badge>
              </div>

              {activeRentals.length === 0 ? (
                /* Empty Active Rentals State */
                <div className="text-center py-12 px-4">
                  <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">No active rentals yet</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                    Explore our rental collection and find quality furniture and appliances for your space.
                  </p>
                  <Link to="/products">
                    <Button variant="primary" size="md" icon={Package} iconPosition="left">
                      Explore Rentals
                    </Button>
                  </Link>
                </div>
              ) : (
                /* Active Rentals Cards Grid */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {activeRentals.map((rental) => {
                    const progressPercent = Math.min(
                      100,
                      Math.round((rental.currentMonth / rental.totalMonths) * 100)
                    );

                    return (
                      <div
                        key={rental.id}
                        className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 hover:border-brand-300 transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Top row: Image, Name, Badge */}
                          <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0 border border-slate-200">
                              <img
                                src={rental.image}
                                alt={rental.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <Badge
                                    variant={rental.category === "Furniture" ? "primary" : "secondary"}
                                    size="sm"
                                    className="mb-1"
                                  >
                                    {rental.category}
                                  </Badge>
                                  <h3 className="text-base font-bold text-slate-900 truncate">
                                    {rental.name}
                                  </h3>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                                  {rental.status}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mt-1">
                                Duration: <span className="font-semibold text-slate-700">{rental.duration}</span> · Started {rental.startDate}
                              </p>
                            </div>
                          </div>

                          {/* Pricing details grid */}
                          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-200/70 text-xs">
                            <div>
                              <span className="text-slate-500 block">Monthly Rent</span>
                              <span className="font-bold text-slate-900 text-sm">
                                ₹{rental.monthlyRent.toLocaleString()} / mo
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">Security Deposit</span>
                              <span className="font-semibold text-slate-700 text-sm">
                                ₹{rental.securityDeposit.toLocaleString()} (Refundable)
                              </span>
                            </div>
                          </div>

                          {/* ── Rental Progress Indicator ──────────────────── */}
                          <div className="mt-4 pt-3 border-t border-slate-200/70">
                            <div className="flex items-center justify-between text-xs mb-1.5">
                              <span className="font-medium text-slate-600 flex items-center gap-1">
                                <CalendarClock className="w-3.5 h-3.5 text-brand-600" />
                                Rental Period: Month {rental.currentMonth} of {rental.totalMonths}
                              </span>
                              <span className="font-bold text-brand-700">{progressPercent}%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-brand-600 rounded-full transition-all duration-500"
                                style={{ width: `${progressPercent}%` }}
                              />
                            </div>
                            <p className="text-[11px] text-slate-400 mt-1.5 flex justify-between">
                              <span>Renews / Pickup: {rental.renewalDate}</span>
                              <span>Next bill: {rental.nextBillingDate}</span>
                            </p>
                          </div>
                        </div>

                        {/* ── Rental Action Buttons ────────────────────────── */}
                        <div className="mt-5 pt-3 border-t border-slate-200/70 flex gap-2.5">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 justify-center text-xs"
                            onClick={() => setDetailsModal({ isOpen: true, rental })}
                          >
                            View Details
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            icon={Wrench}
                            iconPosition="left"
                            className="flex-1 justify-center text-xs"
                            onClick={() => handleOpenMaintenance(rental)}
                          >
                            Request Maintenance
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ════ SECTION: RENTAL HISTORY ════════════════════════════════════ */}
          {(activeTab === "overview" || activeTab === "history") && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-600" />
                    Rental History
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Completed and returned rental subscriptions with deposit settlement receipts.
                  </p>
                </div>
                <Badge variant="secondary" size="sm">
                  {rentalHistory.length} Past Rentals
                </Badge>
              </div>

              {rentalHistory.length === 0 ? (
                <div className="text-center py-10 px-4">
                  <Clock className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-700">No past rentals found</p>
                  <p className="text-xs text-slate-400 mt-0.5">Completed tenures will appear here.</p>
                </div>
              ) : (
                <>
                  {/* Desktop Table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50/50">
                          <th className="py-3.5 px-4 rounded-l-xl">Product</th>
                          <th className="py-3.5 px-4">Category</th>
                          <th className="py-3.5 px-4">Duration</th>
                          <th className="py-3.5 px-4">Rental Period</th>
                          <th className="py-3.5 px-4">Total Paid</th>
                          <th className="py-3.5 px-4">Deposit Status</th>
                          <th className="py-3.5 px-4 rounded-r-xl text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {rentalHistory.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                                />
                                <span className="font-bold text-slate-900 truncate max-w-[180px]">
                                  {item.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <Badge variant={item.category === "Furniture" ? "primary" : "secondary"} size="sm">
                                {item.category}
                              </Badge>
                            </td>
                            <td className="py-4 px-4 font-medium text-slate-700">{item.duration}</td>
                            <td className="py-4 px-4 text-slate-500 text-xs">{item.period}</td>
                            <td className="py-4 px-4 font-bold text-slate-900">₹{item.totalPaid.toLocaleString()}</td>
                            <td className="py-4 px-4 text-xs text-emerald-700 font-semibold">
                              ₹{item.depositRefunded.toLocaleString()} Refunded ✓
                            </td>
                            <td className="py-4 px-4 text-right">
                              <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards (No overflow) */}
                  <div className="md:hidden space-y-4">
                    {rentalHistory.map((item) => (
                      <div
                        key={item.id}
                        className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-200"
                            />
                            <div className="min-w-0">
                              <p className="font-bold text-sm text-slate-900 truncate">{item.name}</p>
                              <p className="text-xs text-slate-500">{item.duration} Plan</p>
                            </div>
                          </div>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 shrink-0">
                            {item.status}
                          </span>
                        </div>

                        <div className="text-xs text-slate-500 pt-2 border-t border-slate-200 flex justify-between">
                          <span>Period:</span>
                          <span className="font-medium text-slate-700">{item.period}</span>
                        </div>

                        <div className="text-xs text-slate-500 flex justify-between">
                          <span>Total Paid:</span>
                          <span className="font-bold text-slate-900">₹{item.totalPaid.toLocaleString()}</span>
                        </div>

                        <div className="text-xs text-slate-500 flex justify-between">
                          <span>Deposit Settlement:</span>
                          <span className="font-semibold text-emerald-700">₹{item.depositRefunded.toLocaleString()} Refunded</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* ════ SECTION: FINANCIAL SUMMARY & PROFILE & SUPPORT (2-COL) ═════ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* 1. Financial Overview Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <CreditCard className="w-5 h-5 text-brand-600" />
                  <h2 className="text-lg font-bold text-slate-900">Monthly Summary</h2>
                </div>

                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <dt>Current Monthly Rent</dt>
                    <dd className="font-bold text-slate-900">₹{currentMonthlyTotal.toLocaleString()} / mo</dd>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <dt>Security Deposits (Held)</dt>
                    <dd className="font-bold text-slate-900">₹{totalDepositsHeld.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <dt>Completed Rental Spend</dt>
                    <dd className="font-bold text-slate-900">₹{totalHistorySpend.toLocaleString()}</dd>
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
                    <dt className="text-xs font-semibold text-slate-700">Deposit Status</dt>
                    <dd className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      100% Refundable
                    </dd>
                  </div>
                </dl>

                <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500 leading-relaxed">
                  <p>
                    Security deposits are fully refundable at the end of the rental tenure following asset inspection.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link to="/products" className="block text-center">
                  <Button variant="outline" size="sm" icon={Package} iconPosition="left" className="w-full justify-center">
                    Browse More Essentials
                  </Button>
                </Link>
              </div>
            </div>

            {/* 2. Need Help? / Support Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <Headphones className="w-5 h-5 text-brand-600" />
                  <h2 className="text-lg font-bold text-slate-900">Need Help?</h2>
                </div>

                <p className="text-xs text-slate-500 mb-4">
                  RentEase subscribers have access to maintenance support, tenure extensions, and support assistance.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700 mb-5">
                  <li className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <Wrench className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Maintenance &amp; Servicing</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <Truck className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Relocation Assistance</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Tenure Extension &amp; Upgrades</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <Link to="/contact" className="block">
                  <Button variant="primary" size="sm" icon={Headphones} iconPosition="left" className="w-full justify-center">
                    Contact Support
                  </Button>
                </Link>
                <Link to="/about" className="block">
                  <Button variant="ghost" size="sm" className="w-full justify-center text-slate-500">
                    View Rental Policy
                  </Button>
                </Link>
              </div>
            </div>

            {/* 3. Account / Profile Overview Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-brand-600" />
                    <h2 className="text-lg font-bold text-slate-900">Account Profile</h2>
                  </div>
                  <button
                    onClick={() => {
                      setEditProfileForm({ ...profile });
                      setIsEditingProfile(true);
                    }}
                    className="text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1"
                  >
                    Edit Profile
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Full Name</span>
                    <span className="font-bold text-slate-900 text-sm">{profile.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Email Address</span>
                    <span className="font-medium text-slate-800">{profile.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Phone Number</span>
                    <span className="font-medium text-slate-800">{profile.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">City / Region</span>
                    <span className="font-medium text-slate-800">{profile.location}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Primary Delivery Address</span>
                    <span className="font-medium text-slate-800 leading-relaxed block">{profile.address}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ID Verified
                </span>
                <span>Member since 2025</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── MODAL 1: Request Maintenance ───────────────────────────────────── */}
      {maintenanceModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 shadow-xl relative">
            <button
              onClick={() => setMaintenanceModal((prev) => ({ ...prev, isOpen: false }))}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!maintenanceModal.submitted ? (
              <form onSubmit={handleSubmitMaintenance}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Request Maintenance</h3>
                    <p className="text-xs text-slate-500">For {maintenanceModal.rental?.name}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Select Service Type
                    </label>
                    <select
                      value={maintenanceModal.issueType}
                      onChange={(e) =>
                        setMaintenanceModal((prev) => ({ ...prev, issueType: e.target.value }))
                      }
                      className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                    >
                      <option value="Routine Inspection">Routine Inspection &amp; Cleaning</option>
                      <option value="Minor Repair">Minor Repair / Part Replacement</option>
                      <option value="Relocation Request">Relocation / Re-installation</option>
                      <option value="General Troubleshooting">General Troubleshooting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Describe the issue or instructions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={maintenanceModal.notes}
                      onChange={(e) =>
                        setMaintenanceModal((prev) => ({ ...prev, notes: e.target.value }))
                      }
                      placeholder="e.g. Please check the door seal / cooling levels, available on weekends."
                      className="w-full text-sm rounded-xl border border-slate-300 p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20 resize-y"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free of charge under your active RentEase subscription.</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center"
                  >
                    Submit Request
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={() => setMaintenanceModal((prev) => ({ ...prev, isOpen: false }))}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Maintenance Request Submitted!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto mb-4">
                  Our certified technician will contact you within 24 hours to schedule the visit.
                </p>
                <div className="inline-block bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-700 font-mono mb-6">
                  Ticket Reference: <strong>{maintenanceModal.requestId}</strong>
                </div>
                <div>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    onClick={() => setMaintenanceModal((prev) => ({ ...prev, isOpen: false }))}
                  >
                    Got It, Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── MODAL 2: View Rental Details ────────────────────────────────────── */}
      {detailsModal.isOpen && detailsModal.rental && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 shadow-xl relative">
            <button
              onClick={() => setDetailsModal({ isOpen: false, rental: null })}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
              <img
                src={detailsModal.rental.image}
                alt={detailsModal.rental.name}
                className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
              />
              <div className="min-w-0">
                <Badge variant={detailsModal.rental.category === "Furniture" ? "primary" : "secondary"} size="sm">
                  {detailsModal.rental.category}
                </Badge>
                <h3 className="text-lg font-bold text-slate-900 truncate mt-0.5">{detailsModal.rental.name}</h3>
                <p className="text-xs text-slate-500">Plan ID: #{detailsModal.rental.id}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Rental Tenure</span>
                <span className="font-semibold text-slate-900">{detailsModal.rental.duration}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Start Date</span>
                <span className="font-semibold text-slate-900">{detailsModal.rental.startDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">End / Renewal Date</span>
                <span className="font-semibold text-slate-900">{detailsModal.rental.renewalDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Monthly Rent</span>
                <span className="font-bold text-slate-900">₹{detailsModal.rental.monthlyRent.toLocaleString()} / mo</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Security Deposit</span>
                <span className="font-bold text-slate-900">₹{detailsModal.rental.securityDeposit.toLocaleString()} (Refundable)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Service Coverage</span>
                <span className="font-semibold text-emerald-700">Full Maintenance &amp; Damage Cover ✓</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3">
              <Link to={`/products/${detailsModal.rental.productId}`} className="flex-1">
                <Button variant="primary" size="md" icon={ExternalLink} iconPosition="right" className="w-full justify-center">
                  Product Catalog
                </Button>
              </Link>
              <Button
                variant="outline"
                size="md"
                onClick={() => setDetailsModal({ isOpen: false, rental: null })}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL 3: Edit Profile ───────────────────────────────────────────── */}
      {isEditingProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-md w-full p-6 sm:p-8 shadow-xl relative">
            <button
              onClick={() => setIsEditingProfile(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Edit Profile</h3>
                <p className="text-xs text-slate-500">Update your account information</p>
              </div>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={editProfileForm.name}
                  onChange={(e) => setEditProfileForm({ ...editProfileForm, name: e.target.value })}
                  required
                  className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={editProfileForm.email}
                  onChange={(e) => setEditProfileForm({ ...editProfileForm, email: e.target.value })}
                  required
                  className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={editProfileForm.phone}
                  onChange={(e) => setEditProfileForm({ ...editProfileForm, phone: e.target.value })}
                  required
                  className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  value={editProfileForm.location}
                  onChange={(e) => setEditProfileForm({ ...editProfileForm, location: e.target.value })}
                  required
                  className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Delivery Address
                </label>
                <textarea
                  rows={2}
                  value={editProfileForm.address}
                  onChange={(e) => setEditProfileForm({ ...editProfileForm, address: e.target.value })}
                  required
                  className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20 resize-y"
                />
              </div>

              <div className="mt-6 flex gap-3 pt-2">
                <Button type="submit" variant="primary" size="md" className="flex-1 justify-center">
                  Save Changes
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() => setIsEditingProfile(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

