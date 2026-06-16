import type { Badge } from "@/lib/types";

interface BadgeCardProps {
  badge: Badge;
  earned?: boolean;
}

export function BadgeCard({ badge, earned = false }: BadgeCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 p-4 rounded-2xl text-center transition-opacity ${
        earned ? "opacity-100" : "opacity-40 grayscale"
      }`}
      style={{
        backgroundColor: "var(--color-paper-cream)",
        boxShadow: "var(--shadow-card)",
      }}
      aria-label={`${badge.name}${earned ? " — earned" : " — not yet earned"}`}
    >
      {/* Badge icon */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "var(--color-stone-100)" }}
      >
        {badge.iconUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={badge.iconUrl}
            alt=""
            className="w-8 h-8 object-contain"
          />
        ) : (
          <DefaultBadgeIcon stage={badge.pathStage} />
        )}
      </div>

      <h4
        className="text-sm font-semibold leading-snug"
        style={{
          fontFamily: "var(--font-serif)",
          color: "var(--color-foreground)",
        }}
      >
        {badge.name}
      </h4>

      <p
        className="text-xs leading-relaxed"
        style={{ color: "var(--color-muted-foreground)" }}
      >
        {badge.description}
      </p>

      {earned && (
        <span
          className="mt-1 inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: "var(--color-sage-100)",
            color: "var(--color-sage-700)",
          }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
          Earned
        </span>
      )}

      {!earned && (
        <p
          className="mt-1 text-xs italic"
          style={{ color: "var(--color-muted)" }}
        >
          {badge.criteria}
        </p>
      )}
    </div>
  );
}

function DefaultBadgeIcon({ stage }: { stage: string }) {
  return (
    <svg
      className={`w-8 h-8 stage-${stage}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  );
}
