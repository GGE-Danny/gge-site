import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

/**
 * The Total Retail Engine drawn as one connected line:
 * shop → Royal Inventory → Gendal → customer.
 * Desktop: a horizontal spine with four stations sitting on it.
 * Mobile: the same four stations on a vertical left rail.
 */

/* 18px station circle sitting on the spine/rail */
const Dot = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "absolute w-[18px] h-[18px] rounded-full border-2 border-[#171B18] z-10",
      className
    )}
  />
);

/* Connector microcopy between stations — ↓ on the mobile rail, ↴ on desktop */
const connectorClass =
  "font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8F89]";

const WhatWeRun = () => {
  return (
    <section
      id="what-we-run"
      className="scroll-mt-16 py-28 md:py-36 bg-[#F7F6F2]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow text-gge-emerald mb-5">What we run</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gge-ink leading-[1.1]">
            The <span className="font-medium">Total Retail Engine</span>.
          </h2>
          <p className="mt-6 text-gge-muted max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            One record from the stockroom to the customer. Royal Inventory
            keeps the count; Gendal sells what the count says exists. It runs
            in Gambian shops today — and it is the credential everything else
            on this page stands on.
          </p>
        </Reveal>

        <div className="mt-14">
          <div className="relative">
            {/* Desktop spine / mobile rail — the only thing between stations */}
            <div className="hidden md:block absolute left-0 right-0 top-[130px] h-[2px] bg-[#171B18] opacity-85" />
            <div className="md:hidden absolute left-2 top-2 bottom-2 w-[2px] bg-[#171B18] opacity-85" />

            <div className="grid grid-cols-1 md:grid-cols-[170px_1fr_1fr_190px] md:gap-9 pl-[30px] md:pl-0">
            {/* 01 · The shop */}
            <div className="relative pb-7 md:pb-0 md:pt-[104px]">
              <Dot className="bg-[#F7F6F2] -left-[30px] top-[2px] md:left-0 md:top-[122px]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gge-muted mb-2.5 md:mt-9">
                01 · The shop
              </p>
              <p className="text-[14.5px] leading-relaxed text-[#3E443F]">
                Stock arrives, sales happen. The counter is where the truth
                starts.
              </p>
              <p className={cn(connectorClass, "mt-3.5 md:hidden")}>
                the sale is written once ↓
              </p>
            </div>

            {/* 02 · Operations — Royal Inventory */}
            <div className="relative pb-7 md:pb-0">
              <Dot className="bg-[#3C1684] -left-[30px] top-[2px] md:-left-[27px] md:top-[122px]" />
              <p className={cn(connectorClass, "hidden md:block mb-2.5 text-gge-muted")}>
                the sale is written once ↴
              </p>
              <div
                className="rounded-xl md:rounded-[14px] overflow-hidden text-white shadow-[0_18px_44px_rgba(36,14,82,0.28)]"
                style={{
                  background:
                    "linear-gradient(135deg, #4A1D9E, #3C1684 55%, #240E52)",
                }}
              >
                <div className="px-5 md:px-[26px] pt-5 md:pt-6 pb-3.5 flex items-center justify-between gap-3.5 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src="/products/royal-inventory-logo.png"
                        alt=""
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </span>
                    <div>
                      <p className="font-semibold text-lg tracking-tight">
                        Royal Inventory
                      </p>
                      <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-purple-300/75 mt-0.5">
                        02 · Operations
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-[7px] border border-white/25 rounded-full px-3 py-[5px] font-mono text-[10px] uppercase tracking-[0.14em] text-white whitespace-nowrap">
                    <span className="w-[7px] h-[7px] rounded-full bg-[#17A96B] shadow-[0_0_0_3px_rgba(23,169,107,0.25)] status-pulse" />
                    Live — Gambian retail
                  </span>
                </div>
                <p className="px-5 md:px-[26px] pb-2 text-sm leading-relaxed text-purple-100/85">
                  Keeps the record — stock, sales, staff. Every movement
                  written once, never erased.
                </p>
                <div className="mx-3.5 md:mx-5 my-3.5 rounded-lg overflow-hidden border border-white/[0.18]">
                  <div className="bg-black/[0.32] px-3 py-2 flex items-center gap-2">
                    <span className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white/25" />
                      <span className="w-2 h-2 rounded-full bg-white/25" />
                      <span className="w-2 h-2 rounded-full bg-white/25" />
                    </span>
                    <span className="font-mono text-[10px] text-purple-200/60 ml-1.5">
                      Royal Inventory — Dashboard
                    </span>
                  </div>
                  <Image
                    src="/products/royal-inventory-dashboard-800.webp"
                    alt="Royal Inventory dashboard — revenue in dalasi, low stock, recent sales"
                    width={800}
                    height={517}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="block w-full h-auto"
                  />
                </div>
                <div className="px-5 md:px-[26px] pb-4 md:pb-[18px] flex flex-col items-start gap-2.5">
                  <a
                    href="https://royalinventorygambia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-white font-medium border-b border-white/30 pb-0.5 hover:border-white transition-colors"
                  >
                    Royal Inventory is live — see it in action
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="self-end font-mono text-[9.5px] uppercase tracking-[0.16em] text-purple-300/60">
                    Actual product interface
                  </span>
                </div>
              </div>
              <p className={cn(connectorClass, "mt-3.5 md:hidden")}>
                same catalog, same stock ↓
              </p>
            </div>

            {/* 03 · Storefront — Gendal */}
            <div className="relative pb-7 md:pb-0">
              <Dot className="bg-[#C9962E] -left-[30px] top-[2px] md:-left-[27px] md:top-[122px]" />
              <p className={cn(connectorClass, "hidden md:block mb-2.5 text-gge-muted")}>
                same catalog, same stock ↴
              </p>
              <div className="gendal-panel rounded-xl md:rounded-[14px] overflow-hidden border border-[#E2D5BA] shadow-[0_14px_34px_rgba(62,47,35,0.14)]">
                <div className="gendal-thread" />
                <div className="p-5 md:p-[26px]">
                  <div className="flex items-center justify-between gap-3.5 flex-wrap">
                    <span
                      className="text-[26px] md:text-3xl text-[#4A3626]"
                      style={{
                        fontFamily: "var(--font-fraunces), Georgia, serif",
                        fontStyle: "italic",
                        fontWeight: 640,
                      }}
                    >
                      Gendal
                    </span>
                    <span className="inline-flex items-center gap-[7px] border border-[#E2D5BA] rounded-full px-3 py-[5px] font-mono text-[10px] uppercase tracking-[0.14em] text-[#77614D] whitespace-nowrap">
                      <span className="w-[7px] h-[7px] rounded-full border-[1.5px] border-[#C9962E]" />
                      Built on RI — launch ahead
                    </span>
                  </div>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#C9962E] mt-2.5 mb-3">
                    03 · Storefront
                  </p>
                  <p className="text-sm leading-relaxed text-[#77614D]">
                    The marketplace on top of the same record — many
                    businesses, one basket. What shoppers browse is what the
                    shops actually stock.
                  </p>
                  <p className="mt-4 border-t border-[#E2D5BA] pt-3.5 text-[13px] leading-relaxed text-[#3E2F23]">
                    Built directly on Royal Inventory. Running inside GGE
                    today; public launch is ahead — this card is the work, not
                    the storefront.
                  </p>
                </div>
              </div>
              <p className={cn(connectorClass, "mt-3.5 md:hidden")}>
                one basket ↓
              </p>
            </div>

            {/* 04 · The customer */}
            <div className="relative md:pt-[104px]">
              <Dot className="bg-[#F7F6F2] -left-[30px] top-[2px] md:-left-[27px] md:top-[122px]" />
              <p className={cn(connectorClass, "hidden md:block mb-2.5 text-gge-muted")}>
                one basket ↴
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gge-muted mb-2.5 md:mt-[22px]">
                04 · The customer
              </p>
              <p className="text-[14.5px] leading-relaxed text-[#3E443F]">
                Buys from stock that actually exists. The receipt arrives on
                WhatsApp.
              </p>
            </div>
            </div>
          </div>

          <Reveal className="mt-11 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm text-gge-muted">
              One line, four stations — if the storefront ever sold what the
              stockroom didn&apos;t have, it wouldn&apos;t be an engine.
            </p>
            <Link
              href="/royal-marketplace"
              className="group inline-flex items-center gap-2 text-gge-emerald font-medium border-b border-gge-emerald/35 pb-1 hover:border-gge-emerald transition-colors self-start md:self-auto whitespace-nowrap"
            >
              Explore the Royal Marketplace
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhatWeRun;
