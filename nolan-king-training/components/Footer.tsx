import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Programs & Pricing" },
  { href: "/transformations", label: "Transformations" },
  { href: "/testimonials", label: "Success Stories" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display font-bold text-xl text-white uppercase tracking-wider mb-3">
              Nolan King <span className="text-gold">Training</span>
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Elite online coaching tailored to your goals. No recycled
              templates — just results that last.
            </p>
            <a
              href="https://www.instagram.com/king.nolan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-zinc-400 hover:text-gold transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <span className="text-sm">@king.nolan</span>
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold mb-5">
              Start Today
            </p>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
              Book a 30-minute consultation and walk away with a clear roadmap
              for your transformation.
            </p>
            <Link
              href="/book"
              className="inline-block px-6 py-3 bg-gold text-black font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Nolan King Training. All rights
            reserved.
          </p>
          <p className="text-xs text-zinc-600">Available Worldwide · Online Only</p>
        </div>
      </div>
    </footer>
  );
}
