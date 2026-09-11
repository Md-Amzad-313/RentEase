import React from 'react';

/**
 * Reusable Card Component
 * Supports interactive hover effects, clean borders, and compound sub-components.
 */
export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'default',
  as: Component = 'div',
  ...props
}) {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-brand-200'
    : 'shadow-sm';

  return (
    <Component
      className={`bg-white rounded-2xl border border-slate-200/80 overflow-hidden ${hoverStyles} ${paddingStyles[padding] || paddingStyles.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={`mb-4 flex flex-col gap-1.5 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '', as: Component = 'h3' }) {
  return (
    <Component className={`text-lg font-semibold text-slate-900 leading-snug ${className}`}>
      {children}
    </Component>
  );
}

export function CardDescription({ children, className = '' }) {
  return <p className={`text-sm text-slate-500 leading-relaxed ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }) {
  return <div className={`text-slate-600 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-6 pt-4 border-t border-slate-100 flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}
