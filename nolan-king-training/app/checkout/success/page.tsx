import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-8">
          <CheckCircle size={64} className="text-gold" />
        </div>
        <h1 className="font-display font-bold text-5xl uppercase text-white mb-4">
          You&apos;re In.
        </h1>
        <p className="text-zinc-400 text-lg mb-3">
          Payment confirmed. Nolan will be in touch within 24 hours to get your
          program started.
        </p>
        <p className="text-zinc-500 text-sm mb-12">
          Check your email for a receipt. If you have any questions, reach out
          directly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-bold text-sm uppercase tracking-widest hover:bg-gold-light transition-colors group"
        >
          Back to Home
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
}
