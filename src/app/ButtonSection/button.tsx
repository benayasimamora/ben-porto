export default function Button() {
    return (
        <div className="flex
                        items-center
                        justify-between
                        fixed top-0 left-0
                        w-full
                        p-5 pl-15 pr-15
                        bg-transparent
                        font-semibold
                        text-2xl
                        z-20">
            {/* logo */}
            <div className="w-30 h-auto">
                <img src="bebebeb.png" alt="" />
            </div>

            {/* button */}
            <div className="flex items-center space-x-10 text-white">
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