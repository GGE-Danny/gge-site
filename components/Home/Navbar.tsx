'use client';
import * as React from "react";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavItem = { label: string; description: string; href: string; brandDot?: boolean };
type NavGroup = { label: string; items: NavItem[] };

const navGroups: NavGroup[] = [
    {
        label: "What We Do",
        items: [
            {
                label: "Royal Marketplace",
                description: "The Total Retail Engine — our two products",
                href: "/royal-marketplace",
                brandDot: true,
            },
            {
                label: "How we work",
                description: "Ownership, reliability, and how we deliver",
                href: "/#how-we-work",
            },
        ],
    },
    {
        label: "About",
        items: [
            {
                label: "Who we are",
                description: "The company and its founder",
                href: "/#about",
            },
        ],
    },
];

/* One brand focus ring, visible on both the paper navbar and the dark hero */
const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400";

/* Two-tone dot: Royal Inventory purple meets Gendal gold */
const BrandDot = () => (
    <span
        className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5"
        style={{ background: "linear-gradient(90deg, #3C1684 50%, #C9962E 50%)" }}
    />
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menus on navigation and on Escape
    useEffect(() => {
        setOpenMenu(null);
        setIsOpen(false);
    }, [pathname]);
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenMenu(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Transparent only while resting on a dark page hero; solid paper elsewhere.
    // An open dropdown or mobile menu always gets the solid treatment.
    const darkHero = pathname === "/" || pathname === "/royal-marketplace";
    const solid = scrolled || !darkHero || openMenu !== null || isOpen;

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 inset-x-0 z-[100] transition-colors duration-300",
                    solid
                        ? "bg-gge-canvas/90 backdrop-blur-md border-b border-gge-line"
                        : "bg-transparent border-b border-transparent"
                )}
            >
                <div className="max-w-6xl mx-auto px-6 h-16 md:h-[4.5rem] flex items-center justify-between">
                    {/* Mark + name */}
                    <Link href="/" className={cn("flex items-center gap-3 rounded-full", focusRing)}>
                        <span className="relative w-9 h-9 rounded-full bg-white shadow-sm ring-1 ring-black/5 overflow-hidden shrink-0">
                            <Image
                                src="/eagle-logo.png"
                                alt="GGE"
                                fill
                                sizes="36px"
                                className="object-contain p-1.5"
                            />
                        </span>
                        <span
                            className={cn(
                                "text-sm font-semibold tracking-[0.08em] transition-colors",
                                solid ? "text-gge-ink" : "text-white"
                            )}
                        >
                            GGE Enterprise
                        </span>
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navGroups.map((group) => {
                            const open = openMenu === group.label;
                            return (
                                <div
                                    key={group.label}
                                    className="relative"
                                    onMouseEnter={() => setOpenMenu(group.label)}
                                    onMouseLeave={() => setOpenMenu(null)}
                                >
                                    <button
                                        type="button"
                                        aria-haspopup="menu"
                                        aria-expanded={open}
                                        onClick={() => setOpenMenu(open ? null : group.label)}
                                        onFocus={() => setOpenMenu(group.label)}
                                        className={cn(
                                            "flex items-center gap-1.5 text-sm px-3 py-2 rounded-full transition-colors",
                                            focusRing,
                                            solid
                                                ? "text-gge-muted hover:text-gge-ink"
                                                : "text-white/80 hover:text-white"
                                        )}
                                    >
                                        {group.label}
                                        <ChevronDown
                                            size={14}
                                            className={cn(
                                                "transition-transform duration-200",
                                                open && "rotate-180"
                                            )}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {open && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 6 }}
                                                transition={{ duration: 0.16, ease: "easeOut" }}
                                                className="absolute left-0 top-full pt-2"
                                            >
                                                <div
                                                    role="menu"
                                                    className="w-72 bg-white rounded-xl border border-gge-line shadow-xl shadow-black/[0.07] p-2"
                                                >
                                                    {group.items.map((item) => (
                                                        <Link
                                                            key={item.label}
                                                            role="menuitem"
                                                            href={item.href}
                                                            onClick={() => setOpenMenu(null)}
                                                            className={cn(
                                                                "flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-gge-canvas transition-colors",
                                                                focusRing
                                                            )}
                                                        >
                                                            {item.brandDot && <BrandDot />}
                                                            <span>
                                                                <span className="block text-sm font-medium text-gge-ink">
                                                                    {item.label}
                                                                </span>
                                                                <span className="block mt-0.5 text-xs text-gge-muted leading-relaxed">
                                                                    {item.description}
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                        <Link
                            href="/talk"
                            className={cn(
                                "ml-3 text-sm font-medium px-5 py-2 rounded-full transition-colors",
                                focusRing,
                                solid
                                    ? "bg-gge-ink text-white hover:bg-black"
                                    : "bg-white text-gge-ink hover:bg-gray-100"
                            )}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "md:hidden p-2 rounded-full transition-colors",
                            focusRing,
                            solid || isOpen ? "text-gge-ink" : "text-white"
                        )}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile menu — groups laid out flat: every destination is one tap */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[90] bg-gge-canvas overflow-y-auto md:hidden"
                    >
                        <div className="min-h-full flex flex-col justify-center px-10 py-28">
                            {navGroups.map((group, gi) => (
                                <motion.div
                                    key={group.label}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 + gi * 0.08 }}
                                    className={cn(gi > 0 && "mt-10")}
                                >
                                    <p className="font-mono text-xs uppercase tracking-widest text-gge-muted mb-3">
                                        {group.label}
                                    </p>
                                    {group.items.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "flex items-center gap-3 py-3.5 text-2xl font-light tracking-tight text-gge-ink border-b border-gge-line",
                                                focusRing
                                            )}
                                        >
                                            {item.brandDot && (
                                                <span
                                                    className="w-2.5 h-2.5 rounded-full shrink-0"
                                                    style={{
                                                        background:
                                                            "linear-gradient(90deg, #3C1684 50%, #C9962E 50%)",
                                                    }}
                                                />
                                            )}
                                            {item.label}
                                        </Link>
                                    ))}
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.28 }}
                                className="mt-12"
                            >
                                <Link
                                    href="/talk"
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "inline-block bg-gge-ink text-white font-medium px-8 py-3.5 rounded-full",
                                        focusRing
                                    )}
                                >
                                    Contact us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
