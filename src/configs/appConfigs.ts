import { Jost } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'Food Delivery';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - food-delivery`;
export const SITE_DESCRIPTION_DEFAULT = 'This is a food delivery app';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Jost({
    subsets: ['latin'],
    variable: '--font-jost'
});
