import React from 'react';

/**
 * The founder's note: one verse, given room. Deliberately still — no
 * imagery, no motion, nothing competing with the words.
 */
const FoundersNote = () => {
    return (
        <section aria-label="Founder's note" className="py-40 md:py-60">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gge-muted mb-14">
                    Founder&apos;s note
                </p>
                <blockquote>
                    <p
                        className="text-2xl md:text-4xl leading-[1.55] md:leading-[1.5] text-gge-ink"
                        style={{
                            fontFamily: "var(--font-fraunces), Georgia, serif",
                            fontStyle: "italic",
                            fontWeight: 470,
                        }}
                    >
                        &ldquo;But seek first the kingdom of God and his
                        righteousness, and all these things will be added to
                        you.&rdquo;
                    </p>
                    <footer className="mt-12 text-sm tracking-[0.08em] text-gge-muted">
                        — Matthew 6:33&ensp;·&ensp;ESV
                    </footer>
                </blockquote>
            </div>
        </section>
    );
};

export default FoundersNote;
