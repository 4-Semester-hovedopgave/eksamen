"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="grid grid-cols-3 items-center h-20 px-4 lg:px-0 lg:max-w-screen-lg lg:mx-auto">

            {/* LOGO – venstre */}
            <Link href="/" className="justify-self-start">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="h-12 w-auto object-contain"
                />
            </Link>

            {/* MENU – højre */}
            <div className="flex gap-6 items-center justify-self-end col-start-3 text-sm">
                <Link
                    href="https://www.anarikkelarsen.dk"
                    target="_blank"
                    className="hover:underline decoration-orange-400 inline-block px-2 py-1 tracking-widest font-medium sm:tracking-tight sm:text-base"
                >
                    TRADE-IN & SHOP NOW
                </Link>

            </div>

        </nav>
    );
}
