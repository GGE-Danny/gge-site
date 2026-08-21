import React from 'react';

const principles = [
    {
        title: "Ownership end-to-end",
        description: "We don't hand over a codebase and walk away. We run the infrastructure, handle the uptime, and ensure your daily operations never miss a beat."
    },
    {
        title: "Built for reality",
        description: "Our systems are designed for real businesses handling real stock and real money. We prioritize fault tolerance, precise records, and uncompromising reliability over chasing trends."
    },
    {
        title: "Invisible complexity",
        description: "The hardest technical challenges—inventory synchronization, cross-channel sales, marketplace integration—are solved quietly in the background, giving you a clean, simple interface to run your business."
    },
    {
        title: "Kingdom first",
        description: "We seek the kingdom of God before our own — which, in daily work, means honest records, honest dealing, and promises kept."
    }
];

const TechStack = () => {
    return (
        <section id="how-we-work" className="scroll-mt-16 py-28 md:py-36 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-14 md:mb-16">
                    <p className="eyebrow text-gge-emerald mb-5">How we work</p>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 leading-[1.1]">
                        We <span className="font-medium">answer</span> for what we build.
                    </h2>
                    <p className="mt-6 text-slate-600 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
                        Four working principles, under every system on this page — the ones we run and the ones we build for you.
                    </p>
                </div>

                <div className="border-t border-slate-200">
                    {principles.map((principle) => (
                        <div
                            key={principle.title}
                            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-slate-200"
                        >
                            <div className="md:col-span-4 font-medium text-lg text-slate-900 md:pt-1">
                                {principle.title}
                            </div>
                            <div className="md:col-span-8 text-slate-600 text-lg font-light leading-relaxed">
                                {principle.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
