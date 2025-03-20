import Link from "next/link";
export default function Button() {

    return (
        <div className="flex items-center justify-between fixed top-0 left-0 w-full p-5 pl-15 pr-15 py-10 bg-transparent font-semibold text-lg z-70">
            {/* logo */}
            <div className="w-33 h-auto">
                <Link href="/">
                <img src="/ben.png" alt="" />
                </Link>
            </div>

            {/* button */}
            <div className="flex items-center space-x-10 text-white text-xl">
                {/* meet ben */}
                <div>
                    <Link href="/ButtonSection/aboutben">
                        <button className="underline-on-hover">meet ben</button>
                    </Link>
                </div>
                {/* contact ben */}
                <div>
                    <Link href="/#contactMe">
                        <button className="underline-on-hover scroll-smooth md:scroll-auto">contact ben</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}