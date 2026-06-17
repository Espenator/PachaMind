interface ProgressRingProps {
  value: number;
  total: number;
  label: string;
  size?: number;
}

export function ProgressRing({ value, total, label, size = 120 }: ProgressRingProps) {
  const percent = total === 0 ? 0 : Math.round((value / total) * 100);
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div
      className="flex flex-col items-center gap-2"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-deepearth/10"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="text-terracotta transition-all duration-500"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          className="headline-font fill-deepearth"
          fontSize={size * 0.22}
        >
          {percent}%
        </text>
      </svg>
      <p className="text-sm text-stonegray">
        {value} / {total}
      </p>
    </div>
  );
}
