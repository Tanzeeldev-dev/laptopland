import { Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Users, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import ownerImg from "@/assets/muhammad-omair.png";

const trustStats = [
  { icon: Users, value: "100+", label: "Trusted customers" },
  { icon: ShieldCheck, value: "100%", label: "Tested before sale" },
  { icon: Star, value: "5★", label: "Honest support" },
];

const highlights = [
  "Quality refurbished Dell, HP & Lenovo laptops",
  "Every unit tested, cleaned & warranty-backed",
  "Cash on Delivery across Pakistan",
  "Real support on WhatsApp, before & after you buy",
];

type Props = {
  variant?: "home" | "page";
};

export function AboutMeSection({ variant = "home" }: Props) {
  const isHome = variant === "home";

  return (
    <section className={isHome ? undefined : "border-y border-border bg-surface"}>
      <div className={`mx-auto max-w-7xl px-4 py-10 sm:py-14`}>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-8 lg:gap-14 items-center">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
              <img
                src={ownerImg}
                alt="Muhammad Omair, founder of City Tech Laptops"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary text-primary-foreground px-4 py-3 shadow-lg hidden sm:block">
              <div className="font-display font-bold text-lg leading-tight">100+</div>
              <div className="text-xs opacity-90">Trusted buyers</div>
            </div>
          </div>

          <div>
            {isHome && (
              <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">About me</div>
            )}
            <h2 className={`font-display font-bold text-ink ${isHome ? "mt-2 text-2xl md:text-3xl" : "text-2xl md:text-4xl"}`}>
              Hi, I'm <span className="text-primary">Muhammad Omair</span>
            </h2>
            <p className="mt-1 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Founder of {SITE.name}
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I started {SITE.name} to bring honest, tested business laptops to customers across Pakistan.
              Every Dell, HP and Lenovo unit we sell is inspected, cleaned and backed by warranty, because
              you deserve a laptop you can trust, not guesswork.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {trustStats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-2 sm:p-3 text-center">
                  <s.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mx-auto" />
                  <div className="mt-1 sm:mt-1.5 font-display font-bold text-base sm:text-lg text-ink">{s.value}</div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            {isHome && (
              <Link to="/about" className="inline-flex mt-8 text-primary font-semibold text-sm hover:underline">
                Read my full story →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
