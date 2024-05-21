import { IPromotion, ICard, IWorkCard } from '@/app/(public)/(home)/types';
import photo1 from '@/app/images/populerAreas/Photo1.png';
import photo2 from '@/app/images/populerAreas/Photo2.png';
import photo3 from '@/app/images/populerAreas/Photo3.png';
import photo4 from '@/app/images/populerAreas/Photo4.png';
import photo5 from '@/app/images/populerAreas/Photo5.png';

export const PROMOTION_CONTENT: IPromotion = {
    title: 'Take a taste, come join us. Life is so endlessly delicious',
    description:
        "In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands upon the soul, something inherently mysterious in the forms it takes"
};

export const CARD_CONTENT: ICard[] = [
    {
        id: '1',
        src: photo1,
        alt: 'photo',
        title: 'Restaurant Name',
        fee: '9.99',
        time: {
            min: 10,
            max: 15
        }
    },
    {
        id: '2',
        src: photo2,
        alt: 'photo',
        title: 'Restaurant Name',
        fee: '9.99',
        time: {
            min: 15,
            max: 25
        }
    },
    {
        id: '3',
        src: photo3,
        alt: 'photo',
        title: 'Restaurant Name',
        fee: '9.99',
        time: {
            min: 25,
            max: 45
        }
    },
    {
        id: '4',
        src: photo4,
        alt: 'photo',
        title: 'Restaurant Name',
        fee: '9.99',
        time: {
            min: 25,
            max: 40
        }
    },
    {
        id: '5',
        src: photo5,
        alt: 'photo',
        title: 'Restaurant Name',
        fee: '9.99',
        time: {
            min: 10,
            max: 20
        }
    }
];

export const WORKS_CARD_CONTENT: IWorkCard[] = [
    {
        id: '1',
        icon: 'MobileShape',
        title: 'Order via App',
        description: `In the artist's own experience, of course, art is 
        fundamentally indefinable, unsayable; there is something sacred about its demands`
    },
    {
        id: '2',
        icon: 'DinnerShape',
        title: 'Choose your food',
        description: `In the artist's own experience, of course, art is 
        fundamentally indefinable, unsayable; there is something sacred about its demands`
    },
    {
        id: '1',
        icon: 'FoodShape',
        title: 'Enjoy!',
        description: `In the artist's own experience, of course, art is 
        fundamentally indefinable, unsayable; there is something sacred about its demands`
    }
];
