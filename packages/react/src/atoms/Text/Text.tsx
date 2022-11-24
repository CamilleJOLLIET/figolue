

import React from 'react';
import { FontSize } from '@figolue/foundation';

// Text Component model
export interface TextProps {
    size?: keyof typeof FontSize;
    children: any;
};

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
    const className = `fig-text fig-text-${size}`

    return <p className={className}>{children}</p>
}

export default Text;