import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Reveal>
        <span className="text-accent text-xs tracking-[0.2em] uppercase">
          Contact
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-700 mt-3">
          Tell us where the business stands today.
        </h1>
        <p className="text-muted mt-4 max-w-xl">
          No discovery call required to get a useful answer. Fill this in and
          a strategist replies directly, usually within a business day.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <ContactForm />
      </Reveal>
    </div>
  );
}
