import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg">
            newbizz<span className="text-accent">.</span>
          </p>
          <p className="text-muted text-sm mt-1">
            Build the business that builds itself.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-muted">
          <Link href="/services" className="hover:text-ink transition-colors focus-ring rounded">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-ink transition-colors focus-ring rounded">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-ink transition-colors focus-ring rounded">
            Contact
          </Link>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Newbizz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
