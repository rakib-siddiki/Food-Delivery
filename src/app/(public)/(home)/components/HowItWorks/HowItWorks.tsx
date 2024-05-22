import React from 'react';
import { WorkCard } from '.';
import { WORKS_CARD_CONTENT } from '@/static';

const HowItWorks = () => {
    return (
        <section className='container'>
            <main className='max-w-4xl mx-auto text-center'>
                <h2 className='text-5xl mb-12'>How it works</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-8'>
                    {(WORKS_CARD_CONTENT ?? []).map(({ id, ...rest }) => (
                        <WorkCard key={id} {...rest} />
                    ))}
                </div>
            </main>
        </section>
    );
};

export default HowItWorks;
