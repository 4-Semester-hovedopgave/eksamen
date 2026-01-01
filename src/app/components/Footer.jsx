

import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 py-12">
            <div className="mx-auto max-w-6xl">

                {/* GRID */}
                <div className="grid gap-10 md:grid-cols-3">

                    {/* CONTACT */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase">
                            Contact us
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-700">
                            <li>Refshalevej 151<br />1432 Copenhagen, Denmark</li>
                            <li>
                                <a href="mailto:info@snowswap.com" className="underline">
                                    info@snowswap.com
                                </a>
                            </li>
                            <li>+45 12 34 56 78</li>
                        </ul>
                    </div>

                    {/* LOGO + SOCIAL */}
                    <div className="flex flex-col items-start md:items-center">
                        <Image
                            src="/logo.png"
                            alt="SnowSwap"
                            width={120}
                            height={40}
                            className="mb-4"
                        />

                        <p className="mb-4 text-sm">@snowswap</p>

                        <div className="flex gap-4">
                            <Link href="#"><FaFacebook /></Link>
                            <Link href="#"><FaTiktok /></Link>
                            <Link href="#"><FaInstagram /></Link>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase">
                                Help
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#">FAQ</Link></li>
                                <li><Link href="#">Selling</Link></li>
                                <li><Link href="#">Buying</Link></li>
                                <li><Link href="#">Trust & safety</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase">
                                Discover
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#">About us</Link></li>
                                <li><Link href="#">How it works</Link></li>
                                <li><Link href="#">Equipment guide</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
