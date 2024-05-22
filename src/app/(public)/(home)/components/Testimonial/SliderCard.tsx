'use client';
import React from 'react';
import Image from 'next/image';
import { Icons } from '@/components/Icons';
import { TESTIMONIAL_CONTENT } from '@/static';
import { useSlider } from '../../hooks';
const SliderCard = () => {
    const { scrollNext, scrollPrev, settings, sliderRef, Slider } = useSlider();
    return (
        <div className='relative size-full max-w-[608px] max-h-[345px] mx-auto '>
            <Slider ref={sliderRef} {...settings}>
                {(TESTIMONIAL_CONTENT ?? []).map(
                    ({ id, src, title, description }) => (
                        <div
                            key={id}
                            className='relative overflow-hidden rounded-4xl after:absolute after:inset-0 after:bg-gray-900/50 -z-10'
                        >
                            <Image
                                src={src}
                                alt='testimonial-image'
                                placeholder='blur'
                                className='h-80 object-cover block'
                            />
                            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-full max-w-sm px-3'>
                                <h2 className='text-3xl font-semibold text-gray-50'>
                                    {title}
                                </h2>
                                <p className='text-primary-500 text-lg font-bold'>
                                    {description}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </Slider>
            <button
                className='p-4 absolute top-1/2 -left-12 -translate-y-1/2  cursor-pointer'
                onClick={scrollPrev}
                aria-label='Scroll to previous'
            >
                <Icons.ChevronLeft className='stroke-gray-500' />
            </button>
            <button
                className='p-4 absolute top-1/2 -translate-y-1/2 -right-12 rotate-180 cursor-pointer'
                onClick={scrollNext}
                aria-label='Scroll to next'
            >
                <Icons.ChevronLeft className=' stroke-gray-500' />
            </button>
        </div>
    );
};

export default SliderCard;
