import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                '2xl': '6.5rem'
            },
            screens: {
                xl: '1280px',
                '2xl': '1400px'
            }
        },
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                primary: {
                    50: '#FFD0D8',
                    300: '#FF6A90',
                    400: '#FB0E74',
                    500: '#F40469'
                },
                gray: {
                    50: '#F5F5F5',
                    100: '#C5CBD1',
                    200: '#B9BABE',
                    300: '#A1A3A8',
                    400: '#8A8C93',
                    500: '#73747D',
                    600: '#5B5D67',
                    700: '#283646',
                    800: '#2C2F3C',
                    900: '#151826'
                }
            },
            fontFamily: {
                jost: ['var(--font-jost)']
            },
            fontSize: {
                xs: ['12px', '16px'],
                sm: ['14px', '20px'],
                base: ['16px', '24px'],
                lg: ['18px', '28px'],
                xl: ['20px', '32px'],
                '2xl': ['22px', '36px'],
                '3xl': ['24px', '40px'],
                '3.5xl': ['32px', '48px'],
                '4xl': ['36px', '40px'],
                '5xl': ['48px', '64px'],
                '6xl': ['56px', '72px']
            },
            boxShadow: {
                base: '0px 24px 60px 0px rgba(21, 24, 38, 0.15)'
            }
        }
    },
    plugins: [require('autoprefixer')]
};
export default config;
