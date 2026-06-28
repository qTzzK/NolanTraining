"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I know which program is right for me?",
        a: "Book a consultation first. Nolan will assess your current fitness level, goals, and schedule, and recommend the program that actually fits — not the most expensive one. If you'd rather self-select, the 12-week program is the most popular starting point for serious transformation.",
      },
      {
        q: "Do I need access to a gym?",
        a: "It depends on your goals. Nolan can build programs for full gym access, home gym setups, or minimal equipment. Tell him what you have during the consultation and the program will be built around it.",
      },
      {
        q: "I'm a complete beginner. Is this right for me?",
        a: "Absolutely. Nolan has coached clients at every level — from beginners who've never touched a barbell to experienced athletes looking to break plateaus. The program will be calibrated to your starting point.",
      },
      {
        q: "Can I do this program if I have an injury or physical limitation?",
        a: "Yes. Jordan W. trained with Nolan 8 months after shoulder surgery. Nicole B. had ongoing injury management built into her program. Nolan will always work around your body's current state.",
      },
    ],
  },
  {
    category: "The Programs",
    questions: [
      {
        q: "What does a typical week look like?",
        a: "You'll receive a complete workout plan with exercise selection, sets, reps, and rest periods — plus video references for every movement. Your nutrition targets and any supplement timing will also be outlined. Nolan sends updates before each new training week.",
      },
      {
        q: "How are the programs delivered?",
        a: "Digitally — via email or a shared document. Everything is clearly formatted and easy to follow. You'll also have Nolan's direct contact for any questions as you go.",
      },
      {
        q: "What if I miss a session or fall off the plan?",
        a: "Life happens. Text Nolan and he'll adjust. Programs are designed with real life in mind — not an idealized schedule that collapses the moment something comes up.",
      },
      {
        q: "Can the program be adjusted if something isn't working?",
        a: "Always. Nolan monitors your progress and updates the program accordingly. If an exercise doesn't suit you, it gets replaced. If your schedule changes, the plan changes with it.",
      },
    ],
  },
  {
    category: "Nutrition & Supplements",
    questions: [
      {
        q: "Does nutrition coaching come with all programs?",
        a: "Yes. Every coaching program includes a personalized diet plan aligned with your goal — whether that's fat loss, muscle gain, or body recomposition. Standalone nutrition coaching is also available if you already have your training handled.",
      },
      {
        q: "Do I have to follow a strict diet?",
        a: "Nolan designs plans that work with your lifestyle, not against it. He understands the struggle of balancing work, social life, and nutrition. The approach is structured but flexible.",
      },
      {
        q: "Will I need to buy supplements?",
        a: "Nolan provides a full supplement recommendation, but supplements are never required. The diet and training plan are designed to produce results with or without them.",
      },
    ],
  },
  {
    category: "Communication & Support",
    questions: [
      {
        q: "How quickly does Nolan respond?",
        a: "Fast. Clients consistently note that Nolan responds the same day — often immediately. You won't be waiting days for an answer while stuck on a movement or a nutrition question.",
      },
      {
        q: "Can I contact Nolan during a workout?",
        a: "Yes. Text or email is fine anytime. If you're in the middle of a session and have a form question, send a message.",
      },
      {
        q: "Is there a check-in process?",
        a: "Yes. The cadence depends on your program — weekly or bi-weekly. Nolan will monitor your progress and adjust the program proactively. You won't need to chase him for updates.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-zinc-800 bg-zinc-900">
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-white text-sm pr-6">{q}</span>
        {open ? (
          <Minus size={16} className="text-gold flex-shrink-0" />
        ) : (
          <Plus size={16} className="text-zinc-500 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Frequently Asked Questions
          </p>
          <h1 className="font-display font-bold text-6xl sm:text-7xl uppercase text-white mb-5">
            Got Questions?
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about programs, nutrition, communication,
            and getting started.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {faqs.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest">
                    {section.category}
                  </p>
                  <div className="flex-1 h-px bg-zinc-800" />
                </div>
                <div className="space-y-2">
                  {section.questions.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl uppercase text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-zinc-500 text-sm mb-10 max-w-lg mx-auto">
            The fastest way to get answers is to book a consultation. Nolan will
            address every question you have and you&apos;ll walk away with
            clarity — regardless of whether you sign up.
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
            <a
              href="https://www.instagram.com/king.nolan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all inline-flex items-center justify-center"
            >
              DM on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
