import Image from 'next/image';
import React from 'react';

const ProfileSection = () => {
    return (
        <section id="about" className="scroll-mt-16 py-28 md:py-36 bg-gradient-to-b from-white to-slate-50/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-16">
                    {/* Editorial copy */}
                    <div className="md:col-span-7">
                        <p className="eyebrow text-gge-emerald mb-5">About</p>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-10">
                            Who we are
                        </h2>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-800 max-w-xl">
                            GGE is a service company at its core. We don&apos;t just deliver software; we take ownership of the systems that help your business thrive.
                        </p>
                        <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 max-w-xl">
                            <p>
                                The current proof is the Total Retail Engine:
                                Royal Inventory, which runs inventory and
                                sales for retail businesses, and Gendal, the
                                marketplace built on top of it for shoppers —
                                starting in Gambian retail.
                            </p>
                            <p>
                                The company was founded and is led by{' '}
                                <span className="text-slate-900 font-medium">Daniel Ofili Achigbue</span>,
                                whose background spans fintech and banking — from building mobile
                                banking at Guaranty Trust Bank to delivering
                                fintech platforms like Kashma and Bonfo. That
                                work includes core banking infrastructure now
                                processing tens of millions of dollars in
                                transaction volume annually.
                            </p>
                            <p>
                                Driven by our Kingdom-first values, we build systems meant to be trusted with real
                                money and real stock: honest records, reliable operations, and technology that quietly works so you can lead your business.
                            </p>
                        </div>
                    </div>

                    {/* Founder portrait */}
                    <div className="md:col-span-5 md:pt-24">
                        <figure>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm border border-slate-200/50 bg-slate-100">
                                <Image
                                    src="/danTheMan.jpeg"
                                    alt="Daniel Ofili Achigbue at his desk"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                {/* Subtle warm overlay to match Stripe-like visual elevation */}
                                <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply transition-opacity hover:opacity-0" />
                            </div>
                            <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-slate-200 pt-4">
                                <span className="text-slate-900 font-medium">
                                    Daniel Ofili Achigbue
                                </span>
                                <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                                    Founder &amp; CEO
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
