import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const philosophy = [
  {
    title: "Fitness Should Serve Your Life",
    body: "Not the other way around. Nolan's programs are designed to fit around your schedule, your job, and your reality — not an idealized version of it.",
  },
  {
    title: "No Recycled Templates",
    body: "Every client is different. Every program Nolan builds is written from scratch, accounting for your starting point, your limitations, and your specific goal.",
  },
  {
    title: "The Psychological Edge",
    body: "Results aren't just physical. Nolan works on the mental side too — helping clients break through the barriers that have stopped them before.",
  },
  {
    title: "Communication Is Non-Negotiable",
    body: "Nolan responds in about 2 hours on average. You'll never be left guessing about your program, your diet, or your next step.",
  },
];

const sports = [
  { name: "Football", icon: "🏈" },
  { name: "Sprinting", icon: "⚡" },
  { name: "Basketball", icon: "🏀" },
  { name: "Brazilian Jiu-Jitsu", icon: "🥋" },
];

const credentials = [
  "ISSA Certified Elite Trainer",
  "ISSA Certified Nutritionist",
  "ISSA Certified Strength & Conditioning Coach",
  "ISSA Certified Specialist in Bodybuilding",
  "B.S. — Florida International University",
  "Thumbtack Top Pro 2017–2025",
  "Background Checked",
];

const checklist = [
  "15+ years of hands-on coaching experience",
  "Multi-sport competitive background (football, sprinting, basketball, BJJ)",
  "Expertise in fat loss, muscle building, and athletic performance",
  "Deep knowledge of nutrition science and supplementation",
  "1,343 clients coached with a 4.9★ Thumbtack rating",
  "Responds in approximately 2 hours",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
                Meet Your Coach
              </p>
              <h1 className="font-display font-bold text-6xl sm:text-7xl uppercase text-white mb-6">
                Nolan King
              </h1>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                ISSA-certified elite trainer and nutritionist with 15+ years of
                experience helping real people build real results — entirely
                online, available to clients everywhere.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed mb-8">
                Nolan&apos;s background spans multiple high-performance sports:
                football, sprinting, basketball, and Brazilian Jiu-Jitsu.
                That athletic breadth shapes every program he builds — because
                he&apos;s lived the work, not just studied it.
              </p>
              <div className="flex flex-wrap gap-3">
                {sports.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800"
                  >
                    <span>{s.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coach Photo */}
            <div className="relative aspect-square overflow-hidden border border-zinc-800">
              <Image
                src="/images/nolan-profile.jpg"
                alt="Nolan King — ISSA Elite Trainer"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-display font-bold text-2xl uppercase text-white">
                  Nolan King
                </p>
                <p className="text-gold text-xs uppercase tracking-widest mt-1">
                  ISSA Elite Trainer · Online Coaching
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "15+", label: "Years Coaching" },
              { val: "1,343", label: "Clients Hired" },
              { val: "4.9★", label: "Thumbtack Rating" },
              { val: "718", label: "5-Star Reviews" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display font-bold text-4xl text-gold">
                  {s.val}
                </p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Certifications & Credentials
            </p>
            <h2 className="font-display font-bold text-4xl uppercase text-white">
              Qualified to Get You Results
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {credentials.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 px-5 py-3 bg-zinc-900 border border-zinc-700 hover:border-gold/40 transition-all"
              >
                <CheckCircle size={14} className="text-gold flex-shrink-0" />
                <span className="text-zinc-200 text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
              The Coaching Philosophy
            </p>
            <h2 className="font-display font-bold text-5xl uppercase text-white">
              How Nolan Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {philosophy.map((p) => (
              <div
                key={p.title}
                className="p-8 bg-zinc-900 border border-zinc-800 hover:border-gold/30 transition-all"
              >
                <h3 className="font-display font-bold text-2xl uppercase text-white mb-4">
                  {p.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-3">
                Background
              </p>
              <h2 className="font-display font-bold text-4xl uppercase text-white mb-6">
                Athlete First,
                <br />
                Coach Second
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Nolan didn&apos;t come to coaching from a textbook. He came
                from years of competing, training, and testing ideas on his own
                body across multiple sports. That foundation means every program
                he writes has been validated by real-world athletic experience.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                His coaching philosophy is simple: fitness shouldn&apos;t take
                over your life — it should make every part of it better. Whether
                you&apos;re an athlete or someone who&apos;s never set foot in a
                gym, the approach is built around your life, not a rigid script.
              </p>
            </div>
            <div className="space-y-3">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 bg-zinc-800 border border-zinc-700"
                >
                  <CheckCircle
                    size={16}
                    className="text-gold flex-shrink-0 mt-0.5"
                  />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-5xl uppercase text-black mb-4">
            Work With Nolan
          </h2>
          <p className="text-black/70 text-base mb-10 max-w-lg mx-auto">
            Ready to get a program that&apos;s actually built for you? Start with a
            consultation and see exactly what&apos;s possible.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 transition-colors group"
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
