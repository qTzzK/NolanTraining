import Link from "next/link";
import { CheckCircle, Clock, Video, Phone } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const whatToExpect = [
  "Discuss your current fitness level and training history",
  "Define your specific goals and timeline",
  "Get Nolan's honest assessment of what's achievable",
  "Learn which program is the right fit for you",
  "Get an overview of how nutrition will work for your goals",
  "Ask any questions — zero sales pressure",
];

const faqs = [
  {
    q: "Phone or video — does it matter?",
    a: "Nolan is comfortable with both. Choose what's easiest for you. Video is useful if you want to discuss form or show Nolan your home gym setup, but phone works just as well for most conversations.",
  },
  {
    q: "What should I prepare before the call?",
    a: "Just think about your goals and current routine. No prep needed — Nolan will guide the conversation and ask the right questions.",
  },
  {
    q: "Is this a sales call?",
    a: "No. This is a genuine consultation. You'll walk away with useful information regardless of whether you sign up for a program.",
  },
  {
    q: "What happens after the consultation?",
    a: "If you decide to move forward with a program, Nolan will outline the next steps. If you need more time, that's fine too.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Get Started
          </p>
          <h1 className="font-display font-bold text-6xl sm:text-7xl uppercase text-white mb-5">
            Book a Consultation
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A 30-minute call with Nolan to discuss your goals, understand your
            options, and build a clear path forward.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Details */}
            <div>
              <div className="bg-zinc-900 border border-zinc-800 p-8 mb-6">
                <div className="flex items-baseline gap-3 mb-6">
                  <p className="font-display font-bold text-6xl text-gold">$135</p>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest">
                    / 30 minutes
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Clock size={15} className="text-gold" />
                    <span className="text-sm">30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Phone size={15} className="text-gold" />
                    <span className="text-sm">Phone or</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Video size={15} className="text-gold" />
                    <span className="text-sm">Video</span>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  This is a real coaching consultation — not a scripted sales
                  call. Nolan will give you honest, expert guidance based on
                  your goals and help you understand what a program with him
                  actually looks like.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-8">
                <h3 className="font-display font-bold text-xl uppercase text-white mb-5">
                  What We&apos;ll Cover
                </h3>
                <ul className="space-y-3">
                  {whatToExpect.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={15}
                        className="text-gold flex-shrink-0 mt-0.5"
                      />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="mb-8">
                <p className="font-display font-bold text-2xl uppercase text-white mb-2">
                  Schedule Your Session
                </p>
                <p className="text-zinc-500 text-sm">
                  Select a date and time, fill in your details, and complete
                  payment to lock in your spot.
                </p>
              </div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl uppercase text-white mb-10 text-center">
            Common Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 bg-zinc-950 border border-zinc-800"
              >
                <p className="font-bold text-white text-sm mb-2">{faq.q}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="text-gold text-xs font-bold uppercase tracking-widest hover:underline"
            >
              View all FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
