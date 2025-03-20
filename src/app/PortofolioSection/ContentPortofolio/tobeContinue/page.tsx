import React from "react";
import ContactPages from '../../../UtilityComponents/contactBen//page';
import ButtonPages from '../../../UtilityComponents/buttonPages//page';

export default function FirstPorto (){
    return (
        <div className=" bg-black">
            <div className="z-50 relative">
                <ButtonPages />
            </div>
            
            
            
            {/* img */}
            <div className="relative">
                <img className="w-full" src="/comingsoon.png" alt="benaya" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20 z-10"></div>
                <h1 className="text-white text-7xl absolute top-8/10 left-1/20 z-20 poppins-thin">
                    
                </h1>
            </div>
            

            <div className="p-20 pt-30 pb-30">

                <h1 className="pt-30 pb-30 text-5xl text-white">hang tight for ben's next work...</h1>
            </div>

            <div className="pt-15">
                <ContactPages />
            </div>
        </div>
    )
}