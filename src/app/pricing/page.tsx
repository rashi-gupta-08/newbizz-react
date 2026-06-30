import Reveal from "@/components/Reveal";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$490",
    period: "one-time",
    copy: "For testing an idea before committing real budget.",
    features: ["Positioning workshop", "1-page launch site", "Outreach script"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,450",
    period: "/ month",
    copy: "For founders ready to put real systems behind the business.",
    features: [
      "Everything in Starter",
      "Automation build-out",
      "Weekly strategy call",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    copy: "For teams that need a fractional ops partner, not a vendor.",
    features: [
      "Everything in Growth",
      "Dedicated ops lead",
      "Hiring pipeline support",
      "Quarterly planning",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <span className="text-accent text-xs tracking-[0.2em] uppercase">
          Pricing
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-700 mt-3 max-w-2xl">
          Pick a starting point. Change it whenever the business does.
        </h1>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mt-16 items-stretch">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <div
              className={`rounded-2xl p-8 h-full flex flex-col border ${
                p.featured
                  ? "bg-accent text-bg border-accent"
                  : "bg-surface border-line"
              }`}
            >
              <h2 className="font-display text-2xl">{p.name}</h2>
              <p
                className={`text-sm mt-2 ${
                  p.featured ? "text-bg/80" : "text-muted"
                }`}
              >
                {p.copy}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl">{p.price}</span>
                <span
                  className={`text-sm ${p.featured ? "text-bg/70" : "text-muted"}`}
                >
                  {p.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={p.featured ? "text-bg" : "text-accent"}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 text-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-ring ${
                  p.featured
                    ? "bg-bg text-ink hover:bg-surface2"
                    : "bg-accent text-bg hover:bg-accent2"
                }`}
              >
                Choose {p.name}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
