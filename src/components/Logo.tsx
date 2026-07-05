import logoImg from "@/assets/city-tech-logo.png";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "header" | "footer";
}

export function Logo({ variant = "light", className = "", size = "header" }: LogoProps) {
  const badge = variant === "light" ? "bg-white rounded-md px-1.5 py-0.5 shadow-sm ring-1 ring-black/5" : "";
  const height = size === "footer" ? "h-14 sm:h-16" : "h-10 sm:h-11";

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="City Tech Laptops"
        width={512}
        height={512}
        className={`${height} w-auto max-w-[9.5rem] sm:max-w-[10.5rem] object-contain object-left ${badge}`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
