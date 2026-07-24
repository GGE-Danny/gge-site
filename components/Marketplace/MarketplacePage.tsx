"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { GendalLogo } from "./GendalLogo";
import { cn } from "@/lib/utils";

/**
 * Royal Marketplace — the dedicated showcase for GGE's two products, framed
 * as one Total Retail Engine. Royal Inventory owns the operations half of
 * the flow (stockroom, counter); Gendal owns the storefront half (basket,
 * customer). The page runs that flow top to bottom: dark thesis hero →
 * purple operations band → connector → cream storefront band → status.
 */

const flowStages = [
  { label: "Stockroom", owner: "ri" },
  { label: "Counter", owner: "ri" },
  { label: "Basket", owner: "gendal" },
  { label: "Customer", owner: "gendal" },
] as const;

const riLedger = [
  {
    ref: "STK",
    fact: "Real-time stock tracking",
    detail:
      "Stock levels update as sales and adjustments happen, across every outlet and warehouse.",
  },
  {
    ref: "LGR",
    fact: "Append-only audit ledger",
    detail:
      "Every movement is recorded as a new entry. Nothing is overwritten, so the history is always complete.",
  },
  {
    ref: "TNT",
    fact: "Multi-business support",
    detail:
      "One multi-tenant platform runs many businesses, each with its own catalog, sales and reports.",
  },
];

const gendalPoints = [
  "One basket across many local businesses — shop them all in a single checkout.",
  "Built directly on Royal Inventory, so what shoppers browse is what the businesses actually stock.",
  "Made for Gambian shoppers, carrying the tricolor in its own mark.",
];

const StageDot = ({ owner }: { owner: "ri" | "gendal" }) => (
  <span
    className="w-2 h-2 rounded-full shrink-0"
    style={{ background: owner === "ri" ? "#8B6CDD" : "#C9962E" }}
  />
);

const MarketplacePage = () => {
  const gendalRef = useRef<HTMLDivElement>(null);
  const gendalInView = useInView(gendalRef, { once: true, margin: "-20% 0px" });

  return (
    <div>
      {/* ── Thesis hero ── */}
      <section className="relative bg-gge-coal text-white overflow-hidden">
        {/* The two worlds, felt before they're seen */}
        <div
          className="absolute -left-40 top-10 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(closest-side, rgba(74,29,158,0.35), transparent 70%)",
          }}
        />
        <div
          className="absolute -right-48 bottom-0 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(closest-side, rgba(201,150,46,0.16), transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-40 md:pt-52 pb-20 md:pb-28">
          <p className="eyebrow text-emerald-400/80 mb-6">Royal Marketplace</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.08] max-w-3xl">
            The <span className="font-medium">Total Retail Engine</span>.
          </h1>
          <p className="mt-7 text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Royal Inventory runs the operations — stock, staff, sales and
            procurement. Gendal runs the storefront customers actually buy
            from. Two products, one connected system, from stockroom to
            customer.
          </p>

          {/* The flow line: who owns which stage */}
          <div className="mt-16 md:mt-20">
            <div className="flex flex-wrap items-center gap-y-4">
              {flowStages.map((stage, i) => (
                <React.Fragment key={stage.label}>
                  {i > 0 && (
                    <span className="h-px w-6 md:w-16 bg-white/15 mx-3 md:mx-4" />
                  )}
                  <span className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
                    <StageDot owner={stage.owner} />
                    {stage.label}
                  </span>
                </React.Fragment>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.15em] text-white/55">
              <span className="flex items-center gap-2">
                <StageDot owner="ri" /> Royal Inventory
              </span>
              <span className="flex items-center gap-2">
                <StageDot owner="gendal" /> Gendal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 · Operations — Royal Inventory ── */}
      <section
        id="royal-inventory"
        className="relative text-white overflow-hidden scroll-mt-16"
        style={{
          background: "linear-gradient(135deg, #4A1D9E, #3C1684 55%, #240E52)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* Copy */}
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-purple-300/70 mb-8">
                01 · Operations
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg shrink-0">
                  <Image
                    src="/products/royal-inventory-logo.png"
                    alt="Royal Inventory logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Royal Inventory
                  </h2>
                  <p className="eyebrow text-purple-200/70 mt-1">
                    Inventory &amp; Sales
                  </p>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-light tracking-tight leading-[1.15] mb-6">
                Runs the business{" "}
                <span className="font-medium">behind the counter</span>.
              </h3>
              <p className="text-purple-100/80 text-lg leading-relaxed mb-10">
                A multi-tenant inventory and sales management platform for
                Gambian retail businesses — from stock on the shelf to the
                sale at the counter.
              </p>

              {/* Fact ledger — set like the product's own append-only ledger */}
              <div className="border border-white/15 rounded-2xl overflow-hidden bg-black/10 backdrop-blur-sm">
                {riLedger.map((row, i) => (
                  <div
                    key={row.ref}
                    className={cn(
                      "px-5 py-4 flex gap-4",
                      i > 0 && "border-t border-white/10"
                    )}
                  >
                    <span className="font-mono text-xs text-purple-300/70 pt-1 shrink-0 w-10">
                      {row.ref}
                    </span>
                    <div>
                      <p className="font-medium text-white">{row.fact}</p>
                      <p className="text-sm text-purple-200/70 leading-relaxed mt-1">
                        {row.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 font-mono text-xs tracking-wide text-purple-300/70">
                Built for Gambian retail businesses · Not yet publicly
                available
              </p>
            </div>

            {/* Layered real screenshots */}
            <div className="lg:col-span-7">
              <div className="relative md:pb-16 md:pr-6">
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/15 bg-[#240E52]">
                  <div className="bg-black/30 px-4 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
                    </div>
                    <span className="ml-3 text-xs text-purple-200/60 font-mono">
                      Royal Inventory — Dashboard
                    </span>
                  </div>
                  <div className="relative aspect-[3456/2234]">
                    <Image
                      src="/products/royal-inventory-dashboard.png"
                      alt="Royal Inventory dashboard showing profit and revenue, low-stock alerts and recent sales"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                </div>

                {/* Business hub, overlapping — the multi-business claim, shown */}
                <div className="hidden md:block absolute -bottom-2 -left-8 w-[46%] rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-[#240E52]">
                  <div className="bg-black/30 px-3 py-2">
                    <span className="text-[10px] text-purple-200/60 font-mono">
                      Business hub
                    </span>
                  </div>
                  <div className="relative aspect-[3456/2164]">
                    <Image
                      src="/products/royal-inventory-business-hub.png"
                      alt="Royal Inventory business hub for switching between businesses"
                      fill
                      className="object-cover"
                      sizes="27vw"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-6 md:mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-purple-300/50 text-right">
                Actual product interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The connection ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center">
          <span className="w-px h-14 bg-gge-line" />
          <p className="eyebrow text-gge-emerald mt-8 mb-6">One system</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gge-ink">
            Gendal is built directly on Royal Inventory — the storefront
            sells what the stockroom actually has. Same catalog, same stock,
            no second system to keep in sync.
          </p>
          <span className="w-px h-14 bg-gge-line mt-8" />
        </div>
      </section>

      {/* ── 02 · Storefront — Gendal ── */}
      <div
        id="gendal"
        ref={gendalRef}
        className={cn("scroll-mt-16", gendalInView && "logo-animate")}
      >
        <div className="gendal-thread" />
        <div className="gendal-panel gendal-batik">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
              {/* Brand stage — no public UI to show yet; the mark carries it */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center py-10 lg:py-20 order-1">
                <GendalLogo className="text-6xl md:text-8xl" />
                <p
                  className="mt-9 text-center text-lg md:text-xl"
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontStyle: "italic",
                    color: "var(--gendal-muted)",
                  }}
                >
                  Many businesses. One basket.
                </p>
              </div>

              {/* Copy */}
              <div className="lg:col-span-6 order-2">
                <p
                  className="font-mono text-xs uppercase tracking-[0.18em] mb-8"
                  style={{ color: "var(--gendal-gold)" }}
                >
                  02 · Storefront
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light tracking-tight leading-[1.15] mb-6"
                  style={{ color: "var(--gendal-ink)" }}
                >
                  The storefront customers{" "}
                  <em
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontWeight: 560,
                    }}
                  >
                    actually
                  </em>{" "}
                  buy from.
                </h2>
                <p
                  className="text-lg leading-relaxed mb-10"
                  style={{ color: "var(--gendal-muted)" }}
                >
                  Gendal is the unified marketplace where Gambian shoppers buy
                  from many local businesses in one place — the consumer face
                  of the engine.
                </p>

                <ul className="space-y-5">
                  {gendalPoints.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <span className="gendal-tick mt-2.5" />
                      <span
                        className="leading-relaxed"
                        style={{ color: "var(--gendal-ink)" }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className="mt-10 font-mono text-xs tracking-wide"
                  style={{ color: "var(--gendal-muted)" }}
                >
                  Built on Royal Inventory · Not yet publicly available
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gendal-thread" />
      </div>

      {/* ── Status ── */}
      <section className="bg-gge-coal text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="eyebrow text-emerald-400/80 mb-7">Where things stand</p>
          <p className="text-2xl md:text-3xl font-light tracking-tight leading-snug">
            Both products are running today inside GGE. Public launch is
            still ahead — this page is the work, not the storefront.
          </p>
          <Link
            href="/talk"
            className="group inline-flex items-center gap-2 mt-10 text-emerald-300 font-medium border-b border-emerald-300/40 pb-1 hover:border-emerald-300 transition-colors"
          >
            Talk to us about the Royal Marketplace
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
