import { FOOTER_LISTS, FOOTER_NAV_MENUS } from '@/static';
import Link from 'next/link';
import { ReactNode } from 'react';
import Image from 'next/image';
const { faqs, parentCompanys, restaurants, address } = FOOTER_LISTS;

const TheFooter = () => {
    return (
        <footer className='space-y-4 sm:space-y-9 relative'>
            <nav className='container'>
                <section className='flex max-xs:flex-col items-center max-lg:justify-between gap-2 lg:gap-40'>
                    <Link
                        href='/'
                        className='inline-block text-primary-500 text-3xl md:text-4xl font-extrabold dark:text-pink-700'
                    >
                        FoodDelivery
                    </Link>
                    <ul className='flex items-center gap-5 md:gap-11'>
                        {(FOOTER_NAV_MENUS ?? []).map((menu) => (
                            <li
                                key={menu}
                                className='font-semibold text-sm sm:text-lg'
                            >
                                {menu}
                            </li>
                        ))}
                    </ul>
                </section>
            </nav>
            <section className='bg-gray-25 dark:bg-gray-900'>
                <div className='container'>
                    <div className='flex max-lg:justify-between gap-5 lg:gap-56 py-8 sm:py-11 relative'>
                        <FooterList lists={address}>
                            <Link
                                href='tel:+10-234-5678'
                                className='text-xs xs:text-sm inline-block mt-8'
                            >
                                +10-234-5678
                            </Link>
                        </FooterList>
                        <div className='flex flex-wrap gap-3 sm:gap-10'>
                            <FooterList lists={restaurants} />
                            <FooterList lists={faqs} />
                            <FooterList lists={parentCompanys} />
                        </div>
                    </div>
                </div>
                <div className=' hidden lg:block absolute bottom-0 right-0 '>
                    <Image
                        src={'/footerShape.png'}
                        alt='shape'
                        width={0}
                        height={0}
                        unoptimized
                        className='lg:w-[400px] xl:w-full xl:max-w-screen-xs h-full'
                    />
                </div>
            </section>
        </footer>
    );
};

export default TheFooter;

const FooterList = ({
    lists,
    children
}: {
    lists: { id: string; text: string }[];
    children?: ReactNode;
}) => {
    return (
        <ul>
            {(lists ?? []).map(({ id, text: list }) => (
                <li className='text-xs xs:text-sm' key={id}>
                    {list}
                </li>
            ))}
            {children ? <>{children}</> : null}
        </ul>
    );
};
