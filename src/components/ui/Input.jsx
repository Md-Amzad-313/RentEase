import React, { forwardRef } from 'react';

/**
 * Reusable Form Input Foundation
 * Supports label, helper text, error states, and icon slots.
 */
const Input = forwardRef(function Input(
  {
    label,
    id,
    name,
    type = 'text',
    placeholder,
    value,
    defaultValue,
    onChange,
    disabled = false,
    required = false,
    error,
    helperText,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    className = '',
    ...props
  },
  ref
) {
  const inputId = id || name || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-slate-700 tracking-wide uppercase flex items-center justify-between"
        >
          <span>{label}</span>
          {required && <span className="text-rose-500 font-normal lowercase">*required</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {LeftIcon && (
          <div className="absolute left-3.5 pointer-events-none text-slate-400">
            <LeftIcon className="w-4 h-4" />
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          className={`w-full text-sm rounded-xl bg-white border transition-all duration-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ${
            LeftIcon ? 'pl-10' : 'pl-3.5'
          } ${RightIcon ? 'pr-10' : 'pr-3.5'} py-2.5 ${
            error
              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
              : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
          } ${className}`}
          {...props}
        />

        {RightIcon && (
          <div className="absolute right-3.5 pointer-events-none text-slate-400">
            <RightIcon className="w-4 h-4" />
          </div>
        )}
      </div>

      {error ? (
        <p id={`${inputId}-error`} className="text-xs text-rose-600 font-medium mt-0.5">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${inputId}-helper`} className="text-xs text-slate-500 mt-0.5">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

export default Input;
