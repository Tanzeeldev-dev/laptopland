import { createFileRoute } from "@tanstack/react-router";
import { Shop } from "./index";

export const Route = createFileRoute("/laptops/lenovo")({
  head: () => ({
    meta: [
      { title: "Lenovo ThinkPad Laptops in Pakistan | City Tech Laptops" },
      { name: "description", content: "Refurbished Lenovo ThinkPad business laptops in Pakistan. Tested with warranty and Cash on Delivery. Order on WhatsApp from City Tech Laptops." },
      { property: "og:title", content: "Lenovo ThinkPad Laptops in Pakistan | City Tech Laptops" },
      { property: "og:description", content: "ThinkPad, legendary keyboard, durable build, business-grade reliability." },
      { property: "og:url", content: "/laptops/lenovo" },
    ],
    links: [{ rel: "canonical", href: "/laptops/lenovo" }],
  }),
  component: () => (
    <Shop brand="Lenovo" intro={{
      title: "Lenovo ThinkPad Laptops",
      lead: "ThinkPad, built tough, legendary keyboard, business-grade reliability. Great pick for daily work and travel.",
    }} />
  ),
});
