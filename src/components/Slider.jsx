import React, { useState } from 'react';
import { arrowLeft, arrowRight } from '../assets/icons/Sosmed';

export default function SliderCard({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => setCurrentIndex((currentIndex) =>
        (currentIndex === 0 ? cards.length - 1 : currentIndex - 1));

    const handleNext = () => setCurrentIndex((currentIndex) =>
        (currentIndex === cards.length - 1 ? 0 : currentIndex + 1));

    return (
        <div className='lg:w-[830px] xl:w-[1220px] overflow-hidden w-[400px] relative flex flex-col gap-8'>
            <div
                className="flex gap-8 transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 406}px)` }}
            >
                {cards.map((card, index) => (
                    <div
                        className="flex flex-col gap-6 p-9 rounded-3xl bg-white border-[6px] border-blue-100"
                        key={index}
                    >
                        <div className='flex gap-4'>
                            <img src={card.image} alt="" />
                            <div className="flex flex-col">
                                <h1 className='text-2xl font-semibold'>{card.name}</h1>
                                <p>{card.status}</p>
                            </div>
                        </div>
                        <div>
                            <p className='w-[300px]'>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-10 px-2'>
                <button onClick={handlePrev}>
                    <img src={arrowLeft} alt="" className='h-[42px]' />
                </button>

                <button onClick={handleNext}>
                    <img src={arrowRight} alt="" className='h-[42px]' />
                </button>
            </div>
        </div>
    );
}
