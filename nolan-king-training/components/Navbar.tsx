"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Programs" },
  { href: "/transformations", label: "Results" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-display font-bold text-lg tracking-wider text-white uppercase"
          >
            Nolan King{" "}
            <span className="text-gold">Training</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="ml-2 px-5 py-2.5 bg-gold text-black font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-colors"
            >
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-zinc-800">
          <div className="px-4 py-5 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest ${
                  pathname === link.href ? "text-gold" : "text-zinc-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-1 px-5 py-3 bg-gold text-black font-bold text-sm uppercase tracking-widest text-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
