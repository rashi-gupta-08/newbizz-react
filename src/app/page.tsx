import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const pillars = [
  {
    title: "Strategy",
    copy: "A clear-eyed plan for where the business goes next, grounded in your numbers, not a template.",
  },
  {
    title: "Automation",
    copy: "The repetitive parts of running a business, handled, so your time goes to decisions that need a human.",
  },
  {
    title: "Execution",
    copy: "Hands-on help shipping the work: pages built, campaigns launched, systems wired together.",
  },
];

const stats = [
  { value: "120+", label: "Businesses launched" },
  { value: "4.2x", label: "Average growth in year one" },
  { value: "18 days", label: "Median time to first sale" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-700 max-w-xl">
            Three things, done properly, beat ten things done halfway.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="border border-line rounded-2xl p-7 h-full bg-surface hover:border-accent/40 transition-colors">
                <span className="text-accent font-display text-sm">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl mt-4 mb-2">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <p className="font-display text-4xl md:text-5xl text-accent">
                {s.value}
              </p>
              <p className="text-muted text-sm mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-28 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-700">
            Ready to stop building this alone?
          </h2>
          <p className="text-muted mt-4">
            Tell us where the business stands today. We'll reply with a plan,
            not a sales pitch.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-accent text-bg font-medium px-7 py-3 rounded-full hover:bg-accent2 transition-colors focus-ring"
          >
            Talk to us
          </Link>
        </Reveal>
      </section>
    </>
  );
}
