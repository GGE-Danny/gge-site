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
            "Overseeing the end-to-end delivery of complex software projects and managing multidisciplinary teams. Fostering a cohesive culture of high performance and delivery excellence.",
        highlights: [
            {
                title: "Bonfo delivery",
                detail: "Orchestrated the successful delivery of the Bonfo platform, ensuring alignment between engineering execution and business goals.",
            },
            {
                title: "Leadership",
                detail: "Managed both technical engineering teams and non-technical staff.",
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
            "Engineering robust financial solutions that power global transactions. Key contributions include the development and maintenance of critical banking infrastructures.",
        highlights: [
            {
                title: "GTWorld Gambia",
                detail: "Led the development of the mobile banking application with a new core banking system for the Gambian subsidiary.",
            },
            {
                title: "Corporate banking",
                detail: "Contributed to the enterprise financial management tools used by major corporate clients.",
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
            "Specialized in delivering high-impact fintech products, focusing on platform reliability and feature growth.",
        highlights: [
            {
                title: "Kashma",
                detail: "Responsible for the end-to-end development and continuous maintenance of the Kashma platform.",
            },
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="scroll-mt-16 bg-gge-coal py-28 md:py-36">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 md:mb-20">
                    <p className="eyebrow text-emerald-400/80 mb-5">Experience</p>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-[1.1] max-w-2xl">
                        The track record behind GGE
                    </h2>
                    <p className="mt-6 text-white/50 max-w-2xl text-lg leading-relaxed">
                        Daniel&apos;s work delivering banking and fintech
                        software in The Gambia and beyond.
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
                                <div className="relative w-10 h-10 rounded-md bg-white p-1 overflow-hidden shrink-0">
                                    <Image
                                        src={r.logo}
                                        alt={r.company}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="font-mono text-xs tracking-wide text-white/40">
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
                                <p className="eyebrow text-white/40 mt-2">{r.role}</p>
                                <p className="mt-5 text-white/60 leading-relaxed max-w-2xl">
                                    {r.summary}
                                </p>
                                <dl className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 max-w-2xl">
                                    {r.highlights.map((h) => (
                                        <div key={h.title}>
                                            <dt className="text-white/90 font-medium text-sm">
                                                {h.title}
                                            </dt>
                                            <dd className="mt-1.5 text-sm text-white/45 leading-relaxed">
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
