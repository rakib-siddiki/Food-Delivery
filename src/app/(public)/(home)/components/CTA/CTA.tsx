import React from 'react';
import { Curve } from '@/app/(public)/components';
import { Button } from '@/components/core';
import Link from 'next/link';
const CTA = () => {
    return (
        <section className='container'>
            <main className='relative bg-primary-300 rounded-2xl overflow-hidden px-5 sm:px-24 py-14'>
                <div className='absolute top-0 left-0'>
                    <Curve variant='outline' className='w-8/12 sm:size-full' />
                </div>
                <div className='absolute bottom-0 right-0'>
                    <Curve variant='default' className='size-full sm:h-96' />
                </div>
                <h2 className='mb-5 lg:mb-9 font-light text-4xl sm:text-5xl md:max-w-2xl md:text-balance text-gray-50'>
                    Food Delivery helps you bring food to your front door
                </h2>
                <div className='relative z-50 flex items-center  xs:gap-7'>
                    <Button
                        color='primary'
                        className='bg-gray-700 hover:bg-gray-600 w-auto'
                    >
                        Download Our App
                    </Button>
                    <Link
                        href={'#'}
                        className='font-semibold text-sm text-gray-50 p-4'
                    >
                        Browse food
                    </Link>
                </div>
            </main>
        </section>
    );
};

export default CTA;
