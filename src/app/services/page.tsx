import Reveal from "@/components/Reveal";

const services = [
  {
    name: "Launch Sprint",
    duration: "3 weeks",
    copy: "Go from idea to a working, sellable first version: positioning, landing page, and first 10 customers outreach plan.",
  },
  {
    name: "Growth Systems",
    duration: "Ongoing",
    copy: "We design and wire up the automation that runs your funnel, onboarding, and follow-ups while you sleep.",
  },
  {
    name: "Brand & Site",
    duration: "2 weeks",
    copy: "A site and visual identity that looks like it belongs to a company three times your size.",
  },
  {
    name: "Fractional Ops",
    duration: "Monthly",
    copy: "A standing team handling the operational load, hiring pipelines to vendor management, so you can focus on the product.",
  },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <span className="text-accent text-xs tracking-[0.2em] uppercase">
          What we do
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-700 mt-3 max-w-2xl">
          Services built for the stage you're actually at.
        </h1>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mt-16">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.08}>
            <div className="border border-line rounded-2xl p-8 bg-surface hover:border-accent/40 transition-colors h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-2xl">{s.name}</h2>
                <span className="text-xs text-muted border border-line rounded-full px-3 py-1">
                  {s.duration}
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed">{s.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
