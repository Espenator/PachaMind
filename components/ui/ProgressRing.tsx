interface ProgressRingProps {
  /** 0–100 */
  percent: number;
  /** Pixel size of the SVG */
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
}

export function ProgressRing({
  percent,
  size = 96,
  strokeWidth = 6,
  label,
  sublabel,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(percent, 100) / 100) * circumference;
  const center = size / 2;

  return (
    <div
      className="flex flex-col items-center gap-1"
      role="img"
      aria-label={`Progress: ${percent}%${label ? ` — ${label}` : ""}`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-stone-200)"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${center} ${center})`}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
        {/* Centre label */}
        <text
          x={center}
          y={center + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--color-foreground)"
          fontSize={size / 5}
          fontWeight="600"
          fontFamily="var(--font-serif)"
        >
          {percent}%
        </text>
      </svg>
      {label && (
        <p
          className="text-sm font-semibold text-center"
          style={{ color: "var(--color-foreground)" }}
        >
          {label}
        </p>
      )}
      {sublabel && (
        <p
          className="text-xs text-center"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          {sublabel}
        </p>
      )}
    </div>
  );
}
