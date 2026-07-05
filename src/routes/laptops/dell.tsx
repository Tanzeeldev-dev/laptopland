import { createFileRoute } from "@tanstack/react-router";
import { Shop } from "./index";

export const Route = createFileRoute("/laptops/dell")({
  head: () => ({
    meta: [
      { title: "Dell Laptops in Pakistan | City Tech Laptops" },
      { name: "description", content: "Refurbished Dell Latitude business laptops in Pakistan, tested, warranty, Cash on Delivery. Order on WhatsApp from City Tech Laptops." },
      { property: "og:title", content: "Dell Laptops in Pakistan | City Tech Laptops" },
      { property: "og:description", content: "Durable, reliable Dell Latitude laptops, tested with warranty." },
      { property: "og:url", content: "/laptops/dell" },
    ],
    links: [{ rel: "canonical", href: "/laptops/dell" }],
  }),
  component: () => (
    <Shop brand="Dell" intro={{
      title: "Dell Latitude Laptops",
      lead: "Dell Latitude is built for business, durable chassis, reliable performance and full-size keyboards. Pick from i5 and i7 models, 6th to 11th Gen.",
    }} />
  ),
});
