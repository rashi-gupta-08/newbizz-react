"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Errors = Record<string, string>;

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function update(field: string, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function validateClientSide(): Errors {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Enter a name with at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      e.email = "Enter a valid email address.";
    if (values.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const clientErrors = validateClientSide();
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues({ name: "", email: "", company: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="border border-accent/40 bg-surface rounded-2xl p-10 text-center"
      >
        <div className="w-12 h-12 rounded-full bg-accent text-bg flex items-center justify-center mx-auto text-xl font-display">
          ✓
        </div>
        <h2 className="font-display text-2xl mt-5">Message sent.</h2>
        <p className="text-muted text-sm mt-2">
          We read every message ourselves. Expect a reply within one business
          day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent hover:underline focus-ring rounded"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field
        label="Name"
        name="name"
        value={values.name}
        onChange={update}
        error={errors.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={update}
        error={errors.email}
      />
      <Field
        label="Company (optional)"
        name="company"
        value={values.company}
        onChange={update}
        error={errors.company}
      />
      <div>
        <label htmlFor="message" className="text-sm text-muted block mb-2">
          What are you building?
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={`w-full bg-surface border rounded-xl px-4 py-3 text-sm focus-ring outline-none transition-colors ${
            errors.message ? "border-red-500" : "border-line focus:border-accent"
          }`}
          placeholder="A couple sentences about where things stand today."
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent text-bg font-medium rounded-full py-3.5 hover:bg-accent2 transition-colors focus-ring disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (field: string, value: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-muted block mb-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className={`w-full bg-surface border rounded-xl px-4 py-3 text-sm focus-ring outline-none transition-colors ${
          error ? "border-red-500" : "border-line focus:border-accent"
        }`}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-400 text-xs mt-1.5"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
