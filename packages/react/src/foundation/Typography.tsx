import React from 'react';
import { Heading } from '@figolue/foundation';

export interface TypographyProps {
    heading?: keyof typeof Heading;
    children: any;
};

const Typography: React.FC<TypographyProps> = ({ heading = Heading['text-1-normal'], children }) => {
    return <p className={`fig-margin-0 fig-${heading}`}>{children}</p>
}

export default Typography;