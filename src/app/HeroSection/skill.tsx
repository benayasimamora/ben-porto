export default function HeroSkillSection() {
    return (
        <div className="pb-3 bg-black relative z-40">
            <div className="flex justify-end">
                <div className="text-white text-3xl font-serif font-extralight pr-10 pl-10">
                    <h1>ben adapts to</h1>
                    <hr className="border-[#fafafa] w-1/2" />
                </div>
                <div className="text-white -mr-10 pt-20 font-light font-monserrat">
                    <h1 className="text-8xl">front-end</h1>
                    <h1 className="text-8xl">back-end</h1>
                    <h1 className="text-8xl">design</h1>
                </div>
                <div className="opacity-40 -p-10 z-60">
                    <img className="h-150 w-auto"
                        src="benayaaaaa.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
}