import { clsx } from "clsx";
import { Sakha7Logo } from "../../compoenents/Sakha7Logo";

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
      <span
        className={clsx(
          "inline-flex shrink-0 items-center justify-center text-white shadow-[0_10px_30px_rgba(21,50,32,0.16)]",
          compact ? "size-10 rounded-xl" : "size-11 rounded-2xl",
          inverted ? "bg-white/10 text-[#e8ce7a] shadow-none" : "bg-[#214e34]",
        )}
      >
        <Sakha7Logo size={compact ? 21 : 24} title="" />
      </span>

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
