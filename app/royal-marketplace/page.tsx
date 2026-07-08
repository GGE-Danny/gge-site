import type { Metadata } from "next";
import MarketplacePage from "@/components/Marketplace/MarketplacePage";

export const metadata: Metadata = {
  title: "Royal Marketplace — The Total Retail Engine | GGE",
  description:
    "GGE's two products as one connected system: Royal Inventory runs the operations for Gambian retail businesses; Gendal is the marketplace customers buy from.",
};

export default function Page() {
  return <MarketplacePage />;
}
