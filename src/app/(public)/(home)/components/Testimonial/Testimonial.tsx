import React from 'react';
import SliderCard from './SliderCard';
import { Pratners } from '.';
const Testimonial = () => {
    return (
        <section className='container'>
            <main className='px-5 w-full max-w-[927px] mx-auto text-center mb-10'>
                <h2 className='text-3.5xl md:text-5xl mb-5'>
                    What our food lovers said
                </h2>
                <p className='mb-14'>
                    In the {"artist's"} own experience, of course, art is
                    fundamentally indefinable, unsayable; there is something
                    sacred about its demands upon the soul, something inherently
                    mysterious in the forms it takes
                </p>
                <SliderCard />
            </main>
            <Pratners />
        </section>
    );
};

export default Testimonial;
