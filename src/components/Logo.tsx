import logoImg from "@/assets/city-tech-logo.png";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "header" | "footer";
}

export function Logo({ variant = "light", className = "", size = "header" }: LogoProps) {
  const badge = variant === "light" ? "bg-white rounded-md px-2 py-1 shadow-sm ring-1 ring-black/5" : "";
  const height =
    size === "footer"
      ? "h-16 sm:h-20 md:h-24"
      : "h-12 sm:h-14 md:h-16";

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="City Tech Laptops"
        width={512}
        height={512}
        className={`${height} w-auto max-w-[11rem] sm:max-w-[13rem] md:max-w-[15rem] object-contain object-left ${badge}`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
