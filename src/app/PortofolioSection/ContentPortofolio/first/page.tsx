import React from "react";
import ContactPages from '../../../UtilityComponents/contactBen//page';
import ButtonPages from '../../../UtilityComponents/buttonPages//page';
import Link from "next/link";

export default function FirstPorto (){
    return (
        <div className=" bg-black poppins-regular">
            <div className="z-50 relative">
                <ButtonPages />
            </div>
            
            
            
            {/* img */}
            <div className="relative">
                <img className="w-full" src="/notionbanner.png" alt="benaya" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <h1 className="text-white text-7xl absolute top-8/10 left-1/20 z-20 poppins-thin">
                    notion
                </h1>
            </div>
            
            <div className="pt-10 p-15">
                <div className="rounded-3xl border-1 border-white w-200 h-auto">
                    <video className="rounded-3xl" src="/notionvideo.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop>
                    </video>
                </div>
            </div>
            <div className="pr-15 pl-15">
                <div className="about-me-container">
                    <p className="text-white text-xl p-5">
                    basically, in early 2025, ben started a Fullstack Developer bootcamp. ben found out he didn't know a lot of the material. there were tons of new words and code snippets. so, to keep track of everything, he started taking notes. but he didn't want to use a traditional notebook because that's not flexible and not modern. ben chose Notion instead. ben is very skilled at setting up layouts and functions in notion, so as shown, he made his notes there
                    </p>
                </div>
            </div>

            <div>
                <div className="p-15">
                    <Link 
                        href="https://www.notion.so/benayasimamora/Fullstack-Archive-1917b4f7e456803b851afd7d81093530?pvs=4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1 className="text-white
                                        text-xl
                                        border-1
                                        w-fit
                                        p-2
                                        rounded-xl
                                        hover:scale-103
                                        hover:bg-white
                                        hover:text-black
                                        duration-300
                                        ease-in-out">
                            click here to access
                        </h1>
                    </Link>
                </div>
            </div>


            {/* testimoni */}
            <div className="pl-10 pr-10">
                <div className="flex flex-row gap-5">
                    <div className="p-5 poppins-regular w-1/2">
                        <p className="italic text-sm">"i do really love this notion because all the material are well organized, and neat, so it's easy for me to read and search for things. it doesn't only provide brief information about each topic, but also provide the documentation which makes me easier to understand how it actually works"</p>
                        <h1 className="font-semibold pt-2">jennifer - UPH Informatics 2024</h1>
                    </div>
                    <div className="p-5 poppins-regular w-1/2">
                        <p className="italic text-sm">"this note is very interesting and helps me in learning. his note makes me understand more about the material that is being studied. in it there is also an example of code that we can learn"</p>
                        <h1 className="font-semibold pt-2">michael - UPH Informatics 2024</h1>
                    </div>
                </div>
            </div>
            
            <div className="pt-15">
                <ContactPages />
            </div>
        </div>
    )
}