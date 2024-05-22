import { COMPANYS_LOGO } from '@/static';
import Image from 'next/image';
import React from 'react';

const Pratners = () => {
    return (
        <div className='flex flex-wrap items-center justify-center gap-5 md:gap-10'>
            {(COMPANYS_LOGO || []).map((logo) => (
                <Image
                    key={logo}
                    src={logo}
                    alt='food image'
                    width={165}
                    height={105}
                />
            ))}
        </div>
    );
};
export default Pratners;
