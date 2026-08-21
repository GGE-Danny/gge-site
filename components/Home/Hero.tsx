import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-slate-900">
      {/* Pre-sized AVIF/WebP so the 3G audience never downloads the
          full-resolution original. Mobile crop 62% 18% puts the eagle's
          head alone in the upper-right third, clear of all text. */}
      <picture>
        <source srcSet="/Eagle.avif" type="image/avif" />
        <img
          src="/Eagle.webp"
          alt="An eagle in flight — the GGE mark"
          fetchPriority="high"
          className="absolute inset-x-0 -top-[12%] h-[112%] md:top-0 md:h-full w-full object-cover object-[62%_18%] md:object-[70%_35%] opacity-80"
        />
      </picture>
      {/* Two gradients only: a legibility floor for the bottom-anchored text
          (deeper on mobile, where the copy carries more of the frame), and
          left-column protection that lets the right side breathe. */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 via-45% to-slate-950/30 md:via-slate-950/35 md:via-50% md:to-slate-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-6xl mx-auto px-6 pb-14 md:pb-28 w-full relative z-10">
          <p className="eyebrow text-slate-300 mb-6 hidden md:flex items-center gap-3">
            <span className="w-8 h-[1px] bg-slate-400"></span>
            GGE Enterprise
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] max-w-3xl">
            We run your operations. <br className="hidden md:block" />
            <br className="md:hidden" />
            <span className="text-slate-300">You run the business.</span>
          </h1>
          <p className="mt-8 text-slate-200/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            GGE builds and runs the operating systems businesses depend on. Our own products keep Gambian shops counting today; the same team builds for clients<span className="hidden md:inline"> — payments, marketplaces, ERPs</span>. Kingdom first: we seek the kingdom of God before anything we build.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <Link
              href="#what-we-run"
              className="group inline-flex items-center gap-2 text-white font-medium border-b border-white/30 pb-1 hover:border-white transition-all"
            >
              See what we run
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/talk"
              className="text-slate-300 hover:text-white transition-colors font-medium border-b border-transparent pb-1"
            >
              Bring us a build
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
