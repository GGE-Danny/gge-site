import Reveal from "@/components/Reveal";

/**
 * The ending the homepage was missing: after the verse, one ask, on coal.
 * The footer shares the same coal so verse → Begin → footer reads as a
 * single dark passage.
 */
const Begin = () => {
  return (
    <section className="py-28 md:py-36 bg-gge-coal">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="eyebrow text-emerald-400/80 mb-6">Begin</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-[1.12]">
            Start with a <span className="font-medium">message</span>.
          </h2>
          <p className="mt-6 text-white/65 text-lg font-light leading-relaxed">
            A shop that needs the count kept, or a platform that needs
            building and running — the first message is the same. WhatsApp
            reaches us fastest; it&apos;s how our clients already talk to us.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 sm:gap-6">
            <a
              href="https://wa.me/2202464432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#17A96B] text-[#06281B] font-semibold text-base px-8 py-4 rounded-full hover:bg-[#15975F] transition-colors"
            >
              Message us on WhatsApp
            </a>
            <a
              href="mailto:ceo@godgiveseverything.com"
              className="text-white/75 font-medium text-[15px] underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-white transition-colors"
            >
              Write instead — ceo@godgiveseverything.com
            </a>
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
            Banjul, The Gambia · +220 2464432
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Begin;
