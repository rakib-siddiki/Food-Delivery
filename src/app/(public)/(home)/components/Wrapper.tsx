import React from 'react';
import { Hero, HowItWorks, PopulerAreas, Promotion } from '.';
import { CTA } from './CTA';

const Wrapper = () => {
    return (
        <section className='space-y-16 md:space-y-28'>
            <Hero />
            <Promotion />
            <PopulerAreas />
            <HowItWorks />
            <CTA />
        </section>
    );
};

export default Wrapper;
