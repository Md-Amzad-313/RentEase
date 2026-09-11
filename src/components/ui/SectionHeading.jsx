import React from 'react';
import Badge from './Badge';

/**
 * Reusable SectionHeading Component
 * Provides clean typography hierarchy for section headers and titles.
 */
export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = 'left',
  className = '',
}) {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col gap-2.5 max-w-3xl ${alignStyles[align] || alignStyles.left} ${className}`}>
      {badge && (
        <div>
          {typeof badge === 'string' ? (
            <Badge variant="primary" size="sm">
              {badge}
            </Badge>
          ) : (
            badge
          )}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
