"use client"
import { useState } from "react"
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

interface Item {
    name: string;
    image: string;
}


export default function SkillBen(){
    
    const items:Item[] = [
        {   name: "html",
            image: "htmll.png"
        },
        {   name: "css",
            image: "/css2.png"
        },
        {   name: "javascript",
            image: "/js.png"
        },
        {   name: "react",
            image: "/react.png"
        },
        {   name: "figma",
            image: "/figma.png"
        },
        {   name: "tailwind",
            image: "/tailwind.png"
        },
        {   name: "git",
            image: "/git.png"
        },
        {   name: "github",
            image: "/github.png"
        },
        {   name: "node js",
            image: "/nodejs.png"
        },
        {   name: "next js",
            image: "/next.png"
        },
        {   name: "notion",
            image: "/notion.png"
        },
        {   name: "canva",
            image: "/canva.png"
        },
    ];
    const [startIndex, setStartIndex] = useState<number>(0);
    const VisibleCount = 4;
    const visibleItems = items.slice(startIndex, startIndex + VisibleCount);

    const nextSlide = () => {
        setStartIndex((prev) => Math.min(prev + 1, items.length - VisibleCount));
    };
    
    const prevSlide = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };
    
    
    return (
        <div className="bg-black">
            <div className="-mt-30 relative z-50 bg-transparent">
            <div className="bg-transparent flex flex-row items-center gap-10 pr-10 pl-23">
                <div className="flex flex-col gap pl-26">
                    <div>
                        {/* tombol geser kiri */}
                        <button onClick={prevSlide} className="mb-4 pl-4 pr-4 p-3 text-white rounded-full border border-gray-300">
                            <IoIosArrowBack size={20}/>
                        </button>
                    </div>
                    <div>
                        <button onClick={nextSlide} className="mb-4 pl-4 pr-4 p-3 text-white rounded-full border border-gray-300">
                            <IoIosArrowForward size={20}/>
                        </button>
                    </div>
                </div>

                {/* container */}
                <div className="flex gap-10 bg-tansparent">
                    {visibleItems.map((item, index) => (
                        <div key={index} className="flex flex-col
                                                    items-center
                                                    p-10
                                                    bg-transparent
                                                    border-1
                                                    border-white
                                                    rounded-2xl">
                            <img src={item.image} alt={item.name} className="w-14 h-auto mb-2" />
                            <span className="text-sm text-white">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}