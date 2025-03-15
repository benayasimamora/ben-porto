export default function HeroSection() {
    return (
        <div className="flex p-15 pt-24 pb-24 bg-black text-white items-center">
            <div className="mr-10 relative w-1/3 h-auto">
                <img
                    className="w-100 h-auto object-cover filter brightness-[0.75]"
                    src="benaya1.png"
                    alt="benaya image"
                    style={{
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)"
                    }}
                />
            </div>
            <div className="w-2/3 items-center font-medium font-family">
                <h1 className="self-center text-8xl">Benaya Simamora</h1>
                <hr className="border-gray-500 w-1/2 my-4" />  {/* Tambahkan elemen hr */}
                <p className="">computer science student</p>
                <p className="">full-stack developer</p>

            </div>
        </div>
    );
}
