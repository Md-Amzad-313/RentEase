import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-10 lg:px-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-400">
            READY TO GET STARTED?
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Make your space yours — without the long-term commitment.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Find the furniture and appliances you need, choose a flexible rental
            plan, and enjoy a hassle-free experience.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
            >
              Explore Rentals
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
