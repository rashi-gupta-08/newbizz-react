"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const keywords = [
  "Strategy",
  "Automation",
  "Branding",
  "Growth Systems",
  "Operations",
  "Launch Sprints",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Signature element: drifting gradient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-30 blur-3xl animate-drift"
        style={{
          background:
            "radial-gradient(circle, #ED834E 0%, #F4A671 35%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs tracking-[0.2em] uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5 mb-8"
        >
          Now onboarding Q3 cohort
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[2.5rem] leading-[1.05] md:text-7xl md:leading-[1.02] font-700 tracking-tight max-w-4xl mx-auto"
        >
          Build the business
          <br />
          that builds <span className="text-accent">itself.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="text-muted text-base md:text-lg max-w-xl mx-auto mt-6"
        >
          Newbizz pairs founders with the strategy, automation, and execution
          they need to go from idea to running operation, without hiring a
          full team first.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link
            href="/contact"
            className="bg-accent text-bg font-medium px-7 py-3 rounded-full hover:bg-accent2 transition-colors focus-ring"
          >
            Start your build
          </Link>
          <Link
            href="/services"
            className="border border-line px-7 py-3 rounded-full hover:border-accent hover:text-accent transition-colors focus-ring"
          >
            See what we do
          </Link>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-t border-line py-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 text-sm text-muted">
          {[...keywords, ...keywords, ...keywords].map((k, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {k}
              <span className="text-accent">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
