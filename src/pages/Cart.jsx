import React from 'react';
import { ShoppingCart } from 'lucide-react';
import PlaceholderPage from '../components/common/PlaceholderPage';

export default function Cart() {
  return (
    <PlaceholderPage
      icon={ShoppingCart}
      title="Rental Cart"
      description="View your selected furniture and appliance subscriptions, choose rental tenure, and review refundable security deposits. Cart logic coming soon in Part 2."
      badge="Cart"
    />
  );
}
