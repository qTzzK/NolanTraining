'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

interface CheckoutButtonProps {
  programName: string;
  priceInCents: number;
  highlight?: boolean;
  label?: string;
}

export default function CheckoutButton({
  programName,
  priceInCents,
  highlight = false,
  label = 'Get Started',
}: CheckoutButtonProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/checkout?program=${encodeURIComponent(programName)}&price=${priceInCents}`);
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-xs uppercase tracking-widest transition-all group w-full ${
        highlight
          ? 'bg-gold text-black hover:bg-gold-light'
          : 'border border-zinc-700 text-white hover:border-gold hover:text-gold'
      }`}
    >
      {label}
      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
