import Image from 'next/image';
import React from 'react';

const ProfileSection = () => {
    return (
        <section id="about" className="scroll-mt-16 py-28 md:py-36">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-16">
                    {/* Editorial copy */}
                    <div className="md:col-span-7">
                        <p className="eyebrow text-gge-emerald mb-5">About</p>
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gge-ink leading-[1.1] mb-10">
                            Who we are
                        </h2>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-gge-ink max-w-xl">
                            GGE is a technology company, Kingdom first —
                            building the infrastructure that helps businesses
                            and communities operate, connect, and thrive.
                        </p>
                        <div className="mt-8 space-y-6 text-lg leading-relaxed text-gge-muted max-w-xl">
                            <p>
                                The current proof is the Total Retail Engine:
                                Royal Inventory, which runs inventory and
                                sales for retail businesses, and Gendal, the
                                marketplace built on top of it for shoppers —
                                starting in Gambian retail.
                            </p>
                            <p>
                                The company is led by{' '}
                                <span className="text-gge-ink font-medium">Daniel Ofili Achigbue</span>,
                                a software engineer whose background spans
                                fintech and banking — from building mobile
                                banking at Guaranty Trust Bank to delivering
                                fintech platforms like Kashma and Bonfo.
                            </p>
                            <p>
                                We build systems meant to be trusted with real
                                money and real stock: software that keeps an
                                honest record, works for the businesses that
                                run on it, and holds up in daily use.
                            </p>
                        </div>
                    </div>

                    {/* Founder portrait */}
                    <div className="md:col-span-5 md:pt-24">
                        <figure>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                                <Image
                                    src="/danTheMan.jpeg"
                                    alt="Daniel Ofili Achigbue at his desk"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>
                            <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-gge-line pt-4">
                                <span className="text-gge-ink font-medium">
                                    Daniel Ofili Achigbue
                                </span>
                                <span className="font-mono text-xs uppercase tracking-widest text-gge-muted">
                                    Founder
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
