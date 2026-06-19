"use client";

import type { ConsentChannel } from "@/lib/types";

interface ConsentCheckboxProps {
  channel: ConsentChannel;
  label: string;
  checked: boolean;
  required?: boolean;
  requiredHint?: string;
  onChange: (channel: ConsentChannel, checked: boolean) => void;
}

export function ConsentCheckbox({
  channel,
  label,
  checked,
  required = false,
  requiredHint,
  onChange,
}: ConsentCheckboxProps) {
  const id = `consent-${channel}`;
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-3 rounded-2xl border border-deepearth/10 bg-cloudwhite px-5 py-4 transition hover:border-terracotta/40"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        required={required}
        onChange={(event) => onChange(channel, event.target.checked)}
        className="mt-1 h-5 w-5 flex-shrink-0 rounded border-deepearth/30 text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      />
      <span className="text-sm leading-6 text-deepearth">
        {label}
        {required && requiredHint ? (
          <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-terracotta">
            {requiredHint}
          </span>
        ) : null}
      </span>
    </label>
  );
}
