import React from 'react';
import { Hero, Promotion } from '.';

const Wrapper = () => {
    return (
        <section className='space-y-16 md:space-y-28'>
            <Hero />
            <Promotion />
        </section>
    );
};

export default Wrapper;
