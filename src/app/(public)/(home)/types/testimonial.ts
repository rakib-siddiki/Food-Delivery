import { StaticImageData } from 'next/image';

export interface ITestimonial {
    id: string;
    src: StaticImageData;
    title: string;
    description: string;
}
