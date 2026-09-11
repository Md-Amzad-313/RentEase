import React from 'react';
import { Mail } from 'lucide-react';
import PlaceholderPage from '../components/common/PlaceholderPage';

export default function Contact() {
  return (
    <PlaceholderPage
      icon={Mail}
      title="Contact & Support"
      description="Have questions about delivery, KYC, or custom plans? Our customer success team is here to assist you. Contact portal coming in future phases."
      badge="Support"
    />
  );
}
