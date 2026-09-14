import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Sparkles,
  ArrowRight,
  Armchair,
  User,
} from 'lucide-react';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemCount } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand / Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-sm shadow-brand-500/30 group-hover:bg-brand-700 transition-colors">
              <Armchair className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1">
                RentEase
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 inline-block"></span>
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-slate-500 hidden sm:block">
                Live better. Own less.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-600 bg-brand-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Search Placeholder Button */}
            <Link
              to="/products"
              className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              title="Search products"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </Link>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              title="View Cart"
              aria-label={`View Cart${totalItemCount > 0 ? `, ${totalItemCount} items` : ''}`}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItemCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-brand-600 text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                  {totalItemCount > 99 ? '99+' : totalItemCount}
                </span>
              )}
            </Link>

            {/* Dashboard Quick Link */}
            <Link
              to="/dashboard"
              className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              title="My Rentals Dashboard"
              aria-label="My Rentals Dashboard"
            >
              <User className="w-5 h-5" />
            </Link>

            <div className="h-6 w-px bg-slate-200 mx-1" />

            {/* Login CTA */}
            <Link to="/login">
              <Button variant="primary" size="md">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/cart"
              onClick={closeMobileMenu}
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label={`Cart${totalItemCount > 0 ? `, ${totalItemCount} items` : ''}`}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItemCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-brand-600 text-[9px] font-bold text-white rounded-full flex items-center justify-center">
                  {totalItemCount > 99 ? '99+' : totalItemCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-brand-600 bg-brand-50 font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/dashboard"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'text-brand-600 bg-brand-50 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              My Dashboard
            </NavLink>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Link to="/products" onClick={closeMobileMenu} className="w-full">
                <Button variant="outline" size="md" icon={Search} className="w-full justify-start">
                  Search Products
                </Button>
              </Link>
              <Link to="/login" onClick={closeMobileMenu} className="w-full">
                <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right" className="w-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
