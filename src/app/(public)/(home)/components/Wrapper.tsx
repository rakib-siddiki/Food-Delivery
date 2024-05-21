import React from 'react';
import { Hero, HowItWorks, PopulerAreas, Promotion } from '.';

const Wrapper = () => {
    return (
        <section className='space-y-16 md:space-y-28'>
            <Hero />
            <Promotion />
            <PopulerAreas />
            <HowItWorks />
        </section>
    );
};

export default Wrapper;
