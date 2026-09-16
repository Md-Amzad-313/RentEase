import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home as HomeIcon,
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  User,
  RefreshCw,
  AlertCircle,
  Headphones,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

/**
 * FAQ Quick Help Accordion Data
 */
const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How do I rent a product on RentEase?',
    answer:
      'Browse our furniture and appliance collection, choose your desired item and rental tenure (3, 6, or 12 months), and submit your rental request through our streamlined online checkout.',
  },
  {
    id: 'faq-2',
    question: 'Can I choose and extend my rental duration?',
    answer:
      'Yes! RentEase offers flexible plans starting at 3 months. You can easily extend, upgrade, or return your items when your tenure concludes through your User Dashboard.',
  },
  {
    id: 'faq-3',
    question: 'Is a security deposit required for rentals?',
    answer:
      'Yes, a nominal, refundable security deposit is collected with the first month’s rental. It is safely held in escrow and promptly refunded upon item return and condition check.',
  },
  {
    id: 'faq-4',
    question: 'How can I track my rental request and active plans?',
    answer:
      'You can review real-time request statuses, monthly billing dates, and active items directly inside the RentEase User Dashboard under the "My Rentals" tab.',
  },
  {
    id: 'faq-5',
    question: 'How do I request maintenance or service support?',
    answer:
      'Routine maintenance and damage cover are included with all active plans. You can submit a service ticket from your User Dashboard or send us a message right here.',
  },
];

/**
 * Subject Selection Options
 */
const SUBJECT_OPTIONS = [
  'Rental Inquiry & Availability',
  'Order & Delivery Status',
  'Plan Modification / Tenure Extension',
  'Maintenance & Service Request',
  'Billing & Security Deposit',
  'General Question or Feedback',
];

/**
 * Contact Page Component (Part 3.15)
 */
export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ Accordion State (open index)
  const [openFaq, setOpenFaq] = useState(0);

  // Field Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validation Logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate short submission state without external API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
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
              Contact Us
            </li>
          </ol>
        </nav>

        {/* 1. CONTACT HERO SECTION */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5 shadow-2xs">
            CONTACT RENTEASE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Let's Make Renting Easier
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a question about our rentals, plans or support? We're here to help.
          </p>
        </header>

        {/* 2 & 3. MAIN CONTENT: CONTACT INFO + FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100 shadow-2xs">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Customer Support</h2>
                  <p className="text-xs text-slate-500">Dedicated rental assistance</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Get help with rental requests, product availability, subscription tenures, delivery
                schedules, and user account management.
              </p>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                {/* Email Info */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      Support email available soon
                    </span>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Phone Support
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      Phone support available soon
                    </span>
                  </div>
                </div>

                {/* Hours Info */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Support Hours
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      Monday – Saturday: 9:00 AM – 6:00 PM
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      (Project UI availability)
                    </span>
                  </div>
                </div>

                {/* Logistics Info */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Service Network
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      Doorstep Delivery & Support Hub
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance Banner */}
            <div className="bg-brand-50/70 rounded-2xl p-5 border border-brand-200/80 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900">
                  Quick Digital Support
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Submit a message and our team will get back to you promptly.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out the form below with your inquiry details.
                </p>
              </div>

              {isSubmitted ? (
                /* Success State */
                <div className="py-10 text-center flex flex-col items-center justify-center bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thanks for reaching out! Your message has been received. Our team will review your
                    inquiry and follow up with you.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleReset}
                    icon={RefreshCw}
                    iconPosition="left"
                    className="shadow-sm shadow-brand-500/20"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="e.g. Alex Johnson"
                          aria-invalid={errors.fullName ? 'true' : 'false'}
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                          className={`w-full text-sm rounded-xl bg-white border py-2.5 px-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
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

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="alex@example.com"
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`w-full text-sm rounded-xl bg-white border py-2.5 px-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number (Optional) */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                      >
                        Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="+91 98765 43210"
                        className="w-full text-sm rounded-xl bg-white border border-slate-300 py-2.5 px-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-brand-500 focus:ring-brand-500/20 transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
                      />
                    </div>

                    {/* Subject Select */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                      >
                        Subject <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        aria-invalid={errors.subject ? 'true' : 'false'}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        className={`w-full text-sm rounded-xl bg-white border py-2.5 px-3.5 text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.subject
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                            : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                        } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                      >
                        <option value="">Select a subject...</option>
                        {SUBJECT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p id="subject-error" className="text-xs text-rose-600 font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-1.5"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="How can we help you with your furniture or appliance rental?"
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full text-sm rounded-xl bg-white border p-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                      } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-rose-600 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
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
                      icon={isSubmitting ? RefreshCw : Send}
                      iconPosition="right"
                      className={`w-full sm:w-auto shadow-sm shadow-brand-500/20 ${
                        isSubmitting ? 'cursor-wait' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 5. FAQ / QUICK HELP SECTION */}
        <section
          aria-labelledby="faq-heading"
          className="mb-16 sm:mb-20 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-100/80 px-3.5 py-1 rounded-full mb-3.5">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              Quick Help
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Common answers about ordering, duration plans, deposits, and support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-50/60 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-brand-50 text-brand-600 border-brand-200' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      className="p-5 pt-3 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. FINAL CTA SECTION */}
        <section
          aria-labelledby="contact-cta-heading"
          className="rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-10 lg:px-16 text-white shadow-xl relative overflow-hidden"
        >
          {/* Decorative ambient background accents */}
          <div
            className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">
              FLEXIBLE LIVING STARTS HERE
            </span>
            <h2
              id="contact-cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4"
            >
              Looking for something to rent?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Explore our furniture and appliance collection and find a rental option that fits your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/products" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto justify-center shadow-lg shadow-brand-500/20"
                >
                  Browse Rentals
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto justify-center bg-slate-800/80 hover:bg-slate-800 text-white border-slate-700"
                >
                  Learn About RentEase
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

