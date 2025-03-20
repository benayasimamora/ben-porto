"use client"
import { useState } from "react";
import React from "react";
import ButtonPages from '../../UtilityComponents/buttonPages/page';
import ContactPages from '../../UtilityComponents/contactBen/page';


export default function AboutBen (){
    const [isHovered, setIsHovered] = useState(false)
    

    return (
        <div className="bg-black">
            <div className="z-50 relative">
                <ButtonPages />
            </div>

            <div className="relative">
                <img className="w-full" src="/background11.png" alt="benaya" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <h1 className="text-white text-7xl absolute top-8/10 left-1/20 z-20 poppins-thin">
                    benaya simamora
                </h1>
                
            </div>
            <div className="p-4 pl-20 pr-20">
                <h1 className="about-me-container text-2xl font-light p-4 text-white">Febuary, 2. 2005</h1>
            </div>

            {/* another skill */}
            <div className="pl-15 pt-10 pr-15">
                <div>
                    <h1 className="text-4xl text-white poppins-reguler font-normal">another ben skill</h1>
                    <hr className="border-[#fafafa] w-1/6" />
                </div>
                <div className="flex flex-row pt-9 justify-start gap-7">
                    <div className="relative hover:border-white duration-300 hover:scale-102">
                        <img className="h-70 w-auto rounded-2xl z-10 border-3 border-white/50 hover:border-white duration-300"
                        src="/magazin2.png"
                        style={{ filter: 'brightness(70%)' }}
                        alt="" />
                        <h1 className="text-3xl x text-white z-20 absolute -mt-22 ml-5 poppins-reguler font-bold">
                            Design
                        </h1>
                    </div>
                    <div className="relative hover:border-white duration-300 hover:scale-102">
                            <img className="h-70 w-auto rounded-2xl z-10 border-3 border-white/50 hover:border-white duration-300"
                            src="/music.png"
                            style={{ filter: 'brightness(70%)' }}
                            alt="" />
                            <h1 className="text-3xl x text-white z-20 absolute -mt-22 ml-5 poppins-reguler font-bold">
                                Music
                            </h1>
                    </div>
                    <div className="relative hover:border-white duration-300 hover:scale-102">
                        <img className="h-70 w-auto rounded-2xl z-10 border-3 border-white/50 hover:border-white duration-300"
                        src="/teamleader.png"
                        style={{ filter: 'brightness(70%)' }}
                        alt="" />
                        <h1 className="text-3xl x text-white z-20 absolute -mt-22 ml-5 poppins-reguler font-bold">
                            Team <br /> Leader
                        </h1>
                    </div>
                    <div className="relative hover:border-white duration-300 hover:scale-102">
                        <img className="h-70 w-auto rounded-2xl z-10 border-3 border-white/50 hover:border-white duration-300"
                        src="/publicspeaking.png"
                        style={{ filter: 'brightness(70%)' }}
                        alt="" />
                        <h1 className="text-3xl x text-white z-20 absolute -mt-22 ml-5 poppins-reguler font-bold">
                            Public <br /> Speaking
                        </h1>
                    </div>
                </div>
            </div>



            
            {/* education */}
            <div className=" pt-14 pb-5 text-white">
                <div className="pl-15 pr-15 pb-4">
                    <h1 className="text-4xl poppins-reguler font-normal">ben's educational history</h1>
                    
                </div>

                <div>
                {/* education */}
                <div className="pt-10 flex flex-col">
                    {/* universitas */}
                    <div className="relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                        <div className="absolute top-0 left-0 p-10 text-white z-10">
                            <h2 className="text-3xl font-bold font-rethink ">University</h2>
                        </div>
                        <img src="/uph1.jpeg"
                            alt="Universitas Pelita harapan"
                            style={{ filter: 'brightness(80%)' }}
                            className="w-full h-80 object-cover" />
                                {isHovered && (
                                    <div className="absolute
                                                    flex flex-col
                                                    text-white
                                                    inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-800 ease-in-out hover:opacity-90 opacity-0
                                                    ">
                                        <div className="absolute bottom-0 left-0 p-10">
                                            <h2 className="text-3xl font-bold font-rethink ">
                                                Universitas Pelita Harapan
                                            </h2>
                                            <p className="text-white text-2xl font-rethink">
                                                informatics
                                            </p>
                                            <p className="text-white text-xl font-rethink">
                                                2024 - ...
                                            </p>
                                        </div>
                                    </div>
                                )}
                    </div>
                    <div className="relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                        <div className="absolute top-0 left-0 p-10 text-white z-10">
                            <h2 className="text-3xl font-bold font-rethink ">Senior High School</h2>
                        </div>
                        <img src="/library.jpg"
                            alt="Sekolah Lentera Harapan Medan"
                            style={{ filter: 'brightness(80%)' }}
                            className="w-full h-80 object-cover" />
                                {isHovered && (
                                    <div className="absolute
                                                    flex flex-col
                                                    text-white
                                                    inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-800 ease-in-out hover:opacity-90 opacity-0
                                                    ">
                                        <div className="absolute bottom-0 left-0 p-10">
                                            <h2 className="text-3xl font-bold font-rethink ">
                                                Sekolah Lentera Harapan Medan
                                            </h2>
                                            <p className="text-white text-2xl font-rethink">
                                                science
                                            </p>
                                            <p className="text-white text-xl font-rethink">
                                                2021 - 2024
                                            </p>
                                        </div>
                                    </div>
                                )}
                    </div>
                </div>
                </div>
            </div>
            

            <div>
                <ContactPages />
            </div>
        </div>
    )
}