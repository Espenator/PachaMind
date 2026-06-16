"use client";

import { useState } from "react";

import type { SiteContent } from "@/lib/types";

interface ContactFormProps {
  content: SiteContent["contact"];
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm({ content }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = content.validationName;
    if (!form.email.trim() || !validateEmail(form.email)) e.email = content.validationEmail;
    if (!form.message.trim()) e.message = content.validationMessage;
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const subject = encodeURIComponent("PachaMind — message from " + form.name);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:contact@pachamind.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="documentary-card p-8 lg:p-10">
        <h2 className="headline-font text-3xl text-deepearth">{content.successHeading}</h2>
        <p className="mt-4 text-lg leading-8 text-stonegray">{content.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="documentary-card flex flex-col gap-6 p-8 lg:p-10">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-semibold uppercase tracking-[0.18em] text-stonegray">
          {content.nameLabel}
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder={content.namePlaceholder}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-xl border border-deepearth/15 bg-white/70 px-4 py-3 text-base text-deepearth placeholder:text-stonegray/60 focus:border-terracotta focus:outline-none"
        />
        {errors.name && (
          <p role="alert" className="text-sm text-terracotta">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm font-semibold uppercase tracking-[0.18em] text-stonegray">
          {content.emailLabel}
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder={content.emailPlaceholder}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="rounded-xl border border-deepearth/15 bg-white/70 px-4 py-3 text-base text-deepearth placeholder:text-stonegray/60 focus:border-terracotta focus:outline-none"
        />
        {errors.email && (
          <p role="alert" className="text-sm text-terracotta">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-semibold uppercase tracking-[0.18em] text-stonegray">
          {content.messageLabel}
        </label>
        <textarea
          id="contact-message"
          rows={6}
          placeholder={content.messagePlaceholder}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="rounded-xl border border-deepearth/15 bg-white/70 px-4 py-3 text-base text-deepearth placeholder:text-stonegray/60 focus:border-terracotta focus:outline-none"
        />
        {errors.message && (
          <p role="alert" className="text-sm text-terracotta">{errors.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
        >
          {content.submitLabel}
        </button>
        <p className="max-w-sm text-xs leading-5 text-stonegray/80">{content.noteLabel}</p>
      </div>
    </form>
  );
}
