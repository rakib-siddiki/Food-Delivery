import React from 'react';
import { Hero, PopulerAreas, Promotion } from '.';

const Wrapper = () => {
    return (
        <section className='space-y-16 md:space-y-28'>
            <Hero />
            <Promotion />
            <PopulerAreas />
        </section>
    );
};

export default Wrapper;
