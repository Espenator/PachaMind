import type { Badge } from "@/lib/types";

interface BadgeCardProps {
  badge: Badge;
  earned: boolean;
  earnedLabel: string;
  lockedLabel: string;
}

export function BadgeCard({ badge, earned, earnedLabel, lockedLabel }: BadgeCardProps) {
  return (
    <article
      className={`flex items-start gap-4 rounded-2xl border p-5 transition ${
        earned
          ? "border-goldmoun/50 bg-goldmoun/10"
          : "border-deepearth/10 bg-cloudwhite opacity-70"
      }`}
    >
      <span
        aria-hidden="true"
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg font-semibold ${
          earned ? "bg-goldmoun text-deepearth" : "bg-deepearth/10 text-deepearth/40"
        }`}
      >
        {earned ? "★" : "○"}
      </span>
      <div>
        <h3 className="text-base font-semibold text-deepearth">{badge.title}</h3>
        <p className="mt-1 text-sm leading-6 text-stonegray">{badge.description}</p>
        <p
          className={`mt-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            earned ? "text-terracotta" : "text-stonegray"
          }`}
        >
          {earned ? earnedLabel : lockedLabel}
        </p>
      </div>
    </article>
  );
}
