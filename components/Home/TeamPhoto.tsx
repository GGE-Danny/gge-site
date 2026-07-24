'use client';
import Image from 'next/image';
import React, { useState } from 'react';

/* Initials stand in when a member's photo hasn't landed yet — the 400 from
   /_next/image fires onError here, which it cannot do in a Server Component. */
const initialsOf = (name: string) =>
    name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((part) => part[0]!.toUpperCase())
        .filter((_, i, all) => i === 0 || i === all.length - 1)
        .join('');

type TeamPhotoProps = {
    src: string;
    alt: string;
    name: string;
};

const TeamPhoto = ({ src, alt, name }: TeamPhotoProps) => {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center bg-slate-800"
            >
                <span className="text-[#E5B84F] font-medium text-3xl tracking-wide">
                    {initialsOf(name)}
                </span>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setFailed(true)}
        />
    );
};

export default TeamPhoto;
