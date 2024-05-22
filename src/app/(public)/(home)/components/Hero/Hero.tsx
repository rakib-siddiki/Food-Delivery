import Image from 'next/image';
import React from 'react';
import heroImage from '@/app/images/hero.png';
import { Button, InputField } from '@/components/core';
import { Icons } from '@/components/Icons';
const Hero = () => {
    return (
        <section>
            <Image
                src={heroImage}
                alt='hero-image'
                placeholder='blur'
                className='w-full h-[80vh] object-cover relative'
            />
            <main className='w-full max-w-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5'>
                <h1 className='text-white text-5xl  lg:text-6xl text-balance text-center mb-8'>
                    Your favorite food, delivered to you
                </h1>
                <div className='w-full h-14 flex items-center justify-between overflow-hidden bg-white dark:bg-gray-800 rounded-full'>
                    <span className='flex items-center gap-2.5 font-semibold text-lg py-4 px-3 sm:px-6 w-1/4 min-w-fit'>
                        <Icons.Location /> New York
                    </span>
                    <span className='px-px h-10 bg-gray-100 dark:bg-gray-500' />
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
