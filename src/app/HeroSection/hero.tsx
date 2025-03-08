export default function HeroSection() {
    return (
        <div className="flex p-10 pt-24 pb-24 bg-black text-white">
            <div>
                <h1 className="text-5xl ml-12">Benaya Simamora</h1>
            </div>
            <div className="relative w-80 h-auto">
                <img
                    className="w-full h-full object-cover filter brightness-[0.75]"
                    src="benaya1.png"
                    alt="benaya image"
                    style={{
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)"
                    }}
                />
            </div>
        </div>
    );
}
