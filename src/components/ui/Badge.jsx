import React from 'react';

/**
 * Reusable Badge Component
 * Used for status indicators, categories, and tags.
 */
export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full gap-1 font-medium',
    md: 'text-xs px-3 py-1 rounded-full gap-1.5 font-medium',
    lg: 'text-sm px-3.5 py-1.5 rounded-full gap-2 font-medium',
  };

  const variantStyles = {
    primary: 'bg-brand-50 text-brand-700 border border-brand-200/80',
    secondary: 'bg-slate-100 text-slate-700 border border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200',
    error: 'bg-rose-50 text-rose-700 border border-rose-200',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
  };

  return (
    <span
      className={`inline-flex items-center justify-center select-none ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
