import TeamPhoto from './TeamPhoto';

const teamMembers = [
    {
        name: "Daniel Ofili Achigbue",
        role: "Founder & Lead Engineer",
        photo: "/team/daniel.jpg",
    },
    // The layout is fluid and will gracefully handle additional members here.
];

const TeamSection = () => {
    return (
        <section id="team" className="scroll-mt-16 py-28 md:py-36 bg-gradient-to-b from-[#111827] to-[#1E293B]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 md:mb-24">
                    <p className="eyebrow text-slate-400 mb-5">Our Team</p>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] max-w-2xl">
                        The people behind the promise.
                    </h2>
                    <p className="mt-6 text-slate-300/80 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
                        GGE is founder-led. This is who answers for the promise today — the team grows as the work does.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="group">
                            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-800 border border-slate-700/50 mb-5">
                                <TeamPhoto
                                    src={member.photo}
                                    alt={`Portrait of ${member.name}`}
                                    name={member.name}
                                />
                                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
                            </div>
                            <h3 className="text-lg font-medium text-white tracking-tight">
                                {member.name}
                            </h3>
                            <p className="text-sm font-medium mt-1 text-[#E5B84F]">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
