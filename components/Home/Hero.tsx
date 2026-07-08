import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px]">
      <Image
        src="/Eagle.jpg"
        alt="An eagle in flight — the GGE mark"
        fill
        className="object-cover"
        priority
      />
      {/* Cinematic scrim: dark floor for the type, quiet at the top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-6xl mx-auto px-6 pb-24 md:pb-28 w-full">
          <p className="eyebrow text-emerald-300/90 mb-6">GGE Enterprise</p>
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-tight leading-[1.08] max-w-3xl">
            A technology company,{" "}
            <span className="font-medium">Kingdom first</span>.
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            GGE builds the infrastructure that helps businesses and
            communities operate, connect, and thrive. Today that&apos;s the
            Total Retail Engine — Royal Inventory and Gendal, starting in
            Gambian retail.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <Link
              href="/royal-marketplace"
              className="group inline-flex items-center gap-2 text-white font-medium border-b border-white/40 pb-1 hover:border-white transition-colors"
            >
              See our products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/talk"
              className="text-white/70 hover:text-white transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
