import React from 'react';

const skills = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "Blade", "TypeScript", "Tailwind CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "C#", ".NET", "Java", "PHP", "Laravel", "Filament", "PostgreSQL"],
    },
    {
        category: "Mobile",
        items: ["Flutter", "iOS & Android deployment"],
    },
    {
        category: "DevOps & Cloud",
        items: ["Git", "Docker", "AWS", "Azure", "CI/CD"],
    },
    {
        category: "Delivery",
        items: ["Project management", "Team leadership", "Strategic planning", "Agile methodologies"],
    },
];

const TechStack = () => {
    return (
        <section id="capabilities" className="scroll-mt-16 py-28 md:py-36">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-14 md:mb-16">
                    <p className="eyebrow text-gge-emerald mb-5">Capabilities</p>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gge-ink leading-[1.1]">
                        How we build
                    </h2>
                    <p className="mt-6 text-gge-muted max-w-2xl text-lg leading-relaxed">
                        The frameworks, tools, and practices behind GGE&apos;s
                        products.
                    </p>
                </div>

                <div className="border-t border-gge-line">
                    {skills.map((skill) => (
                        <div
                            key={skill.category}
                            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-7 border-b border-gge-line"
                        >
                            <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-gge-muted md:pt-1.5">
                                {skill.category}
                            </div>
                            <div className="md:col-span-8 text-gge-ink text-lg font-light leading-relaxed">
                                {skill.items.join("  ·  ")}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
