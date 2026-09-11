import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

/**
 * PublicLayout Component
 * Standard layout wrapper for public consumer pages.
 * Designed to coexist with future UserDashboardLayout and AdminDashboardLayout.
 */
export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-brand-100 selection:text-brand-900">
      {/* Sticky top navigation */}
      <Navbar />

      {/* Main page content delivered via React Router Outlet */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Global footer */}
      <Footer />
    </div>
  );
}
