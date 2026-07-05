import logoAsset from "@/assets/city-tech-logo-wide.png.asset.json";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  // The uploaded logo has a white background with dark wordmark.
  // On dark surfaces we place it inside a clean white badge so it stays readable.
  const badge = variant === "light" ? "bg-white/95 rounded-lg px-1.5 py-1 shadow-sm" : "";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoAsset.url}
        alt="City Tech Laptops"
        width={1254}
        height={877}
        className={`h-12 w-auto ${badge}`}
        loading="eager"
      />
    </div>
  );
}
