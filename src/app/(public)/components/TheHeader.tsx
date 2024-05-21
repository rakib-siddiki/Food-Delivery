import ThemeSwitcher from '@/components/ThemeSwitcher';
import Link from 'next/link';

const TheHeader = () => {
    return (
        <header className='container'>
            <nav className='py-6 flex items-center justify-between'>
                <Link
                    href='/'
                    className='inline-block text-primary-500 text-3xl font-extrabold dark:text-pink-700'
                >
                    FoodDelivery
                </Link>
                <div className='flex items-center gap-4'>
                    <Link href='/auth/sign-in' className='font-semibold'>
                        Sign In
                    </Link>
                    <ThemeSwitcher />
                </div>
            </nav>
        </header>
    );
};

export default TheHeader;
