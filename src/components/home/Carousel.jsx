import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Suspense } from 'react';

const images = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
    '/images/banner4.jpg',
    '/images/banner5.jpg',
    '/images/banner6.jpg'
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[500px] bg-[#272727] lg:h-[800px] xl:h-[800px] overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div key={index} className="relative min-w-full h-[500px] lg:h-[800px] xl:h-[800px]">
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{objectFit: "cover"}}
                            priority={true}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
