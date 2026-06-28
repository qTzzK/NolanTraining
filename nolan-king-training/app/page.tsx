import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";

const stats = [
  { value: "15+", label: "Years Coaching" },
  { value: "1,343", label: "Clients Hired" },
  { value: "4.9★", label: "Thumbtack Rating" },
  { value: "718", label: "5-Star Reviews" },
];

const features = [
  {
    icon: "🎯",
    title: "Fully Customized",
    description:
      "Every program is built from the ground up around your body, your schedule, and your exact goals. Nothing is recycled.",
  },
  {
    icon: "📲",
    title: "24/7 Direct Support",
    description:
      "Text or email Nolan directly. He responds fast — not days later. You'll never feel lost or on your own.",
  },
  {
    icon: "🥗",
    title: "Nutrition + Supplements",
    description:
      "Complete diet plans for fat loss or muscle gain, plus a full supplement breakdown built around your lifestyle.",
  },
  {
    icon: "🏆",
    title: "Multi-Sport Background",
    description:
      "Football, sprinting, basketball, BJJ — Nolan brings real athletic experience to every program he builds.",
  },
];

const testimonials = [
  {
    quote:
      "Nolan has consistently monitored my progress throughout the entire 12-week program I purchased. My goal over the 12-week period was to get as lean as possible while maintaining my muscle mass. I have never been so strong and lean in my entire life. My body has been transforming every week and I'm on a straight and narrow path to reaching my goal. Nolan always responds right away to his emails and text messages to make sure I am staying on top of the program, whereas coaches in the past would not get back to me for several days. He has a vast amount of knowledge in nutrition and training. I plan to continue working with Nolan for years to come and I couldn't recommend him more highly!",
    name: "Paul R.",
    program: "12-Week Program",
    goal: "Fat Loss + Muscle Retention",
    image: "/images/client-paul.jpg",
  },
  {
    quote:
      "Nolan is amazing! He is always available to answer my questions, and he is always a step ahead by sending me my new customized program to review before the week begins. I know he genuinely cares about my success! It's definitely a plus that he understands the struggle of balancing work and maintaining top fitness levels as he has experienced the same difficulties with so many clients over the years. Awesome Coach!",
    name: "Caroline S.",
    program: "Online Coaching",
    goal: "Body Recomposition",
    image: "/images/client-caroline.jpg",
  },
  {
    quote:
      "Nolan really knows his stuff! He is also deeply philosophical, articulate, and eager to pulverize the psychological barriers that stand in the way of progress. Both my mind and my body are in better shape, thanks to Nolan. Training with this Champion may be the best decision I've ever made.",
    name: "Robert M.",
    program: "Online Coaching",
    goal: "Mind + Body Transformation",
    image: "/images/client-robert.jpg",
  },
];

const included = [
  "Fully customized workout program",
  "Personalized nutrition plan",
  "Supplement regimen",
  "Video references for every exercise",
  "Unlimited text & email support",
  "Weekly program updates",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Nolan King Training"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/90 via-zinc-950/70 to-[#1a0f00]/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.35em] mb-6 opacity-0 animate-fade-in">
            Elite Online Coaching · Available Worldwide
          </p>
          <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] uppercase leading-none text-white mb-6 opacity-0 animate-fade-up">
            Train Like
            <br />
            <span className="text-gold">A Champion</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up delay-200">
            Personalized programs, expert nutrition, and direct access to Nolan
            24/7. No templates. Just a plan built for you — and results that
            prove it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-300">
            <Link
              href="/services"
              className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-all duration-200 inline-flex items-center justify-center gap-2 group"
            >
              View Programs
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/transformations"
              className="px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all duration-200 inline-flex items-center justify-center"
            >
              See Results
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-14 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display font-bold text-5xl text-gold">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              The Approach
            </p>
            <h2 className="font-display font-bold text-5xl sm:text-6xl uppercase text-white">
              Built Different
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-7 bg-zinc-900 border border-zinc-800 hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="font-display font-bold text-xl uppercase text-white mb-3 group-hover:text-gold transition-colors">
                  {f.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
                Every Program Includes
              </p>
              <h2 className="font-display font-bold text-5xl uppercase text-white mb-8">
                Everything
                <br />
                You Need
              </h2>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-bold text-sm uppercase tracking-widest hover:bg-gold-light transition-colors group"
              >
                See All Programs
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Custom Workouts", val: "Every Week" },
                { label: "Nutrition Plan", val: "Tailored to You" },
                { label: "Response Time", val: "Same Day" },
                { label: "Templates Used", val: "Zero" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 bg-zinc-800 border border-zinc-700"
                >
                  <p className="font-display font-bold text-2xl text-gold mb-1">
                    {item.val}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Transformations Preview ── */}
      <section className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Real Results
            </p>
            <h2 className="font-display font-bold text-5xl sm:text-6xl uppercase text-white mb-4">
              The Proof
            </h2>
            <p className="text-zinc-500 text-sm max-w-lg mx-auto">
              Real clients, real programs, real results. No filters — just what
              happens when you commit to a plan that&apos;s actually built for
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {[
              {
                name: "Paul R.",
                program: "12-Week Program",
                result: "Leanest & strongest of his life",
                src: "/images/client-paul.jpg",
              },
              {
                name: "Caroline S.",
                program: "Online Coaching",
                result: "Bikini-competition ready physique",
                src: "/images/client-caroline.jpg",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="relative aspect-square overflow-hidden group border border-zinc-800 hover:border-gold/30 transition-all duration-300"
              >
                <Image
                  src={t.src}
                  alt={`${t.name} transformation`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display font-bold text-2xl uppercase text-white">
                    {t.name}
                  </p>
                  <p className="text-gold text-xs uppercase tracking-widest mt-0.5">
                    {t.program}
                  </p>
                  <p className="text-zinc-400 text-sm mt-1">{t.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/transformations"
              className="inline-flex items-center gap-2 text-gold font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all group"
            >
              View All Transformations{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Success Stories
            </p>
            <h2 className="font-display font-bold text-5xl sm:text-6xl uppercase text-white">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                program={t.program}
                goal={t.goal}
                quote={t.quote}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-gold font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all group"
            >
              Read All Success Stories{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-28 bg-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-black/60 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Start Your Transformation
          </p>
          <h2 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl uppercase text-black mb-6">
            Ready When You Are
          </h2>
          <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">
            Book a 30-minute consultation. Walk away with a clear plan and the
            confidence to execute it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-10 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 transition-colors inline-flex items-center justify-center gap-2 group"
            >
              Book Your Consultation
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border-2 border-black text-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors inline-flex items-center justify-center"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
