"use client";

interface ConsentCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  error?: string;
}

export function ConsentCheckbox({
  id,
  label,
  checked,
  onChange,
  required = false,
  error,
}: ConsentCheckboxProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="flex items-start gap-3 text-sm leading-6 text-deepearth">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          required={required}
          aria-invalid={error ? true : undefined}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 rounded border-deepearth/30 text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        />
        <span>{label}</span>
      </label>
      {error ? (
        <p role="alert" className="pl-8 text-sm text-terracotta">
          {error}
        </p>
      ) : null}
    </div>
  );
}
