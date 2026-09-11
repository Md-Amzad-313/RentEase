import React from 'react';
import { ShieldAlert } from 'lucide-react';
import PlaceholderPage from '../components/common/PlaceholderPage';

export default function Admin() {
  return (
    <PlaceholderPage
      icon={ShieldAlert}
      title="Admin Portal"
      description="Manage inventory, customer verification, orders, deliveries, and rental asset analytics. Admin control panel will be developed in later phases."
      badge="Administration"
    />
  );
}
