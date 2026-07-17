import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx("max-w-2xl", className)}>
      <p
        className={clsx(
          "text-sm font-bold",
          inverted ? "text-[#e1c46f]" : "text-[#397649]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={clsx(
          "mt-3 text-[clamp(1.75rem,6.5vw,2.25rem)] font-bold leading-tight tracking-tight sm:text-4xl",
          inverted ? "text-white" : "text-[#1a291e]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx(
            "mt-4 max-w-xl leading-7",
            inverted ? "text-white/65" : "text-[#69736b]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
