import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";
import Reveal from "@/components/Reveal";

/**
 * Capabilities as a proof ledger: three system families, each anchored to a
 * system already shipped and run. Nothing on this list exists without proof.
 * The MNY proof is founder-attributed — that record predates GGE and must
 * never read as a GGE client engagement.
 */

const rows: {
  ref: string;
  system: string;
  covers: string;
  proof: React.ReactNode;
}[] = [
  {
    ref: "MNY",
    system: "Money systems",
    covers:
      "Payments, wallets, mobile and core banking — systems trusted with other people's money.",
    proof: (
      <>
        <span className="font-medium text-slate-900">
          Founder-led, before GGE
        </span>{" "}
        — core banking infrastructure at Guaranty Trust Bank (GTCO Gambia),
        now processing tens of millions of dollars in transaction volume
        annually. Plus the Kashma and Bonfo fintech platforms, delivered in
        prior roles.
      </>
    ),
  },
  {
    ref: "STK",
    system: "Stock systems",
    covers:
      "Inventory, ERP, procurement, multi-location operations — systems trusted with real stock.",
    proof: (
      <>
        <span className="font-medium text-slate-900">Royal Inventory</span> —
        live in Gambian retail today, keeping the count for shops where one
        item is a lot of money. Plus a delivered ERP for a real estate
        company.
      </>
    ),
  },
  {
    ref: "SLL",
    system: "Selling systems",
    covers:
      "Marketplaces, e-commerce, delivery platforms — the storefronts customers actually buy from.",
    proof: (
      <>
        <span className="font-medium text-slate-900">Gendal</span> — the
        marketplace built directly on Royal Inventory, selling from stock
        that exists.
      </>
    ),
  },
];

const gridCols = "md:grid-cols-[64px_250px_1fr_1.15fr]";

const WhatWeBuild = () => {
  return (
    <section
      id="what-we-build"
      className="scroll-mt-16 py-28 md:py-36 bg-white border-t border-[#ECEAE0]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-10">
          <div>
            <p className="eyebrow text-gge-emerald mb-5">What we build</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gge-ink leading-[1.1]">
              Built for clients, <span className="font-medium">run like ours</span>.
            </h2>
            <p className="mt-6 text-gge-muted max-w-2xl text-lg md:text-xl font-light leading-relaxed">
              The second line of business: custom systems, delivered and
              operated. This is not a list of everything we&apos;d accept —
              each line is a kind of system this team has already shipped and
              stood behind.
            </p>
          </div>
          <Link
            href="/talk"
            className="group inline-flex items-center gap-2 text-gge-ink font-medium border-b border-gge-ink/30 pb-1 hover:border-gge-ink transition-colors self-start md:self-auto md:mb-2 whitespace-nowrap"
          >
            Bring us a build
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-14 border-t border-slate-200">
          {/* Column heads (desktop only — mobile rows carry their own prefix) */}
          <div
            className={`hidden md:grid ${gridCols} gap-7 py-3.5 border-b border-slate-200 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8F89]`}
          >
            <span>Ref</span>
            <span>System</span>
            <span>Covers</span>
            <span>Already run — the proof</span>
          </div>

          {rows.map((row) => (
            <div
              key={row.ref}
              className={`grid grid-cols-1 ${gridCols} gap-2 md:gap-7 py-10 border-b border-slate-200`}
            >
              <div className="flex items-baseline gap-3 md:block">
                <span className="font-mono text-xs text-gge-emerald md:pt-1">
                  {row.ref}
                </span>
                <span className="md:hidden font-medium text-lg tracking-tight text-gge-ink">
                  {row.system}
                </span>
              </div>
              <p className="hidden md:block font-medium text-[19px] tracking-tight text-gge-ink">
                {row.system}
              </p>
              <p className="text-[15px] leading-relaxed text-gge-muted">
                {row.covers}
              </p>
              <p className="text-[15px] leading-relaxed text-[#3E443F]">
                <span className="md:hidden font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8F89]">
                  Already run —{" "}
                </span>
                {row.proof}
              </p>
            </div>
          ))}

          {/* The quiet supporting line */}
          <div className="grid grid-cols-1 md:grid-cols-[64px_1fr] gap-2 md:gap-7 py-7 border-b border-slate-200">
            <span className="font-mono text-xs text-[#8A8F89] md:pt-0.5">
              ALSO
            </span>
            <p className="text-[14.5px] leading-relaxed text-gge-muted">
              In-house alongside every build: consultancy and project
              management. Hardware setup is offered — typically delivered
              with partners, and we say so.
            </p>
          </div>
        </div>

        <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.18em] text-gge-emerald leading-relaxed">
          If we haven&apos;t run it, it isn&apos;t on this page.
        </p>
      </div>
    </section>
  );
};

export default WhatWeBuild;
