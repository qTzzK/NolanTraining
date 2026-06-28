import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    name: "Paul R.",
    program: "12-Week Program",
    goal: "Fat Loss + Muscle Retention",
    quote:
      "Nolan has consistently monitored my progress throughout the entire 12-week program I purchased. My goal over the 12-week period was to get as lean as possible while maintaining my muscle mass. I have never been so strong and lean in my entire life. My body has been transforming every week and I'm on a straight and narrow path to reaching my goal. Nolan always responds right away to his emails and text messages to make sure I am staying on top of the program, whereas coaches in the past would not get back to me for several days. He has a vast amount of knowledge in nutrition and training. I plan to continue working with Nolan for years to come and I couldn't recommend him more highly!",
    highlight: true,
    image: "/images/client-paul.jpg",
  },
  {
    name: "Caroline S.",
    program: "Online Coaching",
    goal: "Body Recomposition",
    quote:
      "Nolan is amazing! He is always available to answer my questions, and he is always a step ahead by sending me my new customized program to review before the week begins. I know he genuinely cares about my success! It's definitely a plus that he understands the struggle of balancing work and maintaining top fitness levels as he has experienced the same difficulties with so many clients over the years. Awesome Coach!",
    highlight: true,
    image: "/images/client-caroline.jpg",
  },
  {
    name: "Robert M.",
    program: "Online Coaching",
    goal: "Mind + Body Transformation",
    quote:
      "Nolan really knows his stuff! He is also deeply philosophical, articulate, and eager to pulverize the psychological barriers that stand in the way of progress. Both my mind and my body are in better shape, thanks to Nolan. Training with this Champion may be the best decision I've ever made.",
    highlight: false,
    image: "/images/client-robert.jpg",
  },
  {
    name: "Jordan W.",
    program: "Online Coaching",
    goal: "Post-Surgery Rehab + Strength",
    quote:
      "I recovered from shoulder surgery and noted improved fitness 8 months post-op with consistent support from Nolan. He understood my limitations and built around them completely. I'm now stronger than I was before the injury.",
    highlight: false,
    image: "/images/client-jordan.jpg",
  },
  {
    name: "Narsing B.",
    program: "Online Coaching",
    goal: "Fat Loss + Form",
    quote:
      "Three months of training with Nolan. He emphasized proper form instruction and the nutrition plan benefits have been clear from week one. I lost weight while building strength I didn't know I had.",
    highlight: false,
    image: "/images/client-narsing.jpg",
  },
  {
    name: "Hammad R.",
    program: "Online Coaching",
    goal: "Muscle Building + Nutrition",
    quote:
      "Appreciated the training style, motivation, and comprehensive diet and supplement monitoring. Nolan stays on top of everything so you don't have to guess. You just execute the plan and watch it work.",
    highlight: false,
    image: "/images/client-hammad.jpg",
  },
  {
    name: "Nicole B.",
    program: "Online Coaching",
    goal: "Overall Fitness + Injury Management",
    quote:
      "Six months of training with Nolan. What set him apart was his flexibility with scheduling and his expertise with injury management. He adjusted everything around what my body could handle and never missed a beat.",
    highlight: false,
    image: null,
  },
];

export default function TestimonialsPage() {
  const highlighted = testimonials.filter((t) => t.highlight);
  const rest = testimonials.filter((t) => !t.highlight);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Client Testimonials
          </p>
          <h1 className="font-display font-bold text-6xl sm:text-7xl uppercase text-white mb-5">
            Success Stories
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            718 five-star reviews on Thumbtack. A 4.9 average. 1,343 clients
            hired. Here&apos;s what people actually say.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
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
              <p className="font-display font-bold text-4xl text-gold">98%</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                Five-Star Rate
              </p>
            </div>
            <div className="w-px bg-zinc-800" />
            <div className="text-center">
              <p className="font-display font-bold text-4xl text-gold">1,343</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                Clients Hired
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {highlighted.map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                program={t.program}
                goal={t.goal}
                quote={t.quote}
                image={t.image}
                featured
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                program={t.program}
                goal={t.goal}
                quote={t.quote}
                image={t.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase text-white mb-4">
            Add Your Story
          </h2>
          <p className="text-zinc-500 text-sm mb-10 max-w-lg mx-auto">
            The only way to know if this is right for you is to start. Book a
            consultation and find out exactly what your transformation looks
            like.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-colors group"
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
