import { cn } from '@/app/utils';
import React, { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: 'primary' | 'white';
    children: React.ReactNode;
    className?: string;
}

const colorClasses = {
    primary:
        'border-transparent text-white bg-primary-500 hover:bg-primary-400 focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600',
    white: 'border-gray-300 text-gray-700 bg-white hover:text-gray-500 focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50'
};
const baseClasses =
    'w-full inline-flex items-center justify-center px-4 py-2 border text-sm leading-5 font-semibold rounded-full min-w-fit focus:outline-none transition ease-in-out duration-100';

const Button = ({ color, children, className, ...rest }: IProps) => {
    return (
        <>
            <button
                {...rest}
                className={cn(baseClasses, colorClasses[color], className)}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
