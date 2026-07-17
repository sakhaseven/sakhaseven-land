import goldenLogoUrl from "../../../design-system/Logo.Golden.svg?url";

interface Sakha7LogoProps {
  size?: number | string;
  className?: string;
  title?: string;
  variant?: "default" | "golden";
}

export function Sakha7Logo({
  size = 24,
  className = "",
  title = "شعار سخا 7",
  variant = "default",
}: Sakha7LogoProps) {
  const isDecorative = title.length === 0;

  if (variant === "golden") {
    return (
      <img
        src={goldenLogoUrl}
        width={size}
        height={size}
        alt={isDecorative ? "" : title}
        aria-hidden={isDecorative || undefined}
        className={className}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role={isDecorative ? undefined : "img"}
      aria-hidden={isDecorative || undefined}
      aria-label={isDecorative ? undefined : title}
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
        <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
        <path d="M5 21h14" />
      </g>
    </svg>
  );
}
