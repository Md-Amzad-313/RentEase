import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import PlaceholderPage from '../components/common/PlaceholderPage';

export default function Dashboard() {
  return (
    <PlaceholderPage
      icon={LayoutDashboard}
      title="User Dashboard"
      description="Manage your active subscriptions, monthly payments, scheduled maintenance requests, and free relocation benefits. Dashboard functionality coming soon."
      badge="Customer Portal"
    />
  );
}
