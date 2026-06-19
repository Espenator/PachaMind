import type { Badge } from "@/lib/types";

interface BadgeCardProps {
  badge: Badge;
  earned: boolean;
  earnedLabel: string;
  lockedLabel: string;
}

export function BadgeCard({ badge, earned, earnedLabel, lockedLabel }: BadgeCardProps) {
  return (
    <div
      className={`rounded-[1.5rem] border p-6 transition ${
        earned
          ? "border-goldmoun/50 bg-white/80"
          : "border-deepearth/10 bg-white/40 opacity-70"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          aria-hidden="true"
          className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${
            earned ? "bg-goldmoun/20 text-goldmoun" : "bg-stonegray/15 text-stonegray"
          }`}
        >
          {earned ? "◆" : "◇"}
        </span>
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            earned ? "text-goldmoun" : "text-stonegray"
          }`}
        >
          {earned ? earnedLabel : lockedLabel}
        </span>
      </div>
      <h3 className="headline-font mt-4 text-xl text-deepearth">{badge.title}</h3>
      <p className="mt-2 text-sm leading-6 text-stonegray">{badge.description}</p>
    </div>
  );
}
