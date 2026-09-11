import React from 'react';
import { LogIn } from 'lucide-react';
import PlaceholderPage from '../components/common/PlaceholderPage';

export default function Login() {
  return (
    <PlaceholderPage
      icon={LogIn}
      title="Customer Sign In"
      description="Access your RentEase account, track ongoing rentals, and manage payments. Authentication will be implemented in a subsequent phase."
      badge="Authentication"
    />
  );
}
