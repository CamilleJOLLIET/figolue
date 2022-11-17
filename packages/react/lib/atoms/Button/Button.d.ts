import React from 'react';
import { Spacing, Colors } from '@figolue/foundation';
interface ButtonProps {
    label: String;
    paddingX?: keyof typeof Spacing;
    paddingY?: keyof typeof Spacing;
    color?: keyof typeof Colors;
}
declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;
