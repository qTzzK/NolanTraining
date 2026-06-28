import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const transformations = [
  {
    name: "Paul R.",
    program: "12-Week Program",
    result: "Leanest & strongest of his life",
    goal: "Fat Loss + Muscle Retention",
    quote: "I have never been so strong and lean in my entire life.",
    image: "/images/client-paul.jpg",
  },
  {
    name: "Caroline S.",
    program: "Online Coaching",
    result: "Bikini-competition ready",
    goal: "Body Recomposition",
    quote: "He is always a step ahead sending me my new customized program.",
    image: "/images/client-caroline.jpg",
  },
  {
    name: "Robert M.",
    program: "Online Coaching",
    result: "Mind & body transformed",
    goal: "Full Mind-Body Transformation",
    quote: "Recovered from shoulder surgery with improved fitness 8 months post-op.",
    image: "/images/client-robert.jpg",
  },
  {
    name: "Jordan W.",
    program: "Online Coaching",
    result: "Full recovery + new PRs",
    goal: "Post-Surgery Rehab + Strength",
    quote: "Recovered from shoulder surgery with improved fitness 8 months post-op.",
    image: "/images/client-jordan.jpg",
  },
  {
    name: "Narsing B.",
    program: "Online Coaching",
    result: "Form improvement + weight loss",
    goal: "Fat Loss + Technique",
    quote: "Proper form instruction and a nutrition plan that actually worked.",
    image: "/images/client-narsing.jpg",
  },
  {
    name: "Hammad R.",
    program: "Online Coaching",
    result: "Consistent gains + diet on point",
    goal: "Muscle Building + Nutrition",
    quote: "Appreciated the training style, motivation, and supplement monitoring.",
    image: "/images/client-hammad.jpg",
  },
];

const goals = [
  { label: "All", value: "all" },
  { label: "Fat Loss", value: "fat-loss" },
  { label: "Muscle Building", value: "muscle" },
  { label: "Recomposition", value: "recomp" },
  { label: "Rehab", value: "rehab" },
];

export default function TransformationsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Client Results
          </p>
          <h1 className="font-display font-bold text-6xl sm:text-7xl uppercase text-white mb-5">
            Transformations
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Real clients. Real programs. No filters. This is what happens when
            the right plan meets real commitment.
          </p>
        </div>
      </section>

      {/* Transformation Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {transformations.map((t) => (
              <div
                key={t.name}
                className="group bg-zinc-900 border border-zinc-800 hover:border-gold/30 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Transformation photo */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`${t.name} transformation`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-display font-bold text-xl uppercase text-white">
                        {t.name}
                      </p>
                      <p className="text-gold text-xs uppercase tracking-widest mt-0.5">
                        {t.program}
                      </p>
                    </div>
                    <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 font-medium border border-zinc-700 text-center leading-tight">
                      {t.goal}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm font-medium mb-3">
                    {t.result}
                  </p>
                  <blockquote className="text-zinc-500 text-xs leading-relaxed italic border-l-2 border-gold/30 pl-3 mt-auto">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase text-white mb-4">
            Your Transformation
            <br />
            <span className="text-gold">Starts Here</span>
          </h2>
          <p className="text-zinc-500 text-sm mb-10 max-w-lg mx-auto">
            Every one of these clients started with the same step: booking a
            consultation and committing to a plan. You&apos;re next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-colors inline-flex items-center justify-center gap-2 group"
            >
              Book a Consultation
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/testimonials"
              className="px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all inline-flex items-center justify-center"
            >
              Read Full Testimonials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
