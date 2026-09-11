import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Compass } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

/**
 * Reusable PlaceholderPage Component
 * Used across routes pending full implementation in future phases.
 */
export default function PlaceholderPage({
  title,
  description,
  badge = 'Coming Soon in Part 2',
  icon: Icon = Sparkles,
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="max-w-xl w-full text-center border border-slate-200/90 shadow-subtle p-8 sm:p-10">
        <div className="flex flex-col items-center">
          {/* Subtle icon container */}
          <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-6 shadow-sm">
            <Icon className="w-7 h-7" />
          </div>

          <Badge variant="primary" size="md" className="mb-4">
            {badge}
          </Badge>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            {title}
          </h1>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="primary" icon={ArrowLeft} iconPosition="left" className="w-full sm:w-auto">
                Back to Home
              </Button>
            </Link>

            <Link to="/products" className="w-full sm:w-auto">
              <Button variant="outline" icon={Compass} iconPosition="left" className="w-full sm:w-auto">
                Explore Catalog
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
