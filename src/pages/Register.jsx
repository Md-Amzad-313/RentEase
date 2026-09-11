import React from 'react';
import { UserPlus } from 'lucide-react';
import PlaceholderPage from '../components/common/PlaceholderPage';

export default function Register() {
  return (
    <PlaceholderPage
      icon={UserPlus}
      title="Create an Account"
      description="Join RentEase to start renting furniture and appliances with instant KYC verification. Registration flow will be built in a subsequent phase."
      badge="Join RentEase"
    />
  );
}
