import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE, waGeneral } from "@/lib/site";

interface Props {
  waHref?: string;
  label?: string;
}

export function MobileBar({ waHref, label = "Order on WhatsApp" }: Props) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-sm border-t border-border shadow-[0_-4px_16px_-8px_rgba(0,0,0,0.15)] safe-area-pb">
      <div className="grid grid-cols-[1fr_auto] gap-1.5 p-2 max-w-sm mx-auto w-full">
        <a
          href={waHref ?? waGeneral()}
          target="_blank"
          rel="noopener"
          className="btn-wa btn-wa-glow w-full !text-[11px] !py-1.5 !px-2.5 !gap-1.5 !rounded-lg whitespace-nowrap min-h-[36px]"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{label}</span>
        </a>
        <a
          href={SITE.phoneHref}
          className="btn-outline-blue !px-2.5 !py-1.5 !rounded-lg min-h-[36px] min-w-[36px] shrink-0"
          aria-label="Call us"
        >
          <Phone className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
