import Image from 'next/image';
import React from 'react';
import foodImage from '@/app/images/food.png';
import { Button } from '@/components/core';
import { PROMOTION_CONTENT } from '@/static';
const { title, description } = PROMOTION_CONTENT;
const Promotion = () => {
    return (
        <section className='container'>
            <main className='grid sm:grid-cols-2 place-items-center gap-6 md:gap-4'>
                <div>
                    <Image
                        src={foodImage}
                        alt='food'
                        placeholder='blur'
                        className='max-sm:size-64'
                    />
                </div>
                <div className='sm:max-w-md space-y-3 md:space-y-7'>
                    <h2 className='text-3.5xl md:text-5xl'>{title}</h2>
                    <p className='max-md:text-sm'>{description}</p>
                    <Button color='primary' className='w-fit'>
                        Download our App
                    </Button>
                </div>
            </main>
        </section>
    );
};

export default Promotion;
