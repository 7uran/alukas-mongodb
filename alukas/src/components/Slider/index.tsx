"use client";
import { useState } from 'react';
import { slides } from '../../static/mockdb';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden group">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="absolute inset-0 flex flex-col items-start justify-center text-left  px-10 max-w-[1360px] mx-auto z-10">
                        <h1 className="text-[50px] " dangerouslySetInnerHTML={{ __html: slide.title }} />
                        <h2 className="py-6 text-[24px] text-[rgb(85, 85, 85)]">
                            {slide.desc}
                        </h2>
                        <button className="border-2 bg-transparent hover:bg-black  border-black text-black px-10 py-3 hover:bg-main transition hover:text-white">
                            SHOP NOW
                        </button>
                    </div>

                    <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                </div>
            ))}
            <button
                onClick={prevSlide}
                className="absolute text-3xl transition opacity-0 z-[1] group-hover:opacity-65 duration-500 group-hover:translate-x-0 translate-x-[20px] left-5 rounded-full flex items-center justify-center top-1/2 transform -translate-y-1/2 p-2 text-black"
            >
                <TfiAngleLeft />
            </button>

            <button
                onClick={nextSlide}
                className="absolute text-3xl transition opacity-0 z-[1] group-hover:opacity-65 duration-500 group-hover:translate-x-0 -translate-x-[20px] right-5 rounded-full flex items-center justify-center top-1/2 transform -translate-y-1/2 p-2 text-black"
            >
                <TfiAngleRight />
            </button>
        </div>
    );
};

export default Slider;
