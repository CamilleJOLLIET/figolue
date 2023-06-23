import React from 'react';
import Typography, { TypographyProps } from './Typography';

import '@figolue/scss/lib/foundation/Typography.css';

export default {
  title: 'Foundation/Typography',
  component: Typography,
}

  const Template = (args: Record<string, JSX.IntrinsicAttributes & TypographyProps>) => {
    return <div>
      <h1>Test no font classes</h1>
      <Typography {...args[0]} />
      <Typography {...args[1]} />
      <Typography {...args[2]} />
      <Typography {...args[3]} />
      <Typography {...args[4]} />
      <Typography {...args[5]} />
      <Typography {...args[6]} />
      <Typography {...args[7]} />
      <Typography {...args[8]} />
      <Typography {...args[9]} />
      <Typography {...args[10]} />
      <Typography {...args[11]} />
      <Typography {...args[12]} />
      <Typography {...args[13]} />
      <Typography {...args[14]} />
      <Typography {...args[15]} />
    </div>
  };
  export const Heading = Template.bind({});
  Heading.args = [
    { children: "La Provence change", heading: 'heading-1' },
    { children: "La Provence change", heading: 'heading-2' },
    { children: "La Provence change", heading: 'heading-3-extrabold' },
    { children: "La Provence change", heading: 'heading-3-medium' },
    { children: "La Provence change", heading: 'heading-4-bold' },
    { children: "La Provence change", heading: 'heading-4-medium' },
    { children: "La Provence change", heading: 'heading-5-extrabold' },
    { children: "La Provence change", heading: 'heading-5-medium' },
    { children: "La Provence change, alors on change La Provence", heading: 'text-1-normal' },
    { children: "La Provence change, alors on change La Provence", heading: 'text-1-bold' },
    { children: "La Provence change, alors on change La Provence", heading: 'text-2-normal' },
    { children: "La Provence change, alors on change La Provence", heading: 'text-2-bold' },
    { children: "La Provence change, alors on change La Provence", heading: 'text-3-normal' },
    { children: "La Provence change, alors on change La Provence", heading: 'text-3-bold' },
    { children: "La Provence change, alors on change La Provence", heading: 'text-4-normal' },
    { children: "La Provence change, alors on change La Provence", heading: 'text-4-bold' },
  ]
  