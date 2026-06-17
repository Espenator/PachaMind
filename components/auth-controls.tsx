"use client";

import { useState } from "react";

import { useAuth } from "@/components/auth-provider";

interface AuthControlsProps {
  language: "en" | "es";
}

const labelsByLanguage = {
  en: {
    emailPlaceholder: "you@example.com",
    signIn: "Email sign in",
    sending: "Sending…",
    sent: "Check your email for the sign-in link.",
    signOut: "Sign out",
    signedInAs: "Signed in as",
  },
  es: {
    emailPlaceholder: "tu@ejemplo.com",
    signIn: "Entrar con email",
    sending: "Enviando…",
    sent: "Revisa tu correo para iniciar sesión.",
    signOut: "Cerrar sesión",
    signedInAs: "Conectado como",
  },
} as const;

export function AuthControls({ language }: AuthControlsProps) {
  const labels = labelsByLanguage[language];
  const { user, isLoading, signInWithEmail, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    try {
      await signInWithEmail(email);
      setStatusMessage(labels.sent);
      setEmail("");
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleSignOut() {
    setSubmitting(true);
    setStatusMessage(null);

    try {
      await signOut();
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "Unable to sign out.");
    } finally {
      setSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <p className="rounded-full border border-deepearth/10 bg-white px-4 py-2 text-xs text-stonegray">
        …
      </p>
    );
  }

  if (user?.email) {
    return (
      <div className="flex flex-col items-start gap-2 sm:items-end">
        <p className="rounded-full border border-deepearth/10 bg-white px-4 py-2 text-xs text-stonegray">
          {labels.signedInAs}: {user.email}
        </p>
        <button
          type="button"
          onClick={handleSignOut}
          disabled={submitting}
          className="rounded-full border border-deepearth/20 bg-white px-4 py-2 text-xs font-semibold text-deepearth transition hover:border-terracotta hover:text-terracotta disabled:opacity-60"
        >
          {labels.signOut}
        </button>
        {statusMessage ? <p className="text-xs text-stonegray">{statusMessage}</p> : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-2 sm:items-end">
      <div className="flex items-center gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={labels.emailPlaceholder}
          className="w-44 rounded-full border border-deepearth/15 bg-white px-4 py-2 text-xs text-deepearth placeholder:text-stonegray/70 focus:border-terracotta focus:outline-none"
        />
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-deepearth px-4 py-2 text-xs font-semibold text-cloudwhite transition hover:bg-terracotta disabled:opacity-60"
        >
          {submitting ? labels.sending : labels.signIn}
        </button>
      </div>
      {statusMessage ? <p className="text-xs text-stonegray">{statusMessage}</p> : null}
    </form>
  );
}
