import { createFileRoute } from "@tanstack/react-router";
import { Shop } from "./index";

export const Route = createFileRoute("/laptops/hp")({
  head: () => ({
    meta: [
      { title: "HP Laptops in Pakistan | ProBook · EliteBook · ZBook" },
      { name: "description", content: "Refurbished HP ProBook, EliteBook and ZBook business laptops in Pakistan. Tested, warranty, Cash on Delivery. Order on WhatsApp." },
      { property: "og:title", content: "HP Laptops in Pakistan | City Tech Laptops" },
      { property: "og:description", content: "HP ProBook, EliteBook and ZBook, quality refurbished units with warranty." },
      { property: "og:url", content: "/laptops/hp" },
    ],
    links: [{ rel: "canonical", href: "/laptops/hp" }],
  }),
  component: () => (
    <Shop brand="HP" intro={{
      title: "HP Laptops, ProBook, EliteBook & ZBook",
      lead: "Reliable HP business laptops, from the everyday ProBook to premium EliteBook and the workstation-class ZBook Firefly.",
    }} />
  ),
});
