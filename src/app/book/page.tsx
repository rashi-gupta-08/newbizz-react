"use client";

import { useEffect } from "react";
import Reveal from "@/components/Reveal";

// Rashi's live Cal.com booking link.
const CAL_LINK = "rashi-gupta-pdkema/30min";

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function BookPage() {
  useEffect(() => {
    // Official Cal.com embed snippet, loaded once on mount.
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal?.("init", { origin: "https://cal.com" });

    window.Cal?.("inline", {
      elementOrSelector: "#cal-booking-inline",
      calLink: CAL_LINK,
      layout: "month_view",
    });

    window.Cal?.("ui", {
      theme: "dark",
      styles: { branding: { brandColor: "#ED834E" } },
      hideEventTypeDetails: false,
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <Reveal>
        <span className="text-accent text-xs tracking-[0.2em] uppercase">
          Book a call
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-700 mt-3 max-w-2xl">
          Pick a time that works. We'll take it from there.
        </h1>
        <p className="text-muted mt-4 max-w-xl">
          A 30-minute intro call, no prep needed on your side. You'll get a
          calendar invite and reminder automatically.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <div
          id="cal-booking-inline"
          style={{ width: "100%", height: "700px", overflow: "scroll" }}
          className="rounded-2xl border border-line bg-surface"
        />
      </Reveal>
    </div>
  );
}