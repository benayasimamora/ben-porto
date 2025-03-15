import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactMe(){
    return(
        <div className="p-6 pl-14 pr-14 pt-32 pb-28 bg-black font-family text-white">

            <hr className="border-gray-500 pb-24" />

            <div className="flex flex-row">
                <div className="pt-5 pl-5 flex-1/7 mr-10">
                    <h1 className="pb-4 font-monserrat font-light text-lg">
                        personal website
                    </h1>
                    <img className="w-40 h-auto"
                        src="ben.png" alt="benaya logo" />
                </div>

                <div className="flex-1/7 pb-4">
                    <h1 className="text-xl font-semibold">look at</h1>
                    
                </div>

                <div className="flex-1/7">
                    <h1 className="text-xl font-semibold pb-4">find ben at</h1>
                    {/* github */}
                    <div className="pt-3 flex items-center gap-2">
                        <FaGithub />
                        <a href="https://github.com/benayasimamora"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium">ben github</a>
                    </div>
                    {/* instagram */}
                    <div className="pt-3 flex items-center gap-2">
                        <FaInstagram />
                        <a href="https://www.instagram.com/benayajosuaa?igsh=dnhhZXQ2aTRhN2hh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium">ben instagram</a>
                    </div>
                    {/* linkedin */}
                    <div className="pt-3 flex items-center gap-2">
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/benaya-simamora-8041702ab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium">ben linkedIn</a>
                    </div>
                </div>

                <div className="flex-4/7">
                    <h1 className="font-semibold text-lg pb-4 pl-2">have any idea?</h1>
                    <div className="bg-[#1a1919] rounded-xl p-24">
                        
                    </div>
                </div>


            </div>
        </div>
    )
}