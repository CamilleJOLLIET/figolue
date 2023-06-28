import React from 'react';
import { Heading, Text } from '@figolue/foundation';

export interface TypographyProps {
    typo?: keyof typeof Heading | keyof typeof Text;
    children: any;
};

const Typography: React.FC<TypographyProps> = ({ typo = Heading['heading-1'], children }) => {
    return <p className={`fig-margin-0 fig-${typo}`}>{children}</p>
}

export default Typography;