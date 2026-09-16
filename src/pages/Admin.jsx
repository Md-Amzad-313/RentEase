import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  Package,
  CreditCard,
  Users,
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
  FileText,
  AlertCircle,
  X,
  Plus,
  Truck,
  Sparkles,
  Search,
  Filter,
  Edit3,
  Trash2,
  Eye,
  TrendingUp,
  Download,
  Check,
  AlertTriangle,
  Layers,
  Settings,
  DollarSign,
  Activity,
  BarChart2,
} from "lucide-react";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Input from "../components/ui/Input";
import { POPULAR_PRODUCTS } from "../data/products";

// ── Initial Mock Data ────────────────────────────────────────────────────────
const INITIAL_STATS = {
  totalProducts: 24,
  activeRentals: 142,
  totalCustomers: 389,
  pendingRequests: 8,
  monthlyRevenue: 342850,
  previousRevenue: 318200,
  estimatedRevenue: 365000,
  securityDepositReserve: 845000,
};

const INITIAL_REQUESTS = [
  {
    id: "REQ-8421",
    customer: "Rahul Sharma",
    email: "rahul.s@example.com",
    mobile: "+91 98234 56789",
    product: "Modern Queen Bed",
    category: "Furniture",
    duration: "6 Months",
    monthlyRent: 899,
    securityDeposit: 2000,
    status: "Pending",
    date: "14 Sep 2026",
    address: "B-402, Green Valley Apartments, Andheri West, Mumbai",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "REQ-8420",
    customer: "Priya Patel",
    email: "priya.p@example.com",
    mobile: "+91 98765 43210",
    product: "Double Door Refrigerator",
    category: "Appliances",
    duration: "12 Months",
    monthlyRent: 1499,
    securityDeposit: 3000,
    status: "Approved",
    date: "14 Sep 2026",
    address: "Flat 12, Sunrise Residency, Koramangala, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "REQ-8419",
    customer: "Amzad Khan",
    email: "amzad@example.com",
    mobile: "+91 98111 22334",
    product: "Comfort 3-Seater Sofa",
    category: "Furniture",
    duration: "6 Months",
    monthlyRent: 1199,
    securityDeposit: 2500,
    status: "Active",
    date: "12 Sep 2026",
    address: "House 42, Residency Road, Jodhpur - 342001",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "REQ-8418",
    customer: "Ananya Iyer",
    email: "ananya.i@example.com",
    mobile: "+91 97654 32109",
    product: "Front Load Washing Machine",
    category: "Appliances",
    duration: "3 Months",
    monthlyRent: 999,
    securityDeposit: 2000,
    status: "Active",
    date: "10 Sep 2026",
    address: "Tower C, Cyber Heights, Hitech City, Hyderabad",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "REQ-8417",
    customer: "Vikram Malhotra",
    email: "vikram.m@example.com",
    mobile: "+91 99887 76655",
    product: "Study & Work Desk",
    category: "Furniture",
    duration: "3 Months",
    monthlyRent: 599,
    securityDeposit: 1500,
    status: "Completed",
    date: "01 Sep 2026",
    address: "Villa 18, Palm Meadows, Whitefield, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80",
  },
];

const INITIAL_CUSTOMERS = [
  {
    id: "CUST-001",
    name: "Amzad Khan",
    email: "amzad@example.com",
    phone: "+91 98765 43210",
    activeRentals: 2,
    totalSpent: 8388,
    status: "Verified",
    joinedDate: "15 Jan 2025",
    city: "Jodhpur",
  },
  {
    id: "CUST-002",
    name: "Rahul Sharma",
    email: "rahul.s@example.com",
    phone: "+91 98234 56789",
    activeRentals: 1,
    totalSpent: 5394,
    status: "Verified",
    joinedDate: "02 Mar 2025",
    city: "Mumbai",
  },
  {
    id: "CUST-003",
    name: "Priya Patel",
    email: "priya.p@example.com",
    phone: "+91 98765 43210",
    activeRentals: 1,
    totalSpent: 17988,
    status: "KYC Pending",
    joinedDate: "20 Jun 2025",
    city: "Bengaluru",
  },
  {
    id: "CUST-004",
    name: "Ananya Iyer",
    email: "ananya.i@example.com",
    phone: "+91 97654 32109",
    activeRentals: 1,
    totalSpent: 2997,
    status: "Verified",
    joinedDate: "10 Jul 2025",
    city: "Hyderabad",
  },
  {
    id: "CUST-005",
    name: "Vikram Malhotra",
    email: "vikram.m@example.com",
    phone: "+91 99887 76655",
    activeRentals: 0,
    totalSpent: 11450,
    status: "Verified",
    joinedDate: "05 Nov 2024",
    city: "Bengaluru",
  },
];

const INITIAL_MAINTENANCE = [
  {
    id: "MNT-3901",
    customer: "Amzad Khan",
    product: "Double Door Refrigerator",
    issue: "Routine gas pressure and cooling level inspection",
    priority: "Medium",
    status: "In Progress",
    date: "13 Sep 2026",
    assignedTo: "Karan Verma (Technician #04)",
  },
  {
    id: "MNT-3902",
    customer: "Ananya Iyer",
    product: "Front Load Washing Machine",
    issue: "Inlet water pipe loose connection check",
    priority: "High",
    status: "Open",
    date: "14 Sep 2026",
    assignedTo: "Unassigned",
  },
  {
    id: "MNT-3903",
    customer: "Rahul Sharma",
    product: "Modern Queen Bed",
    issue: "Headboard screw tightening and polishing",
    priority: "Low",
    status: "Resolved",
    date: "08 Sep 2026",
    assignedTo: "Sunil Das (Technician #02)",
  },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview"); // overview, rentals, products, customers, maintenance, revenue
  const [stats] = useState(INITIAL_STATS);

  // Products state (based on POPULAR_PRODUCTS with added inventory data)
  const [products, setProducts] = useState(
    POPULAR_PRODUCTS.map((p, idx) => ({
      ...p,
      stock: idx === 1 ? 2 : idx === 3 ? 0 : 8 + idx * 2,
      availability: idx === 3 ? "Out of Stock" : idx === 1 ? "Low Stock" : "In Stock",
      status: idx === 3 ? "Paused" : "Active",
    }))
  );

  // Requests state
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
  const [maintenanceList, setMaintenanceList] = useState(INITIAL_MAINTENANCE);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Product Modal (Add / Edit)
  const [productModal, setProductModal] = useState({
    isOpen: false,
    mode: "add", // add or edit
    product: null,
  });

  const [productForm, setProductForm] = useState({
    name: "",
    category: "Furniture",
    monthlyRent: "",
    securityDeposit: "",
    stock: 5,
    image: "",
    description: "",
  });

  // Request Details Modal
  const [requestDetailsModal, setRequestDetailsModal] = useState({
    isOpen: false,
    request: null,
  });

  // Notification / Toast
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  // Status badge style helper
  const getStatusBadgeVariant = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
      case "active":
      case "verified":
      case "resolved":
      case "in stock":
        return "success";
      case "pending":
      case "kyc pending":
      case "open":
      case "low stock":
        return "warning";
      case "completed":
        return "primary";
      case "rejected":
      case "out of stock":
      case "paused":
      case "high":
        return "error";
      default:
        return "secondary";
    }
  };

  // Request status change
  const handleUpdateReqStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    showToast(`Request #${id} status changed to ${newStatus}`);
  };

  // Maintenance status toggle
  const handleToggleMaintenanceStatus = (id) => {
    setMaintenanceList((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const nextStatus =
            m.status === "Open"
              ? "In Progress"
              : m.status === "In Progress"
              ? "Resolved"
              : "Open";
          showToast(`Ticket #${id} status updated to ${nextStatus}`);
          return { ...m, status: nextStatus };
        }
        return m;
      })
    );
  };

  // Open Add Product Modal
  const handleOpenAddProduct = () => {
    setProductForm({
      name: "",
      category: "Furniture",
      monthlyRent: "",
      securityDeposit: "",
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
      description: "",
    });
    setProductModal({ isOpen: true, mode: "add", product: null });
  };

  // Open Edit Product Modal
  const handleOpenEditProduct = (prod) => {
    setProductForm({
      name: prod.name,
      category: prod.category,
      monthlyRent: prod.monthlyRent,
      securityDeposit: prod.securityDeposit,
      stock: prod.stock,
      image: prod.image,
      description: prod.description || "",
    });
    setProductModal({ isOpen: true, mode: "edit", product: prod });
  };

  // Save Product (Add or Edit)
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (productModal.mode === "add") {
      const newProd = {
        id: `prod-${Date.now().toString().slice(-4)}`,
        name: productForm.name,
        category: productForm.category,
        monthlyRent: Number(productForm.monthlyRent),
        securityDeposit: Number(productForm.securityDeposit),
        stock: Number(productForm.stock),
        availability: Number(productForm.stock) > 0 ? "In Stock" : "Out of Stock",
        status: "Active",
        rating: 4.8,
        reviewCount: 0,
        image: productForm.image,
        description: productForm.description,
        features: ["Standard Warranty", "Inspected Quality"],
      };
      setProducts([newProd, ...products]);
      showToast(`Product "${productForm.name}" created successfully!`);
    } else {
      setProducts(
        products.map((p) =>
          p.id === productModal.product.id
            ? {
                ...p,
                name: productForm.name,
                category: productForm.category,
                monthlyRent: Number(productForm.monthlyRent),
                securityDeposit: Number(productForm.securityDeposit),
                stock: Number(productForm.stock),
                availability: Number(productForm.stock) > 0 ? "In Stock" : "Out of Stock",
                image: productForm.image,
                description: productForm.description,
              }
            : p
        )
      );
      showToast(`Product updated successfully!`);
    }
    setProductModal({ isOpen: false, mode: "add", product: null });
  };

  // Delete Product
  const handleDeleteProduct = (id, name) => {
    if (window.confirm(`Are you sure you want to remove "${name}" from inventory?`)) {
      setProducts(products.filter((p) => p.id !== id));
      showToast(`Product "${name}" removed from inventory.`);
    }
  };

  // Filtered products
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || p.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Toast Alert ─────────────────────────────────────────────────── */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 animate-in slide-in-from-bottom-3 duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-500/20 shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Admin Dashboard
                  </h1>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    <Sparkles className="w-3 h-3 text-brand-600" /> Frontend Demo Preview
                  </span>
                </div>
                <p className="text-slate-600 text-sm mt-1">
                  Sample management portal demonstrating product inventory, rental requests, and servicing workflows.
                </p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                icon={Plus}
                iconPosition="left"
                onClick={handleOpenAddProduct}
                className="shadow-xs"
              >
                Add Product
              </Button>
              <Button
                variant="outline"
                size="md"
                icon={Download}
                iconPosition="left"
                onClick={() => showToast("Exporting operational report (CSV)...")}
              >
                Export
              </Button>
            </div>
          </div>

          {/* ── Dashboard Navigation Tabs ──────────────────────────────────── */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {[
              { id: "overview", label: "Overview", icon: Layers },
              { id: "rentals", label: `Recent Requests (${requests.length})`, icon: CalendarClock },
              { id: "products", label: `Product Inventory (${products.length})`, icon: Package },
              { id: "customers", label: `Customers (${customers.length})`, icon: Users },
              { id: "maintenance", label: `Maintenance (${maintenanceList.length})`, icon: Wrench },
              { id: "revenue", label: "Revenue & Escrow", icon: TrendingUp },
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

        {/* ── 5 Overview Statistics Cards ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-8">
          {/* 1. Total Products */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Total Products</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{products.length}</h3>
              <p className="text-[11px] text-slate-400">In catalog</p>
            </div>
          </div>

          {/* 2. Active Rentals */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Active Rentals</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{stats.activeRentals}</h3>
              <p className="text-[11px] text-emerald-600 font-semibold">+12% this month</p>
            </div>
          </div>

          {/* 3. Total Customers */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Total Customers</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{stats.totalCustomers}</h3>
              <p className="text-[11px] text-slate-400">Registered users</p>
            </div>
          </div>

          {/* 4. Pending Requests */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Pending Requests</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-amber-600">{requests.filter(r => r.status === "Pending").length}</h3>
              <p className="text-[11px] text-amber-700 font-medium">Needs review</p>
            </div>
          </div>

          {/* 5. Monthly Revenue */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-3.5 sm:col-span-2 lg:col-span-1">
            <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Monthly Revenue</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">₹{(stats.monthlyRevenue / 1000).toFixed(1)}k</h3>
              <p className="text-[11px] text-emerald-600 font-semibold">+7.7% MoM</p>
            </div>
          </div>
        </div>

        {/* ── Main Tabbed Content Panels ──────────────────────────────────── */}
        <div className="space-y-8">

          {/* ════ SECTION 1: RECENT RENTAL REQUESTS ══════════════════════════ */}
          {(activeTab === "overview" || activeTab === "rentals") && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <CalendarClock className="w-5 h-5 text-brand-600" />
                    Recent Rental Requests
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Review and process incoming customer subscription applications.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm">
                    {requests.length} Requests
                  </Badge>
                </div>
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50/50">
                      <th className="py-3.5 px-4 rounded-l-xl">Request ID</th>
                      <th className="py-3.5 px-4">Customer</th>
                      <th className="py-3.5 px-4">Product</th>
                      <th className="py-3.5 px-4">Duration</th>
                      <th className="py-3.5 px-4">Monthly Rent</th>
                      <th className="py-3.5 px-4">Date</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 rounded-r-xl text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {requests.map((req) => (
                      <tr key={req.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-xs text-slate-900">
                          #{req.id}
                        </td>
                        <td className="py-4 px-4">
                          <p className="font-bold text-slate-900">{req.customer}</p>
                          <p className="text-xs text-slate-400">{req.mobile}</p>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={req.image}
                              alt={req.product}
                              className="w-9 h-9 rounded-lg object-cover border border-slate-200 shrink-0"
                            />
                            <span className="font-semibold text-slate-800 truncate max-w-[140px]">
                              {req.product}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium text-slate-700">{req.duration}</td>
                        <td className="py-4 px-4 font-bold text-slate-900">
                          ₹{req.monthlyRent.toLocaleString()}/mo
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-500">{req.date}</td>
                        <td className="py-4 px-4">
                          <Badge variant={getStatusBadgeVariant(req.status)} size="sm">
                            {req.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setRequestDetailsModal({ isOpen: true, request: req })}
                              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                              title="View Application"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            {req.status === "Pending" && (
                              <>
                                <button
                                  onClick={() => handleUpdateReqStatus(req.id, "Approved")}
                                  className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                  title="Approve Request"
                                >
                                  <Check className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleUpdateReqStatus(req.id, "Rejected")}
                                  className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                                  title="Reject Request"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards View */}
              <div className="md:hidden space-y-3.5">
                {requests.map((req) => (
                  <div
                    key={req.id}
                    className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-slate-900">#{req.id}</span>
                      <Badge variant={getStatusBadgeVariant(req.status)} size="sm">
                        {req.status}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src={req.image}
                        alt={req.product}
                        className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-bold text-sm text-slate-900 truncate">{req.product}</p>
                        <p className="text-xs text-slate-500">
                          {req.customer} · {req.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                      <span className="font-bold text-slate-900 text-sm">₹{req.monthlyRent}/mo</span>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs px-2.5 py-1"
                          onClick={() => setRequestDetailsModal({ isOpen: true, request: req })}
                        >
                          Details
                        </Button>
                        {req.status === "Pending" && (
                          <Button
                            variant="primary"
                            size="sm"
                            className="text-xs px-2.5 py-1"
                            onClick={() => handleUpdateReqStatus(req.id, "Approved")}
                          >
                            Approve
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════ SECTION 2: PRODUCT MANAGEMENT ══════════════════════════════ */}
          {(activeTab === "overview" || activeTab === "products") && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Package className="w-5 h-5 text-brand-600" />
                    Product Management
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Manage catalog pricing, availability status, and inventory units.
                  </p>
                </div>

                {/* Filter and search bar */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search catalog..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-xs rounded-xl border border-slate-300 pl-9 pr-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                    />
                  </div>

                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="text-xs rounded-xl border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                  >
                    <option value="all">All Categories</option>
                    <option value="furniture">Furniture</option>
                    <option value="appliances">Appliances</option>
                  </select>

                  <Button
                    variant="primary"
                    size="sm"
                    icon={Plus}
                    iconPosition="left"
                    onClick={handleOpenAddProduct}
                  >
                    New Product
                  </Button>
                </div>
              </div>

              {/* Products Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50/50">
                      <th className="py-3.5 px-4 rounded-l-xl">Product</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Monthly Rent</th>
                      <th className="py-3.5 px-4">Deposit</th>
                      <th className="py-3.5 px-4">Availability</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 rounded-r-xl text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredProducts.map((prod) => (
                      <tr key={prod.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                            />
                            <div className="min-w-0">
                              <p className="font-bold text-slate-900 truncate max-w-[180px]">
                                {prod.name}
                              </p>
                              <p className="text-[11px] text-slate-400">ID: #{prod.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <Badge variant={prod.category === "Furniture" ? "primary" : "secondary"} size="sm">
                            {prod.category}
                          </Badge>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          ₹{prod.monthlyRent.toLocaleString()} / mo
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 font-medium text-xs">
                          ₹{prod.securityDeposit.toLocaleString()}
                        </td>
                        <td className="py-3.5 px-4">
                          <Badge variant={getStatusBadgeVariant(prod.availability)} size="sm">
                            {prod.availability} ({prod.stock})
                          </Badge>
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${
                              prod.status === "Active"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {prod.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Link
                              to={`/products/${prod.id}`}
                              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                              title="View Catalog Page"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => handleOpenEditProduct(prod)}
                              className="p-1.5 text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                              title="Edit Product"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(prod.id, prod.name)}
                              className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                              title="Delete Product"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════ SECTION 3: CUSTOMER MANAGEMENT ═════════════════════════════ */}
          {(activeTab === "overview" || activeTab === "customers") && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-600" />
                    Customer Management
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Registered subscribers, active tenancy count, and KYC compliance records.
                  </p>
                </div>
                <Badge variant="primary" size="sm">
                  {customers.length} Accounts Listed
                </Badge>
              </div>

              {/* Customers Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50/50">
                      <th className="py-3.5 px-4 rounded-l-xl">Customer</th>
                      <th className="py-3.5 px-4">Contact</th>
                      <th className="py-3.5 px-4">City</th>
                      <th className="py-3.5 px-4">Active Rentals</th>
                      <th className="py-3.5 px-4">Total Spent</th>
                      <th className="py-3.5 px-4">KYC Status</th>
                      <th className="py-3.5 px-4 rounded-r-xl text-right">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {customers.map((cust) => (
                      <tr key={cust.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0">
                              {cust.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{cust.name}</p>
                              <p className="text-[11px] text-slate-400">ID: #{cust.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          <p className="text-slate-800 font-medium">{cust.email}</p>
                          <p className="text-slate-400">{cust.phone}</p>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 font-medium text-xs">{cust.city}</td>
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-slate-900">{cust.activeRentals}</span>{" "}
                          <span className="text-xs text-slate-400">active</span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          ₹{cust.totalSpent.toLocaleString()}
                        </td>
                        <td className="py-3.5 px-4">
                          <Badge variant={getStatusBadgeVariant(cust.status)} size="sm">
                            {cust.status}
                          </Badge>
                        </td>
                        <td className="py-3.5 px-4 text-right text-xs text-slate-500 font-medium">
                          {cust.joinedDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════ SECTION 4: MAINTENANCE & SERVICE REQUESTS ══════════════════ */}
          {(activeTab === "overview" || activeTab === "maintenance") && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-brand-600" />
                    Maintenance &amp; Service Requests
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Track technician dispatches, routine servicing, and repair tickets.
                  </p>
                </div>
                <Badge variant="warning" size="sm">
                  {maintenanceList.filter((m) => m.status !== "Resolved").length} Pending Service Visits
                </Badge>
              </div>

              {/* Maintenance Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50/50">
                      <th className="py-3.5 px-4 rounded-l-xl">Ticket ID</th>
                      <th className="py-3.5 px-4">Customer</th>
                      <th className="py-3.5 px-4">Product</th>
                      <th className="py-3.5 px-4">Issue Description</th>
                      <th className="py-3.5 px-4">Priority</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 rounded-r-xl text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {maintenanceList.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-xs text-slate-900">
                          #{ticket.id}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">{ticket.customer}</td>
                        <td className="py-3.5 px-4 text-slate-700 font-medium">{ticket.product}</td>
                        <td className="py-3.5 px-4 text-xs text-slate-600 max-w-xs truncate">
                          {ticket.issue}
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              ticket.priority === "High"
                                ? "bg-rose-100 text-rose-700"
                                : ticket.priority === "Medium"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <Badge variant={getStatusBadgeVariant(ticket.status)} size="sm">
                            {ticket.status}
                          </Badge>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <Button
                            variant={ticket.status === "Resolved" ? "outline" : "secondary"}
                            size="sm"
                            className="text-xs"
                            onClick={() => handleToggleMaintenanceStatus(ticket.id)}
                          >
                            {ticket.status === "Open"
                              ? "Assign"
                              : ticket.status === "In Progress"
                              ? "Resolve ✓"
                              : "Reopen"}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════ SECTION 5: REVENUE & ESCROW ANALYTICS ══════════════════════ */}
          {(activeTab === "overview" || activeTab === "revenue") && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Financial Breakdown Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs lg:col-span-2">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-brand-600" />
                    <h2 className="text-lg font-bold text-slate-900">Revenue &amp; Renewal Metrics</h2>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    +7.7% MoM Growth
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Current Month</p>
                    <p className="text-xl font-extrabold text-slate-900">
                      ₹{stats.monthlyRevenue.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Recurring billing</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Previous Month</p>
                    <p className="text-xl font-extrabold text-slate-700">
                      ₹{stats.previousRevenue.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Settled total</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Estimated Next Month</p>
                    <p className="text-xl font-extrabold text-brand-700">
                      ₹{stats.estimatedRevenue.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-brand-600 font-semibold mt-0.5">Projected pipeline</p>
                  </div>
                </div>

                {/* Category Revenue Distribution Bars */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Furniture Subscriptions (54%)</span>
                      <span>₹1,85,139</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-600 rounded-full w-[54%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Appliance Subscriptions (46%)</span>
                      <span>₹1,57,711</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full w-[46%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Escrow Reserve Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <h2 className="text-lg font-bold text-slate-900">Security Deposit Escrow</h2>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 mb-4">
                    <p className="text-xs text-emerald-800 font-medium">Total Escrow Reserve Held</p>
                    <p className="text-2xl font-extrabold text-emerald-900 mt-1">
                      ₹{stats.securityDepositReserve.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-emerald-700 mt-1">100% backed in escrow vault</p>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    Customer security deposits are held separately from operational cash flow to ensure instant refund upon returned asset inspection.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-xs"
                    onClick={() => showToast("Escrow reconciliation audit complete: 100% balanced.")}
                  >
                    Run Escrow Audit
                  </Button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── MODAL 1: Add / Edit Product Modal ─────────────────────────────── */}
      {productModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setProductModal({ isOpen: false, mode: "add", product: null })}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {productModal.mode === "add" ? "Add New Rental Product" : "Edit Product"}
                </h3>
                <p className="text-xs text-slate-500">Configure catalog details and subscription pricing</p>
              </div>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ergonomic Office Chair"
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                  >
                    <option value="Furniture">Furniture</option>
                    <option value="Appliances">Appliances</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Inventory Units *
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={productForm.stock}
                    onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                    className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Monthly Rent (₹) *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    placeholder="e.g. 799"
                    value={productForm.monthlyRent}
                    onChange={(e) => setProductForm({ ...productForm, monthlyRent: e.target.value })}
                    className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Security Deposit (₹) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    placeholder="e.g. 1500"
                    value={productForm.securityDeposit}
                    onChange={(e) =>
                      setProductForm({ ...productForm, securityDeposit: e.target.value })
                    }
                    className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Product Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={productForm.image}
                  onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                  className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Short product overview..."
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full text-sm rounded-xl border border-slate-300 p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20 resize-y"
                />
              </div>

              <div className="mt-6 flex gap-3 pt-2">
                <Button type="submit" variant="primary" size="md" className="flex-1 justify-center">
                  {productModal.mode === "add" ? "Create Product" : "Save Changes"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() => setProductModal({ isOpen: false, mode: "add", product: null })}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL 2: View Request Details Modal ───────────────────────────── */}
      {requestDetailsModal.isOpen && requestDetailsModal.request && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 shadow-xl relative">
            <button
              onClick={() => setRequestDetailsModal({ isOpen: false, request: null })}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
              <img
                src={requestDetailsModal.request.image}
                alt={requestDetailsModal.request.product}
                className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
              />
              <div>
                <span className="font-mono text-xs font-bold text-slate-400">
                  #{requestDetailsModal.request.id}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {requestDetailsModal.request.product}
                </h3>
                <p className="text-xs text-slate-500">{requestDetailsModal.request.category}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-1 text-xs">
                <p className="font-bold text-slate-900 text-sm">{requestDetailsModal.request.customer}</p>
                <p className="text-slate-600">{requestDetailsModal.request.email} | {requestDetailsModal.request.mobile}</p>
                <p className="text-slate-600 pt-1 leading-relaxed">
                  <strong>Delivery Address:</strong> {requestDetailsModal.request.address}
                </p>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-100 text-xs">
                <span className="text-slate-500">Requested Tenure</span>
                <span className="font-semibold text-slate-900">{requestDetailsModal.request.duration}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-100 text-xs">
                <span className="text-slate-500">Monthly Rent</span>
                <span className="font-bold text-slate-900">₹{requestDetailsModal.request.monthlyRent}/mo</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-100 text-xs">
                <span className="text-slate-500">Security Deposit</span>
                <span className="font-bold text-slate-900">₹{requestDetailsModal.request.securityDeposit}</span>
              </div>

              <div className="flex justify-between py-1 text-xs">
                <span className="text-slate-500">Current Status</span>
                <Badge variant={getStatusBadgeVariant(requestDetailsModal.request.status)} size="sm">
                  {requestDetailsModal.request.status}
                </Badge>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2.5">
              {requestDetailsModal.request.status === "Pending" ? (
                <>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center"
                    onClick={() => {
                      handleUpdateReqStatus(requestDetailsModal.request.id, "Approved");
                      setRequestDetailsModal({ isOpen: false, request: null });
                    }}
                  >
                    Approve Request
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    className="text-rose-600"
                    onClick={() => {
                      handleUpdateReqStatus(requestDetailsModal.request.id, "Rejected");
                      setRequestDetailsModal({ isOpen: false, request: null });
                    }}
                  >
                    Reject
                  </Button>
                </>
              ) : (
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => setRequestDetailsModal({ isOpen: false, request: null })}
                >
                  Close Snapshot
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
