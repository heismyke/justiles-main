import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
        <div className="relative w-full h-[500px] lg:h-[800px] xl:h-[1000px] overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div key={index} className="relative min-w-full h-[500px] lg:h-[800px] xl:h-[1000px]">
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            width={0}
                            height={0}
                            className="w-full h-500"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
