import React from 'react';
import { FileQuestion } from 'lucide-react';
import PlaceholderPage from '../components/common/PlaceholderPage';

export default function NotFound() {
  return (
    <PlaceholderPage
      icon={FileQuestion}
      title="Page Not Found"
      description="The page you are looking for does not exist or has been moved. Use the navigation buttons below to return to RentEase."
      badge="404 Error"
    />
  );
}
