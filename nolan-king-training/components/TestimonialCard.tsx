"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

const PREVIEW_LENGTH = 220;

interface TestimonialCardProps {
  name: string;
  program: string;
  goal: string;
  quote: string;
  image?: string | null;
  featured?: boolean;
}

export default function TestimonialCard({
  name,
  program,
  goal,
  quote,
  image,
  featured = false,
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > PREVIEW_LENGTH;
  const displayedQuote =
    isLong && !expanded ? quote.slice(0, PREVIEW_LENGTH).trimEnd() + "…" : quote;

  if (featured) {
    return (
      <div className="bg-zinc-900 border border-gold/30 overflow-hidden flex flex-col">
        {image && (
          <div className="relative aspect-square">
            <Image
              src={image}
              alt={`${name} transformation`}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-8 flex flex-col flex-1">
          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-gold fill-gold" />
            ))}
          </div>
          <blockquote className="text-zinc-200 text-sm leading-relaxed flex-1 mb-2">
            &ldquo;{displayedQuote}&rdquo;
          </blockquote>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-widest mt-3 mb-5 hover:text-gold-light transition-colors self-start"
            >
              {expanded ? (
                <>Read less <ChevronUp size={13} /></>
              ) : (
                <>Read full review <ChevronDown size={13} /></>
              )}
            </button>
          )}
          {!isLong && <div className="mb-5" />}
          <div className="border-t border-zinc-800 pt-5 flex items-center justify-between">
            <div>
              <p className="font-display font-bold text-xl uppercase text-white">
                {name}
              </p>
              <p className="text-gold text-xs uppercase tracking-widest mt-1">
                {program}
              </p>
            </div>
            <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1.5 border border-zinc-700 text-right max-w-[120px]">
              {goal}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col overflow-hidden">
      {image && (
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={`${name} result`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="text-gold fill-gold" />
          ))}
        </div>
        <blockquote className="text-zinc-300 text-sm leading-relaxed flex-1 mb-2">
          &ldquo;{displayedQuote}&rdquo;
        </blockquote>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-widest mt-3 mb-4 hover:text-gold-light transition-colors self-start"
          >
            {expanded ? (
              <>Read less <ChevronUp size={13} /></>
            ) : (
              <>Read full review <ChevronDown size={13} /></>
            )}
          </button>
        )}
        {!isLong && <div className="mb-4" />}
        <div className="border-t border-zinc-800 pt-4">
          <p className="font-display font-bold text-lg uppercase text-white">
            {name}
          </p>
          <p className="text-gold text-xs uppercase tracking-widest mt-1">
            {program}
          </p>
          <p className="text-zinc-600 text-xs mt-1">{goal}</p>
        </div>
      </div>
    </div>
  );
}
