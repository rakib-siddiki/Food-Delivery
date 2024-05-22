import React from 'react';
import { Hero, HowItWorks, PopulerAreas, Promotion, CTA, Testimonial } from '.';

const Wrapper = () => {
    return (
        <section className='space-y-16 md:space-y-28 mb-16 md:mb-28'>
            <Hero />
            <Promotion />
            <PopulerAreas />
            <HowItWorks />
            <CTA />
            <Testimonial />
        </section>
    );
};

export default Wrapper;
