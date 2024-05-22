import { StaticImageData } from 'next/image';

export interface ICard {
    id?: string;
    src: StaticImageData;
    alt: string;
    title: string;
    fee: string;
    time: {
        min: number;
        max: number;
    };
}
