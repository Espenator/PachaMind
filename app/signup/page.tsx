"use client";

import { useState } from "react";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (firstName.trim() && email.includes("@")) {
      setSubmitted(true);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center py-16 px-6"
      style={{ backgroundColor: "var(--color-paper-cream)" }}
    >
      <div className="w-full max-w-md flex flex-col gap-8">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-terra-500)" }}
          >
            Free · Always
          </p>
          <h1
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            {submitted ? "You're on the Puma Path" : "Save your place on the Puma Path"}
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            {submitted
              ? "Welcome. Your free learning journey has begun."
              : "Start learning free. Track your progress. Earn badges. No cost — ever."}
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-2xl p-8 text-center flex flex-col gap-4"
            style={{
              backgroundColor: "var(--color-paper-white)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <span className="text-5xl" aria-hidden="true">🌱</span>
            <p
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Welcome, {firstName}.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              You are at the Semilla (Seed) stage. Watch your first lesson to
              earn the <em>Seed of Pacha</em> badge.
            </p>
            <a
              href="/videos"
              className="w-full py-3 rounded-full text-sm font-medium text-center block"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
            >
              Begin watching
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              backgroundColor: "var(--color-paper-white)",
              boxShadow: "var(--shadow-card)",
            }}
            noValidate
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="firstName"
                className="text-sm font-medium"
                style={{ color: "var(--color-foreground)" }}
              >
                First name
              </label>
              <input
                id="firstName"
                type="text"
                required
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
                className="w-full rounded-lg px-4 py-3 text-sm border transition-colors focus:outline-none"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-paper-cream)",
                  color: "var(--color-foreground)",
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium"
                style={{ color: "var(--color-foreground)" }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg px-4 py-3 text-sm border transition-colors focus:outline-none"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-paper-cream)",
                  color: "var(--color-foreground)",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={!firstName.trim() || !email.includes("@")}
              className="w-full py-3 rounded-full text-base font-medium transition-opacity disabled:opacity-40"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
            >
              Start learning free
            </button>

            <p
              className="text-xs text-center leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              No spam. No sales. Just free Andean education.{" "}
              <a href="/privacy" className="underline hover:opacity-70" style={{ color: "var(--color-accent)" }}>
                Privacy policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
