'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import { ROUTES } from '../config/env';

const NAV_ITEMS: { label: string; href: string; withChevron?: boolean }[] = [
    { label: 'Practice Areas', href: ROUTES.PRACTICE_AREAS, withChevron: true },
    { label: 'About Us', href: ROUTES.ABOUT },
    { label: 'Blog', href: ROUTES.BLOGS },
    { label: 'Pay', href: ROUTES.PAYMENT },
];

function ContactIcon() {
    return (
        <Image
            src="/images/contact-phone.svg"
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 shrink-0"
            aria-hidden
        />
    );
}

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false);

    const isActive = useCallback(
        (href: string) => pathname === href || (href !== ROUTES.HOME && pathname.startsWith(href)),
        [pathname]
    );

    const navLinkClass = (href: string) =>
        `flex items-center gap-1.5 whitespace-nowrap text-base font-bold leading-6 transition-colors hover:text-primary ${isActive(href) ? 'text-primary' : 'text-white'
        }`;

    return (
        <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-[5px]">
            <div className="relative mx-auto flex h-24 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 md:px-8 lg:px-[100px]">
                <Link href={ROUTES.HOME} className="flex shrink-0 items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                    <Image src="/images/logo.svg" alt="John V. Martine - Immigration Law Center" width={213} height={41} />
                </Link>

                <div className="flex flex-1 items-center justify-end gap-6 lg:gap-8">
                    <nav className="hidden items-center gap-6 md:flex lg:gap-8">
                        <button
                            type="button"
                            onClick={() => setIsPracticeAreasOpen((p) => !p)}
                            aria-expanded={isPracticeAreasOpen}
                            className={navLinkClass(ROUTES.PRACTICE_AREAS)}
                        >
                            Practice Areas
                            <Icon
                                icon={isPracticeAreasOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                                className="h-4 w-4 shrink-0"
                                aria-hidden
                            />
                        </button>
                        <Link href={ROUTES.ABOUT} className={navLinkClass(ROUTES.ABOUT)}>About Us</Link>
                        <Link href={ROUTES.BLOGS} className={navLinkClass(ROUTES.BLOGS)}>Blog</Link>
                        <Link href={ROUTES.PAYMENT} className={navLinkClass(ROUTES.PAYMENT)}>Pay</Link>
                    </nav>

                    <Link
                        href={ROUTES.CONTACT}
                        className="hidden h-14 w-36 shrink-0 items-center justify-center gap-2 rounded-[28.44px] border-[0.63px] border-white/25 bg-zinc-900/40 text-base font-bold text-white transition-colors hover:bg-zinc-800/50 hover:text-primary md:flex"
                    >
                        <ContactIcon />
                        <span>Contact Us</span>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((p) => !p)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        className="flex flex-col gap-1.5 p-2 md:hidden"
                    >
                        <span className={`h-0.5 w-6 bg-white transition ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`h-0.5 w-6 bg-white transition ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-6 bg-white transition ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="mx-3 mt-3 rounded-lg border border-white/10 bg-black/90 py-4 shadow-lg backdrop-blur md:hidden">
                    <nav className="flex flex-col gap-1 px-2">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-2 rounded-full px-4 py-3 text-base font-bold transition-colors ${isActive(item.href) ? 'bg-white/10 text-primary' : 'text-white hover:bg-white/5 hover:text-primary'
                                    }`}
                            >
                                {item.withChevron && <Icon icon="mdi:chevron-down" className="h-4 w-4 shrink-0" aria-hidden />}
                                {item.label}
                            </Link>
                        ))}
                        <div className="mt-2 px-2">
                            <Link
                                href={ROUTES.CONTACT}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center gap-2 rounded-[28.44px] border border-white/25 bg-zinc-900/40 px-4 py-3 text-base font-bold text-white transition-colors hover:bg-zinc-800/50 hover:text-primary"
                            >
                                <ContactIcon />
                                Contact Us 
                            </Link>
                        </div>
                    </nav>
                </div>
            )}

            <div className="h-0 w-full outline outline-1 outline-[#3B6B89] outline-offset-[-0.5px]" aria-hidden="true" />
        </header>
    );
}
