import React from 'react';

/**
 * Reusable Button Component
 * Supports variants: primary, secondary, outline, ghost
 * Supports sizes: sm, md, lg
 */
export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  onClick,
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-4 py-2 rounded-xl gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-sm hover:shadow-brand-500/25',
    secondary:
      'bg-brand-50 text-brand-700 hover:bg-brand-100 active:bg-brand-200 border border-brand-200/60',
    outline:
      'bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 border border-slate-300',
    ghost:
      'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200',
  };

  const selectedSize = sizeStyles[size] || sizeStyles.md;
  const selectedVariant = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${selectedSize} ${selectedVariant} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
