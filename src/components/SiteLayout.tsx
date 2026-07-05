import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBar } from "./MobileBar";

interface Props {
  children: ReactNode;
  mobileBar?: { waHref?: string; label?: string };
}

export function SiteLayout({ children, mobileBar }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBar waHref={mobileBar?.waHref} label={mobileBar?.label} />
    </div>
  );
}
