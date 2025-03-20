"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

interface SlideData {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
}

export default function ImageSlider() {
    const slides: SlideData[] = [
        {
            id: 1,
            title: "notion",
            description: "making simple notes on full-stack developer stuff",
            image: "/notioncover2.png",
            url: "/PortofolioSection/ContentPortofolio/first/",
        },
        {
            id: 2,
            title: "stay tuned",
            description: "stay tuned for what Ben creates next",
            image: "/staytunedwhite.png",
            url: "/PortofolioSection/ContentPortofolio/tobeContinue/",
        },
        
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const SlideContent = ({ slide }: { slide: SlideData }) => {
        return (
            <div className="absolute w-full h-full" style={{ left: `${slides.indexOf(slide) * 100}%` }}>
                <div className="relative w-full h-full">
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/65" />
                </div>

                {/* Konten Slide */}
                <div className="absolute inset-0 flex flex-col justify-center p-20 text-white">
                    <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl mb-8">{slide.description}</p>
                    <Link
                        href={slide.url}
                        className="flex items-center gap-2 font-regular border border-white rounded-full px-5 py-2 w-fit hover:bg-white hover:text-black transition-colors">
                        more...
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <div className="p-20 bg-black broder-2">
            <div>
                <h1 className="text-white text-4xl font-medium pt-5 pb-7">
                    ben's Projects
                </h1>
            </div>
            <div className="relative w-full h-[650px] overflow-hidden border-2 hover:border-[#d8d8d8] duration-900 border-[#535353] rounded-3xl">
                {/* Slide Container */}
                <div
                    className="w-full h-full transition-all duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide) => (
                        <SlideContent key={slide.id} slide={slide} />
                    ))}
                </div>

                {/* Indikator Slide */}
                <div className="absolute bottom-8 left-20 flex items-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-[#636363]"
                                }`}
                        />
                    ))}
                </div>

                {/* Tombol */}
                <div className="absolute bottom-8 right-8 flex gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                        <IoIosArrowBack size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                        <IoIosArrowForward size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}