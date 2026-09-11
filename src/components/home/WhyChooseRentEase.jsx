import {
  CalendarRange,
  BadgeIndianRupee,
  Truck,
  MoveHorizontal,
} from "lucide-react";

export default function WhyChooseRentEase() {
  const benefits = [
    {
      icon: CalendarRange,
      title: "Flexible Monthly Plans",
      description:
        "Choose rental periods that suit your lifestyle with flexible monthly options.",
    },
    {
      icon: BadgeIndianRupee,
      title: "Affordable Upfront Cost",
      description:
        "Get the essentials you need without the high cost of buying everything upfront.",
    },
    {
      icon: Truck,
      title: "Doorstep Delivery",
      description:
        "Get your furniture and appliances delivered conveniently to your doorstep.",
    },
    {
      icon: MoveHorizontal,
      title: "Easy Relocation",
      description:
        "Move with less hassle with convenient pickup and return options.",
    },
  ];

  return (
    <section id="why-choose" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
            WHY RENTEASE
          </span>

          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Everything you need. More flexibility.
          </h2>

          <p className="text-base text-slate-600 sm:text-lg">
            Rent the essentials you need without the upfront cost, long-term
            commitment, or hassle of moving bulky items.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-7 w-7 text-brand-600" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
