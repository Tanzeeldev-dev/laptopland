import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE, waGeneral } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/laptops", label: "Shop Laptops" },
  { to: "/laptops/dell", label: "Dell" },
  { to: "/laptops/hp", label: "HP" },
  { to: "/laptops/lenovo", label: "Lenovo" },
  { to: "/about", label: "About" },
  { to: "/how-to-order", label: "How to Order" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-ink text-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Logo variant="light" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-white bg-white/10" }}
                inactiveProps={{ className: "text-white/80 hover:text-white hover:bg-white/5" }}
                className="px-3 py-2 rounded-md font-medium transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/laptops"
              className="flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 px-3 py-2 text-sm text-white/80"
              aria-label="Search laptops"
            >
              <Search className="h-4 w-4" />
              <span className="hidden xl:inline">Search…</span>
            </Link>
            <a href={SITE.phoneHref} className="hidden md:inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-white/80 hover:text-white">
              <Phone className="h-4 w-4 shrink-0" /> {SITE.phoneDisplay}
            </a>
            <a href={waGeneral()} target="_blank" rel="noopener" className="btn-wa text-sm">
              <WhatsAppIcon className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a href={waGeneral()} target="_blank" rel="noopener" className="btn-wa text-sm !py-2 !px-3">
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="p-2 rounded-md hover:bg-white/10"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <nav className="grid gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "bg-white/10 text-white" }}
                  inactiveProps={{ className: "text-white/85 hover:bg-white/5" }}
                  className="px-3 py-2.5 rounded-md text-sm font-medium"
                >
                  {n.label}
                </Link>
              ))}
              <a href={SITE.phoneHref} className="px-3 py-2.5 rounded-md text-sm text-white/85 flex items-center gap-2">
                <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
