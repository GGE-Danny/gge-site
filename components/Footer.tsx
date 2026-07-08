import Link from 'next/link';
import Image from 'next/image';

const groups: {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    heading: "Royal Marketplace",
    links: [
      { label: "The Total Retail Engine", href: "/royal-marketplace" },
      { label: "Royal Inventory", href: "/royal-marketplace#royal-inventory" },
      { label: "Gendal", href: "/royal-marketplace#gendal" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Experience", href: "/#experience" },
      { label: "Contact", href: "/talk" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "danielachigbue55@gmail.com", href: "mailto:danielachigbue55@gmail.com", external: true },
      { label: "+220 359 1788", href: "tel:+2203591788", external: true },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "GitHub", href: "https://github.com/GGE-Danny", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-achigbue/", external: true },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gge-coal text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {groups.map((group) => (
          <div key={group.heading}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">
              {group.heading}
            </h3>
            <ul className="space-y-3.5">
              {group.links.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/70 hover:text-white transition-colors break-words"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative w-7 h-7 rounded-full bg-white overflow-hidden">
              <Image
                src="/eagle-logo.png"
                alt=""
                fill
                className="object-contain p-1"
              />
            </span>
            <span className="text-sm text-white/60">GGE Enterprise</span>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} GGE Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
