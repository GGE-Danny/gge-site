"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * The GGE arrival moment. A quiet paper field, the eagle mark, one pass of
 * emerald light, gone. Plays once per browser session. Never traps input:
 * the overlay ignores pointer events, and any click, key or scroll ends it
 * immediately.
 *
 * Server-rendered as a plain canvas-colored field (phase "boot") so first
 * paint is covered without a hydration mismatch; the effect then either
 * dismisses it (already seen this session) or starts the sequence.
 */
export default function IntroOverlay() {
  const [phase, setPhase] = useState<"boot" | "play" | "leaving" | "done">(
    "boot"
  );

  useEffect(() => {
    if (sessionStorage.getItem("gge-intro-seen")) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("gge-intro-seen", "1");

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setPhase("play");

    const leaveAt = reduced ? 1100 : 2300;
    let t1 = setTimeout(() => setPhase("leaving"), leaveAt);
    let t2 = setTimeout(() => setPhase("done"), leaveAt + 600);

    const skip = () => {
      clearTimeout(t1);
      clearTimeout(t2);
      setPhase("leaving");
      t1 = setTimeout(() => setPhase("done"), 320);
    };
    window.addEventListener("pointerdown", skip, { once: true });
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("wheel", skip, { once: true, passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("wheel", skip);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`gge-intro${phase === "play" ? " play" : ""}${
        phase === "leaving" ? " play leaving" : ""
      }`}
      aria-hidden="true"
    >
      <div className="gge-intro-inner">
        <div className="gge-intro-glow" />
        <div className="gge-intro-mark">
          <Image
            src="/eagle-logo.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
          <div className="gge-intro-sheen" />
        </div>
        <p className="gge-intro-word eyebrow text-gge-muted">GGE Enterprise</p>
      </div>
    </div>
  );
}
