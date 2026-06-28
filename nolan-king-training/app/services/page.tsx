import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Basic Training Plan",
    duration: "One-Time",
    price: "Contact for pricing",
    priceNote: "",
    description:
      "A customized standalone workout program — no ongoing coaching. Great if you're self-driven and just need the right plan.",
    features: [
      "Custom workout program",
      "Exercise video references",
      "Designed around your schedule",
      "Delivered digitally",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "4-Week Program",
    duration: "4 Weeks",
    price: "Contact for pricing",
    priceNote: "",
    description:
      "A focused 4-week block with full coaching support. Build momentum, establish habits, and see early results.",
    features: [
      "Customized workout program",
      "Personalized diet plan",
      "Supplement regimen",
      "24/7 text & email support",
      "Weekly check-ins",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "8-Week Program",
    duration: "8 Weeks",
    price: "Contact for pricing",
    priceNote: "",
    description:
      "Two months of serious work with consistent updates and full access to Nolan. See real, measurable change.",
    features: [
      "Customized workout program",
      "Personalized diet plan",
      "Supplement regimen",
      "24/7 text & email support",
      "Bi-weekly program updates",
      "Progress tracking",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "12-Week Program",
    duration: "12 Weeks",
    price: "Contact for pricing",
    priceNote: "",
    description:
      "The most popular option. Three months is where transformations happen. This is the program Paul and Caroline used.",
    features: [
      "Customized workout program",
      "Personalized diet plan",
      "Supplement regimen",
      "24/7 text & email support",
      "Weekly program updates",
      "Full progress tracking",
      "Nutrition macro breakdown",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "1-Year Unlimited",
    duration: "12 Months",
    price: "Contact for pricing",
    priceNote: "",
    description:
      "The full commitment. Unlimited coaching, continuous program evolution, and a coach who knows your body inside and out.",
    features: [
      "Everything in 12-Week Program",
      "Unlimited program revisions",
      "Ongoing nutrition adjustments",
      "Priority response time",
      "Monthly strategy calls",
      "Long-term programming",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Nutrition Coaching",
    duration: "Ongoing",
    price: "Contact for pricing",
    priceNote: "",
    description:
      "Standalone nutrition coaching for those who have training covered but need their diet dialed in.",
    features: [
      "Custom meal plan",
      "Macro breakdown",
      "Supplement recommendations",
      "Flexible eating strategies",
      "Ongoing adjustments",
    ],
    cta: "Get Started",
    highlight: false,
  },
];

const consultation = {
  name: "Phone or Video Consultation",
  duration: "30 Minutes",
  price: "$135",
  description:
    "Not ready to commit to a full program? Book a one-on-one call with Nolan to discuss your goals, ask questions, and get expert guidance.",
  features: [
    "30-minute 1-on-1 session",
    "Phone or video — your choice",
    "Goal assessment",
    "Program recommendation",
    "Nutrition overview",
    "No upsell pressure",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Programs & Pricing
          </p>
          <h1 className="font-display font-bold text-6xl sm:text-7xl uppercase text-white mb-5">
            Find Your Program
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every program is built from scratch around you — your schedule, your
            goals, your body. No two plans look alike.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-zinc-900 border-gold shadow-[0_0_40px_rgba(201,168,76,0.1)]"
                    : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-black text-xs font-bold uppercase tracking-widest px-4 py-1">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">
                    {plan.duration}
                  </p>
                  <h2 className="font-display font-bold text-2xl uppercase text-white mb-3">
                    {plan.name}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={15}
                        className="text-gold flex-shrink-0 mt-0.5"
                      />
                      <span className="text-zinc-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-xs uppercase tracking-widest transition-all group ${
                    plan.highlight
                      ? "bg-gold text-black hover:bg-gold-light"
                      : "border border-zinc-700 text-white hover:border-gold hover:text-gold"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Not Sure Where to Start?
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase text-white">
              Book a Consultation
            </h2>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-baseline gap-3 mb-4">
                  <p className="font-display font-bold text-5xl text-gold">
                    {consultation.price}
                  </p>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest">
                    / {consultation.duration}
                  </p>
                </div>
                <h3 className="font-display font-bold text-2xl uppercase text-white mb-3">
                  {consultation.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {consultation.description}
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-8">
                  {consultation.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={15}
                        className="text-gold flex-shrink-0 mt-0.5"
                      />
                      <span className="text-zinc-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-bold text-sm uppercase tracking-widest hover:bg-gold-light transition-colors group"
                >
                  Book Now
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl uppercase text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            Check the FAQ for answers to common questions about how the programs
            work, what to expect, and how to get started.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-gold font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all group"
          >
            View FAQ{" "}
            <ArrowRight
              size={13}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
