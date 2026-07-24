import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GendalLogo } from "@/components/Marketplace/GendalLogo";

/**
 * Homepage pointer to the Royal Marketplace page: the two brand worlds as
 * one clickable diptych. The full showcase lives at /royal-marketplace.
 */
const MarketplaceTeaser = () => {
  return (
    <section id="marketplace" className="scroll-mt-16 py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12 md:mb-14">
          <div className="md:col-span-8">
            <p className="eyebrow text-gge-emerald mb-5">What we do</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gge-ink leading-[1.1]">
              The <span className="font-medium">Total Retail Engine</span>.
            </h2>
            <p className="mt-6 text-gge-muted max-w-2xl text-lg leading-relaxed">
              Two products, one connected system: Royal Inventory runs the
              operations, Gendal runs the storefront — from stockroom to
              customer.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              href="/royal-marketplace"
              className="group inline-flex items-center gap-2 text-gge-ink font-medium border-b border-gge-ink/30 pb-1 hover:border-gge-ink transition-colors"
            >
              Explore the Royal Marketplace
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <Link href="/royal-marketplace" className="group block">
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-gge-line shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
            {/* Royal Inventory half */}
            <div
              className="relative text-white p-10 md:p-14 min-h-[260px] flex flex-col justify-between gap-10"
              style={{
                background:
                  "linear-gradient(135deg, #4A1D9E, #3C1684 55%, #240E52)",
              }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-purple-300/70">
                01 · Operations
              </span>
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src="/products/royal-inventory-logo.png"
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-2xl font-semibold tracking-tight">
                    Royal Inventory
                  </span>
                </div>
                <p className="text-purple-200/80 leading-relaxed max-w-sm">
                  Runs the business behind the counter — stock, sales,
                  procurement.
                </p>
              </div>
            </div>

            {/* Gendal half */}
            <div className="gendal-panel gendal-batik p-10 md:p-14 min-h-[260px] flex flex-col justify-between gap-10">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.18em]"
                style={{ color: "var(--gendal-gold)" }}
              >
                02 · Storefront
              </span>
              <div>
                <GendalLogo className="text-4xl mb-4" />
                <p
                  className="leading-relaxed max-w-sm"
                  style={{ color: "var(--gendal-muted)" }}
                >
                  The marketplace Gambian shoppers buy from — many businesses,
                  one basket.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MarketplaceTeaser;
