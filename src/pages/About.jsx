import React from 'react';
import { Info } from 'lucide-react';
import PlaceholderPage from '../components/common/PlaceholderPage';

export default function About() {
  return (
    <PlaceholderPage
      icon={Info}
      title="About RentEase"
      description="Learn about our mission to make modern urban living affordable, flexible, and sustainable through subscription-based renting. Detailed story coming in future phases."
      badge="Our Story"
    />
  );
}
