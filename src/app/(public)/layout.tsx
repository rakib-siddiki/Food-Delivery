import React, { ReactNode } from 'react';
import { TheHeader } from './components';
import { Metadata } from 'next';
import { SITE_TITLE_DEFAULT, SITE_TITLE_TEMPLATE_DEFAULT } from '@/configs';

export const metadata: Metadata = {
    title: {
        default: SITE_TITLE_DEFAULT,
        template: SITE_TITLE_TEMPLATE_DEFAULT
    }
};
const PublicLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <TheHeader />
            {children}
        </div>
    );
};

export default PublicLayout;
