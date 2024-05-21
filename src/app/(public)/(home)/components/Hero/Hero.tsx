import Image from 'next/image';
import React from 'react';
import img from '@/app/images/hero.png';
import { Button, InputField } from '@/components/core';
import { Icons } from '@/components/Icons';
const Hero = () => {
    return (
        <section className='relative px-5'>
            <Image
                src={img}
                alt='hero image'
                placeholder='blur'
                className='h-dvh lg:h-[70vh] absolute inset-0 -z-50 object-cover'
            />
            <main className='w-full max-w-4xl mx-auto py-36'>
                <h1 className='text-white text-5xl leading-[3.5rem] lg:text-[3.5rem] text-balance text-center mb-8'>
                    Your favorite food, delivered to you
                </h1>
                <div className='w-full h-14 flex items-center justify-between overflow-hidden bg-white dark:bg-gray-800 rounded-full'>
                    <span className='flex items-center gap-2.5 font-semibold text-lg py-4 px-3 sm:px-6 w-1/4 min-w-fit'>
                        <Icons.Location /> New York
                    </span>
                    <span className='w-1 xs:w-px h-10 bg-gray-100'></span>
                    <InputField className='size-full rounded-none border-none' />
                    <Button
                        color='primary'
                        className='min-w-fit w-1/4 h-full py-4 px-5 bg-primary-500 rounded-none font-semibold text-lg'
                    >
                        Search
                    </Button>
                </div>
            </main>
        </section>
    );
};

export default Hero;
