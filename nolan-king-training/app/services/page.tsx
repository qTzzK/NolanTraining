import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import { supabase } from "@/lib/supabase";
import type { Plan } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const { data: allPlans } = await supabase
    .from("plans")
    .select("*")
    .order("sort_order", { ascending: true });

  const plans: Plan[] = (allPlans ?? []).filter((p: Plan) => p.type === "program");
  const consultationRow: Plan | undefined = (allPlans ?? []).find((p: Plan) => p.type === "consultation");

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
                key={plan.id}
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
                  <h2 className="font-display font-bold text-2xl uppercase text-white mb-1">
                    {plan.name}
                  </h2>
                  <p className="font-display font-bold text-3xl text-gold mb-3">
                    {plan.price}
                  </p>
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

                <CheckoutButton
                  programName={plan.name}
                  priceInCents={plan.price_in_cents}
                  highlight={plan.highlight}
                  label={plan.cta}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
      {consultationRow && (
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
                      {consultationRow.price}
                    </p>
                    <p className="text-zinc-500 text-sm uppercase tracking-widest">
                      / {consultationRow.duration}
                    </p>
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase text-white mb-3">
                    {consultationRow.name}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {consultationRow.description}
                  </p>
                </div>
                <div>
                  <ul className="space-y-3 mb-8">
                    {consultationRow.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle
                          size={15}
                          className="text-gold flex-shrink-0 mt-0.5"
                        />
                        <span className="text-zinc-300 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <CheckoutButton
                    programName={consultationRow.name}
                    priceInCents={consultationRow.price_in_cents}
                    highlight={true}
                    label="Book Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
