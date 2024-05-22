import { Icons } from '@/components/Icons';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Card } from '.';
import { CARD_CONTENT } from '@/static';
const PopulerAreas = () => {
    return (
        <section className='container'>
            <div className='flex items-center justify-between mb-4 sm:mb-7'>
                <span className='text-2xl xs:text-3xl sm:text-3.5xl'>
                    Popular on New York area
                </span>
                <Link
                    href='#'
                    className='inline-flex items-center gap-1 font-semibold text-xs xs:text-sm sm:text-lg'
                >
                    View all
                    <Icons.ArrowRight className='size-4 xs:size-5' />
                </Link>
            </div>
            <main className='size-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7 sm:gap-y-10'>
                {(CARD_CONTENT ?? []).map(({ id, src, ...rest }) => (
                    <Fragment key={id}>
                        {id === '1' ? (
                            <div className='row-span-2'>
                                <Card
                                    src={src}
                                    className='sm:h-[600px]'
                                    {...rest}
                                />
                            </div>
                        ) : (
                            <Card
                                src={src}
                                className='max-h-[240px]'
                                {...rest}
                            />
                        )}
                    </Fragment>
                ))}
            </main>
        </section>
    );
};

export default PopulerAreas;
