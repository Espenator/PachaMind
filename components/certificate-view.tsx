"use client";

import { useEffect, useRef, useState } from "react";

import { readProgressState, setDisplayName } from "@/lib/progress";

interface CertificateViewProps {
  labels: {
    certificateTitle: string;
    certificateIntro: string;
    certificateBody: string;
    certificateNameLabel: string;
    certificateNamePlaceholder: string;
    certificatePrintLabel: string;
  };
}

export function CertificateView({ labels }: CertificateViewProps) {
  const [name, setName] = useState("");
  const [mounted, setMounted] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = readProgressState().displayName ?? "";
    setName(stored);
    setMounted(true);
  }, []);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    setDisplayName(value);
  }

  function handlePrint() {
    window.print();
  }

  if (!mounted) return null;

  return (
    <div className="documentary-card p-8 lg:p-10">
      <p className="text-xs uppercase tracking-[0.34em] text-terracotta">
        {labels.certificateIntro}
      </p>
      <h2 className="headline-font mt-4 text-4xl text-deepearth">
        {labels.certificateTitle}
      </h2>

      {/* Printable certificate area */}
      <div
        ref={printRef}
        id="pachamind-certificate"
        className="mt-8 rounded-2xl border border-goldmoun/40 bg-cloudwhite p-8 text-center shadow-inner print:border-2 print:shadow-none"
      >
        <p className="text-xs uppercase tracking-[0.34em] text-terracotta">PachaMind</p>
        <h3 className="headline-font mt-3 text-3xl text-deepearth">
          {labels.certificateTitle}
        </h3>
        {name.trim() && (
          <p className="mt-5 text-xl text-deepearth">
            {name.trim()}
          </p>
        )}
        <p className="mt-5 max-w-md mx-auto text-base leading-7 text-stonegray">
          {labels.certificateBody}
        </p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-goldmoun">
          No cost, no sales — only learning
        </p>
      </div>

      {/* Name input */}
      <div className="mt-6">
        <label
          htmlFor="certificate-name"
          className="block text-sm text-stonegray"
        >
          {labels.certificateNameLabel}
        </label>
        <input
          id="certificate-name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder={labels.certificateNamePlaceholder}
          maxLength={120}
          className="mt-2 w-full max-w-sm rounded-xl border border-deepearth/15 bg-white px-4 py-3 text-sm text-deepearth placeholder-stonegray/60 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta"
        />
      </div>

      <button
        type="button"
        onClick={handlePrint}
        className="mt-6 rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta print:hidden"
      >
        {labels.certificatePrintLabel}
      </button>
    </div>
  );
}
