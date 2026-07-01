"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Login failed.");
        setLoading(false);
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Could not reach the server. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="w-full max-w-sm border border-line bg-surface rounded-2xl p-8"
      >
        <h1 className="font-display text-2xl">Admin login</h1>
        <p className="text-muted text-sm mt-2">
          Access the contact submissions dashboard.
        </p>

        <label htmlFor="password" className="text-sm text-muted block mt-6 mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm focus-ring outline-none focus:border-accent transition-colors"
        />

        {error && (
          <p className="text-red-400 text-xs mt-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-bg font-medium rounded-full py-3 mt-6 hover:bg-accent2 transition-colors focus-ring disabled:opacity-60"
        >
          {loading ? "Checking…" : "Log in"}
        </button>
      </motion.form>
    </div>
  );
}