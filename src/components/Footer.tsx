import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE, waGeneral } from "@/lib/site";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-12 sm:mt-20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 grid gap-8 sm:gap-10 md:grid-cols-4">
        <div>
          <Logo variant="light" size="footer" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            {SITE.tagline} Quality imported & refurbished Dell, HP and Lenovo business laptops, delivered across Pakistan.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/laptops" className="hover:text-white">All Laptops</Link></li>
            <li><Link to="/laptops/dell" className="hover:text-white">Dell</Link></li>
            <li><Link to="/laptops/hp" className="hover:text-white">HP</Link></li>
            <li><Link to="/laptops/lenovo" className="hover:text-white">Lenovo</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Info</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/how-to-order" className="hover:text-white">How to Order</Link></li>
            <li><Link to="/how-to-order" className="hover:text-white">Warranty</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={waGeneral()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-white">
                <WhatsAppIcon /> WhatsApp us
              </a>
            </li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {SITE.city}</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> {SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/60">
          <p>Tested units · Warranty · Cash on Delivery · Nationwide delivery.</p>
          <p>© 2026 {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
