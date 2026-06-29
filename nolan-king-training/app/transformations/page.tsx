import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const clients = [
  {
    name: "Paul R.",
    program: "12-Week Program",
    result: "Leanest & strongest of his life",
    goal: "Fat Loss + Muscle Retention",
    quote:
      "Nolan has consistently monitored my progress throughout the entire 12-week program I purchased. My goal over the 12-week period was to get as lean as possible while maintaining my muscle mass. I have never been so strong and lean in my entire life. My body has been transforming every week and I'm on a straight and narrow path to reaching my goal. Nolan always responds right away to his emails and text messages to make sure I am staying on top of the program, whereas coaches in the past would not get back to me for several days. He has a vast amount of knowledge in nutrition and training. I plan to continue working with Nolan for years to come and I couldn't recommend him more highly!",
    image: "/images/client-paul.jpg",
  },
  {
    name: "Caroline S.",
    program: "Online Coaching",
    result: "Bikini-competition ready",
    goal: "Body Recomposition",
    quote:
      "Nolan is amazing! He is always available to answer my questions, and he is always a step ahead by sending me my new customized program to review before the week begins. I know he genuinely cares about my success! It's definitely a plus that he understands the struggle of balancing work and maintaining top fitness levels as he has experienced the same difficulties with so many clients over the years. Awesome Coach!",
    image: "/images/client-caroline.jpg",
  },
  {
    name: "Robert M.",
    program: "Online Coaching",
    result: "Mind & body transformed",
    goal: "Full Mind-Body Transformation",
    quote:
      "Nolan really knows his stuff! He is also deeply philosophical, articulate, and eager to pulverize the psychological barriers that stand in the way of progress. Both my mind and my body are in better shape, thanks to Nolan. Training with this Champion may be the best decision I've ever made.",
    image: "/images/client-robert.jpg",
  },
  {
    name: "Jordan W.",
    program: "Online Coaching",
    result: "Full recovery + new PRs",
    goal: "Post-Surgery Rehab + Strength",
    quote:
      "I recovered from shoulder surgery and noted improved fitness 8 months post-op with consistent support from Nolan. He understood my limitations and built around them completely. I'm now stronger than I was before the injury.",
    image: "/images/client-jordan.jpg",
  },
  {
    name: "Narsing B.",
    program: "Online Coaching",
    result: "Form improvement + weight loss",
    goal: "Fat Loss + Technique",
    quote:
      "Three months of training with Nolan. He emphasized proper form instruction and the nutrition plan benefits have been clear from week one. I lost weight while building strength I didn't know I had.",
    image: "/images/client-narsing.jpg",
  },
  {
    name: "Hammad R.",
    program: "Online Coaching",
    result: "Consistent gains + diet on point",
    goal: "Muscle Building + Nutrition",
    quote:
      "Appreciated the training style, motivation, and comprehensive diet and supplement monitoring. Nolan stays on top of everything so you don't have to guess. You just execute the plan and watch it work.",
    image: "/images/client-hammad.jpg",
  },
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
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Real clients. Real programs. No filters. This is what happens when
            the right plan meets real commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="font-display font-bold text-4xl text-gold">718</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                5-Star Reviews
              </p>
            </div>
            <div className="w-px bg-zinc-800" />
            <div className="text-center">
              <p className="font-display font-bold text-4xl text-gold">4.9★</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                Thumbtack Rating
              </p>
            </div>
            <div className="w-px bg-zinc-800" />
            <div className="text-center">
              <p className="font-display font-bold text-4xl text-gold">1,343</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                Clients Coached
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clients.map((t) => (
              <div
                key={t.name}
                className="group bg-zinc-900 border border-zinc-800 hover:border-gold/30 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`${t.name} transformation`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>

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
                  <blockquote className="text-zinc-500 text-xs leading-relaxed italic border-l-2 border-gold/30 pl-3">
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
        </div>
      </section>
    </>
  );
}
