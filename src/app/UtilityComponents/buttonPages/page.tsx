
"use client";

import Link from 'next/link';
import ContactMe from '../../contactMe/contact'

export default function Button() {
    return (
        <div className="flex fixed items-center justify-between top-0 left-0 w-full p-5 pl-15 pr-15 py-10 bg-transparent font-semibold text-lg">

            {/* button */}
            <div className="flex items-center space-x-10 text-white text-xl">
                {/* meet ben */}
                <div>
                    <Link href="/ButtonSection/aboutben" className="underline-on-hover">meet ben</Link>
                </div>
            </div>
            {/* logo */}
            <div className="w-33 h-auto">
                <Link href="/">
                    <img src="/ben.png" alt="Kembali ke Beranda" />
                </Link>
            </div>
        </div>
    );
}