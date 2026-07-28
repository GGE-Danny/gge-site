import TeamPhoto from './TeamPhoto';

/* Ordered by seniority; the grid is fluid and handles any count. */
const teamMembers = [
    {
        name: "Daniel Ofili Achigbue",
        role: "Chief Executive Officer",
        photo: "/team/daniel-o-achigbue.jpg",
    },
    {
        name: "Daisy C Edmond",
        role: "Managing Director",
        photo: "/team/daisy-c-edmond.jpg",
    },
    {
        name: "Jassika Ledwani",
        role: "Chief Operating Officer",
        photo: "/team/jassika-ledwani.jpg",
    },
    {
        name: "Emeka Agha",
        role: "Chief Financial Officer",
        photo: "/team/emeka-agha.jpg",
    },
    {
        name: "Temitope Osatuyi",
        role: "Chief Information Officer",
        photo: "/team/temitope-osatuyi.jpg",
    },
    {
        name: "Kayode Kolawole",
        role: "Chief Innovation Officer",
        photo: "/team/kayode-kolawole.jpg",
    },
    {
        name: "Grace Quayson",
        role: "Chief of Staff",
        photo: "/team/grace-quayson.jpg",
    },
];

const TeamSection = () => {
    return (
        <section id="team" className="scroll-mt-16 py-28 md:py-36 bg-gradient-to-b from-[#111827] to-[#1E293B]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 md:mb-24">
                    <p className="eyebrow text-slate-400 mb-5">Our Team</p>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-[1.1] max-w-2xl">
                        The people behind the <span className="font-medium">promise</span>.
                    </h2>
                    <p className="mt-6 text-slate-300/80 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
                        This is the leadership that answers for the promise — the people accountable for the systems our clients run on every day.
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
