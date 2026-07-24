import React from 'react';
import Image from 'next/image';

const roles = [
    {
        company: "Coders Clutch",
        role: "Head of Delivery and Engineering",
        period: "Present",
        current: true,
        logo: "/coders_logo.png",
        summary:
            "Ensuring the successful delivery of critical platforms for clients, translating complex business requirements into reliable, revenue-generating operational systems.",
        highlights: [
            {
                title: "Bonfo Platform",
                detail: "Orchestrated the end-to-end delivery of the Bonfo platform, ensuring the technology directly served the core business goals.",
            },
            {
                title: "Cross-functional Leadership",
                detail: "Aligned both technical and non-technical teams to focus entirely on business outcomes rather than isolated engineering milestones.",
            },
        ],
    },
    {
        company: "Guaranty Trust Bank (GTBank)",
        role: "Software Engineer",
        period: "Jun 2024 — Present",
        current: false,
        logo: "/gtco-logo.png",
        summary:
            "Building and maintaining mobile and corporate banking infrastructure for GTBank, where uptime and accuracy are non-negotiable.",
        highlights: [
            {
                title: "GTWorld Gambia",
                detail: "Delivered the mobile banking infrastructure for the Gambian subsidiary — the platform processes tens of millions of dollars in transaction volume annually.",
            },
            {
                title: "Corporate Banking Operations",
                detail: "Built financial management tooling that GTBank's corporate clients use for daily treasury and operational work.",
            },
        ],
    },
    {
        company: "Cayor Enterprises",
        role: "Software Engineer",
        period: "Feb 2023 — Jun 2024",
        current: false,
        logo: "/Cayor-Logo-Large.jpg",
        summary:
            "Engineered fintech platforms where reliability and data integrity came first.",
        highlights: [
            {
                title: "Kashma Platform",
                detail: "Ensured the continuous, secure operation of the Kashma platform, supporting uninterrupted daily business activities for its user base.",
            },
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="scroll-mt-16 bg-[#111827] py-28 md:py-36 border-t border-[#1E293B]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 md:mb-20">
                    <p className="eyebrow text-emerald-400/80 mb-5">Experience</p>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-[1.1] max-w-2xl">
                        The <span className="font-medium">track record</span> behind GGE
                    </h2>
                    <p className="mt-6 text-slate-300/80 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
                        Daniel&apos;s history of building and running banking and fintech systems — work where uptime and accuracy are non-negotiable.
                    </p>
                </div>

                <div className="border-t border-white/10">
                    {roles.map((r) => (
                        <article
                            key={r.company}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-b border-white/10"
                        >
                            {/* Date + mark */}
                            <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
                                <div className="relative w-10 h-10 rounded-lg bg-white p-1.5 ring-1 ring-white/10 overflow-hidden shrink-0">
                                    <Image
                                        src={r.logo}
                                        alt={r.company}
                                        fill
                                        sizes="40px"
                                        className="object-contain"
                                    />
                                </div>
                                <p className="font-mono text-xs tracking-wide text-white/60">
                                    {r.current ? (
                                        <span className="text-emerald-400">Present</span>
                                    ) : (
                                        r.period
                                    )}
                                </p>
                            </div>

                            {/* Role */}
                            <div className="md:col-span-9">
                                <h3 className="text-2xl font-medium text-white tracking-tight">
                                    {r.company}
                                </h3>
                                <p className="eyebrow text-white/60 mt-2">{r.role}</p>
                                <p className="mt-5 text-slate-300 leading-relaxed max-w-2xl font-light text-lg">
                                    {r.summary}
                                </p>
                                <dl className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-2xl">
                                    {r.highlights.map((h) => (
                                        <div key={h.title}>
                                            <dt className="text-white/90 font-medium text-sm">
                                                {h.title}
                                            </dt>
                                            <dd className="mt-2 text-sm text-white/60 leading-relaxed">
                                                {h.detail}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
