
import React from 'react';
import Color, { ColorProps } from './Color';

import '@figolue/scss/lib/utilities/Spacing.css';

export default {
    title: 'Atoms/Color',
    component: Color,
    argTypes: {
        hexCode: {
            control: { type: 'color' }
        }
    }
}

const Template = (args: JSX.IntrinsicAttributes & ColorProps) => <Color {...args} />;
export const Common = Template.bind({});
Common.args = {
    hexCode: 'pink'
}
