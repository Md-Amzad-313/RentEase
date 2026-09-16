import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home as HomeIcon,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RefreshCw,
  ShieldCheck,
  Armchair,
  Check,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

/**
 * Register Page Component (Part 3.16)
 * Complete frontend-only account registration screen with field validation.
 */
export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms of Service and Privacy Policy.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler (frontend-only demo)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    });
    setErrors({});
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1"
              >
                <HomeIcon className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-slate-900 px-1" aria-current="page">
              Register
            </li>
          </ol>
        </nav>

        {/* Main Authentication Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Brand & Benefits Accent (Desktop) */}
            <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 sm:p-10 flex-col justify-between text-white relative">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-sm">
                    <Armchair className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold tracking-tight">RentEase</span>
                </div>

                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">
                  JOIN RENTEASE
                </span>
                <h2 className="text-2xl font-bold tracking-tight leading-snug mb-3">
                  Start your flexible rental subscription today.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Set up your living space with quality furniture and essential appliances without large upfront costs.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flexible 3, 6, and 12-month rental tenures</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free doorstep delivery & unboxing setup</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Damage cover & annual maintenance included</span>
                </div>
              </div>
            </div>

            {/* Right Column: Register Form */}
            <div className="lg:col-span-7 p-6 sm:p-10">
              <div className="mb-6">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3 py-0.5 rounded-full mb-2.5 shadow-2xs">
                  GET STARTED
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Create Your RentEase Account
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Create an account to manage your rental requests and profile.
                </p>
              </div>

              {isSubmitted ? (
                /* Demo Registration State */
                <div className="py-6 text-center flex flex-col items-center justify-center bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 shadow-2xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    Demo Account Registered
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
                    Demo registration submitted. Authentication and user accounts will be connected in a future backend phase.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleReset}
                      icon={RefreshCw}
                      iconPosition="left"
                      className="shadow-sm shadow-brand-500/20"
                    >
                      Reset Form
                    </Button>
                    <Link to="/login" className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        size="md"
                        className="w-full sm:w-auto"
                      >
                        Go to Sign In
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                /* Register Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="Alex Johnson"
                        aria-invalid={errors.fullName ? 'true' : 'false'}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        className={`w-full text-sm rounded-xl bg-white border pl-10 pr-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                            : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                        } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                      />
                    </div>
                    {errors.fullName && (
                      <p id="fullName-error" className="text-xs text-rose-600 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="alex@example.com"
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`w-full text-sm rounded-xl bg-white border pl-10 pr-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.email
                              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                              : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                          } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                        />
                      </div>
                      {errors.email && (
                        <p id="email-error" className="text-xs text-rose-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone (Optional) */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                      >
                        Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="+91 98765 43210"
                          className="w-full text-sm rounded-xl bg-white border border-slate-300 pl-10 pr-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20 transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password & Confirm Password Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Password */}
                    <div>
                      <label
                        htmlFor="password"
                        className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                      >
                        Password <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 pointer-events-none text-slate-400">
                          <Lock className="w-4 h-4" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="new-password"
                          value={formData.password}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="••••••••"
                          aria-invalid={errors.password ? 'true' : 'false'}
                          aria-describedby={errors.password ? 'password-error' : undefined}
                          className={`w-full text-sm rounded-xl bg-white border pl-10 pr-10 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.password
                              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                              : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                          } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          className="absolute right-3 text-slate-400 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded p-1 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p id="password-error" className="text-xs text-rose-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.password}</span>
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                      >
                        Confirm Password <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 pointer-events-none text-slate-400">
                          <Lock className="w-4 h-4" />
                        </div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          autoComplete="new-password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="••••••••"
                          aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                          aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                          className={`w-full text-sm rounded-xl bg-white border pl-10 pr-10 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.confirmPassword
                              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                              : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                          } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword((prev) => !prev)}
                          aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                          className="absolute right-3 text-slate-400 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded p-1 transition-colors"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p id="confirmPassword-error" className="text-xs text-rose-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.confirmPassword}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Terms & Privacy Checkbox */}
                  <div className="pt-1">
                    <div className="flex items-start gap-2">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        aria-invalid={errors.agreeTerms ? 'true' : 'false'}
                        aria-describedby={errors.agreeTerms ? 'agreeTerms-error' : undefined}
                        className="w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500 focus:ring-2 mt-0.5"
                      />
                      <label htmlFor="agreeTerms" className="text-xs text-slate-600 leading-relaxed select-none">
                        I agree to RentEase's{' '}
                        <Link to="/about" className="font-semibold text-brand-600 hover:text-brand-700">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/about" className="font-semibold text-brand-600 hover:text-brand-700">
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>
                    {errors.agreeTerms && (
                      <p id="agreeTerms-error" className="text-xs text-rose-600 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.agreeTerms}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={isSubmitting ? RefreshCw : ArrowRight}
                      iconPosition="right"
                      className={`w-full justify-center shadow-sm shadow-brand-500/20 ${
                        isSubmitting ? 'cursor-wait' : ''
                      }`}
                    >
                      {isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </div>
                </form>
              )}

              {/* Navigation to Sign In */}
              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="text-xs sm:text-sm text-slate-600">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="font-bold text-brand-600 hover:text-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

