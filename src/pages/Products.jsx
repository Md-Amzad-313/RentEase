import React from 'react';
import { Package } from 'lucide-react';
import PlaceholderPage from '../components/common/PlaceholderPage';

export default function Products() {
  return (
    <PlaceholderPage
      icon={Package}
      title="Products Catalog"
      description="This page will contain the RentEase product catalog featuring furniture, appliances, and package deals. Coming soon in Part 2."
      badge="Product Catalog"
    />
  );
}
