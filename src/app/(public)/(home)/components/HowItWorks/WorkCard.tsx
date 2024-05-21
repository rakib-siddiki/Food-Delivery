import { Icons } from '@/components/Icons';
import React, { FC } from 'react';
import { IWorkCard } from '../../types';
type TIcons = keyof typeof Icons;
interface IProps extends Omit<IWorkCard, 'id'> {}
const WorkCard: FC<IProps> = ({ icon, title, description }) => {
    return (
        <div className='px-7 py-10 max-w-72 w-full h-[360px] shadow-sm rounded-[32px] dark:bg-gray-900 dark:border dark:border-gray-700/80'>
            {Icons[icon as TIcons]({ className: 'mx-auto' })}
            <h2 className='font-semibold tetx-lg text-primary-500 mt-5 mb-4'>
                {title}
            </h2>
            <p className='text-sm'>{description}</p>
        </div>
    );
};

export default WorkCard;
