"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const linkClass =
        "block px-3 py-2 text-right whitespace-nowrap";

    return (
        <nav className="px-4 lg:px-0 lg:max-w-5xl lg:mx-auto">
            <div className="flex h-20 items-center justify-between">
                {/* LOGO */}
                <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* DESKTOP */}
                {/* DESKTOP */}
                <div className="hidden items-center gap-10 text-sm md:flex font-semibold">
                    <Link
                        href="/trade-in"
                        className="hover:underline decoration-orange-400 underline-offset-4"
                    >
                        TRADE-IN
                    </Link>

                    <Link
                        href="https://www.anarikkelarsen.dk"
                        className="hover:underline decoration-orange-400 underline-offset-4"
                    >
                        SHOP
                    </Link>

                    <Link
                        href="/events"
                        className="hover:underline decoration-orange-400 underline-offset-4"
                    >
                        EVENTS
                    </Link>

                    <Link
                        href="/about"
                        className="hover:underline decoration-orange-400 underline-offset-4"
                    >
                        ABOUT
                    </Link>
                </div>


                {/* BURGERMENU */}
                <button
                    onClick={() => setOpen(!open)}
                    className="px-3 py-2 text-3xl font-semibold md:hidden"
                    aria-label="Open menu"
                >
                    ☰
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden pb-4">
                    <div className=" bg-white p-2">
                        <Link href="/trade-in" className={linkClass} onClick={() => setOpen(false)}>
                            TRADE-IN
                        </Link>
                        <Link
                            href="https://www.anarikkelarsen.dk"
                            target="_blank"
                            className={linkClass}
                            onClick={() => setOpen(false)}
                        >
                            SHOP
                        </Link>
                        <Link href="/events" className={linkClass} onClick={() => setOpen(false)}>
                            EVENTS
                        </Link>
                        <Link href="/about" className={linkClass} onClick={() => setOpen(false)}>
                            ABOUT
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
