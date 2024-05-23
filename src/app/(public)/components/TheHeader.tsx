import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Button } from '@/components/core';
import Link from 'next/link';

const TheHeader = () => {
    return (
        <header className='sticky top-0 z-50 bg-gray-25 dark:backdrop-blur-sm dark:bg-gray-900/80 shadow-sm'>
            <nav className='container'>
                <section className='py-5 flex items-center justify-between gap-2'>
                    <Link
                        href='/'
                        className='inline-block text-primary-500 text-3.5xl sm:text-4xl font-extrabold dark:text-pink-700'
                    >
                        FoodDelivery
                    </Link>
                    <div className='flex items-center gap-4'>
                        <Button color='primary' className='w-auto'>
                            <Link
                                href='/auth/sign-in'
                                className='font-semibold'
                            >
                                Sign In
                            </Link>
                        </Button>
                        <ThemeSwitcher />
                    </div>
                </section>
            </nav>
        </header>
    );
};
export default TheHeader;
