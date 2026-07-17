import { clsx } from "clsx";
import { Sakha7Logo } from "./Sakha7Logo";

interface BrandLockupProps {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
  showTagline?: boolean;
}

export function BrandLockup({
  className,
  compact = false,
  inverted = false,
  showTagline = true,
}: BrandLockupProps) {
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <Sakha7Logo
        size={compact ? 21 : 40}
        title=""
        variant="golden"
        className="shrink-0"
      />

      <span className="min-w-0">
        <span className="flex items-baseline gap-1 leading-none">
          <span
            className={clsx(
              "font-bold tracking-tight",
              compact ? "text-lg" : "text-xl",
              inverted ? "text-white" : "text-[#18251c]",
            )}
          >
            سخا
          </span>
          <span
            className={clsx(
              "font-bold",
              compact ? "text-lg" : "text-xl",
              inverted ? "text-[#e1c46f]" : "text-[#a9822c]",
            )}
          >
            7
          </span>
        </span>
        {showTagline ? (
          <span
            className={clsx(
              "mt-1 block truncate text-[11px] font-medium",
              inverted ? "text-white/55" : "text-[#667066]",
            )}
          >
            للتقاوي والمنتجات الزراعية
          </span>
        ) : null}
      </span>
    </span>
  );
}
