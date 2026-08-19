import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-slate-900">
      {/* Pre-sized AVIF/WebP so the 3G audience never downloads the
          full-resolution original. */}
      <picture>
        <source srcSet="/Eagle.avif" type="image/avif" />
        <img
          src="/Eagle.webp"
          alt="An eagle in flight — the GGE mark"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-[70%_35%] opacity-80"
        />
      </picture>
      {/* Two gradients only: a legibility floor for the bottom-anchored text,
          and left-column protection that lets the right side breathe. */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-slate-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-6xl mx-auto px-6 pb-24 md:pb-28 w-full relative z-10">
          <p className="eyebrow text-slate-300 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-slate-400"></span>
            GGE Enterprise
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] max-w-3xl">
            We run your operations. <br className="hidden md:block" />
            <span className="text-slate-300">You run the business.</span>
          </h1>
          <p className="mt-8 text-slate-200/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            GGE runs the complete operating engine for ambitious businesses — from stockroom to storefront — and absorbs the complexity so you can focus on growth. Kingdom first: we seek the kingdom of God before anything we build.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <Link
              href="/royal-marketplace"
              className="group inline-flex items-center gap-2 text-white font-medium border-b border-white/30 pb-1 hover:border-white transition-all"
            >
              See how we deliver
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/talk"
              className="text-slate-300 hover:text-white transition-colors font-medium border-b border-transparent pb-1"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
