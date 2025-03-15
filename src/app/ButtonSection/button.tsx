export default function Button() {
    return (
        <div className="flex
                        items-center
                        justify-between
                        fixed top-0 left-0
                        w-full
                        p-5 pl-15 pr-15 py-10
                        bg-transparent
                        font-semibold
                        text-lg
                        z-70">
            {/* logo */}
            <div className="w-33 h-auto">
                <img src="ben.png" alt="" />
            </div>

            {/* button */}
            <div className="flex items-center space-x-10 text-white text-xl">
                {/* meet ben */}
                <div>
                    <button>meet ben</button>
                </div>
                {/* contact ben */}
                <div>
                    <button>contact ben</button>
                </div>
            </div>
        </div>
    );
}