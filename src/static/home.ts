import {
    IPromotion,
    ICard,
    IWorkCard,
    ITestimonial
} from '@/app/(public)/(home)/types';
import photo1 from '@/app/images/populerAreas/Photo1.png';
import photo2 from '@/app/images/populerAreas/Photo2.png';
import photo3 from '@/app/images/populerAreas/Photo3.png';
import photo4 from '@/app/images/populerAreas/Photo4.png';
import photo5 from '@/app/images/populerAreas/Photo5.png';
// TESTIMONIAL
import cardImage1 from '@/app/images/testimonialImages/image1.png';
import cardImage2 from '@/app/images/testimonialImages/image2.jpg';
import cardImage3 from '@/app/images/testimonialImages/image3.jpg';
import cardImage4 from '@/app/images/testimonialImages/image4.jpg';

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
        id: '3',
        icon: 'FoodShape',
        title: 'Enjoy!',
        description: `In the artist's own experience, of course, art is 
        fundamentally indefinable, unsayable; there is something sacred about its demands`
    }
];

export const COMPANYS_LOGO: string[] = [
    '/companyLogo/logo 1.svg',
    '/companyLogo/logo 2.svg',
    '/companyLogo/logo 3.svg',
    '/companyLogo/logo 4.svg',
    '/companyLogo/logo 5.svg'
];

export const TESTIMONIAL_CONTENT: ITestimonial[] = [
    {
        id: '1',
        src: cardImage1,
        title: `In the artist's own experience, of course, art is fundamentally indefinable, unsayable`,
        description: `Tim Oliver, ordered Burger Extracheese`
    },
    {
        id: '2',
        src: cardImage2,
        title: `Fresh Ingredients, Exquisite Taste`,
        description: `James Anderson, savored the Caesar Salad`
    },
    {
        id: '3',
        src: cardImage3,
        title: `Deliciously Crafted for You`,
        description: `Linda Thompson, relished the Grilled Salmon`
    },
    {
        id: '4',
        src: cardImage4,
        title: `A Culinary Journey Like No Other`,
        description: `David Martinez, delighted in the Tacos Al Pastor`
    }
];

export const FOOTER_NAV_MENUS: string[] = [
    'Partners',
    'About Us',
    'Privacy Policy',
    'Contact Us'
];
export const FOOTER_LISTS = {
    address: [
        { id: '1', text: '123 Lorem Ipsum Street' },
        { id: '2', text: 'Tangerang, Banten' }
    ],
    restaurants: [
        { id: '1', text: 'All Restaurant' },
        { id: '2', text: 'Best Sellers' },
        { id: '3', text: 'Top Rated' },
        { id: '4', text: 'Newcomers' }
    ],
    faqs: [
        { id: '1', text: 'FAQ' },
        { id: '2', text: 'Join our program' },
        { id: '3', text: 'Be our partners' },
        { id: '4', text: 'Terms & Condition' }
    ],
    parentCompanys: [
        { id: '1', text: 'Our Parent Company' },
        { id: '2', text: 'Make an investment' }
    ]
};
