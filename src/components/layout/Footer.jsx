import React from 'react';
import { Link } from 'react-router-dom';
import { Armchair, ShieldCheck, Truck, RefreshCw, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const rentalCategories = [
    { name: 'Furniture', path: '/categories' },
    { name: 'Appliances', path: '/categories' },
    { name: 'Electronics', path: '/categories' },
    { name: 'Work from Home', path: '/categories' },
    { name: 'Living Room Packages', path: '/categories' },
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/contact' },
    { name: 'Rental Policy', path: '/about' },
    { name: 'Terms of Service', path: '/about' },
    { name: 'Privacy Policy', path: '/about' },
    { name: 'Damage Protection', path: '/about' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      {/* Brand value props banner */}
      <div className="border-b border-slate-100 bg-slate-50/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Free Delivery & Setup</h4>
              <p className="text-xs text-slate-500">Fast, hassle-free doorstep setup</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Free Relocation & Upgrades</h4>
              <p className="text-xs text-slate-500">Flexible tenures tailored for you</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Free Annual Maintenance</h4>
              <p className="text-xs text-slate-500">Mint condition guaranteed always</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-sm">
                <Armchair className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                RentEase
              </span>
            </Link>
            <p className="text-sm font-medium text-brand-700">Live better. Own less.</p>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              RentEase is a modern monthly rental platform making home furnishing
              effortless, flexible, and affordable for urban lifestyles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Rental Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {rentalCategories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Support & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} RentEase Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with precision for modern living</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
