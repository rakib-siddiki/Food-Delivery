import { cn } from '@/app/utils';
import { Icons } from '@/components/Icons';
import Image, { ImageProps } from 'next/image';
import React, { FC } from 'react';
import { ICard } from '@/app/(public)/(home)/types';
type IProps = ImageProps & Omit<ICard, 'id'>;
const Card: FC<IProps> = (props) => {
    const {
        title,
        fee,
        time: { min, max },
        ...rest
    } = props;
    return (
        <section className='h-fit'>
            <Image
                {...rest}
                alt='card image'
                placeholder='blur'
                className={cn(
                    'size-full object-cover rounded-xl sm:rounded-4xl mb-4',
                    rest.className
                )}
            />
            <h3 className='text-2xl '>{title}</h3>
            <div className='flex items-center justify-between text-sm md:text-lg'>
                <span className='inline-flex items-center gap-2'>
                    <Icons.Bell /> $ {fee} Delivery Fee
                </span>
                <span className='inline-flex items-center gap-2'>
                    <Icons.Clock /> {min} - {max} mins
                </span>
            </div>
        </section>
    );
};

export default Card;
