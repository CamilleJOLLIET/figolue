import React from 'react';
import Typography, { TypographyProps } from './Typography';

import '@figolue/scss/lib/foundation/Typography.css';

export default {
  title: 'Foundation/Typography',
  component: Typography,
  parameters:{
    controls:{
        exclude:/.*/g
    }
  }
}

  const HeadingTemplate = (args: Record<string, JSX.IntrinsicAttributes & TypographyProps>) => {
    return <div>
      <h1>Test no font classes</h1>
      <Typography {...args['heading-1']} />
      <Typography {...args['heading-2']} />
      <Typography {...args['heading-3-extrabold']} />
      <Typography {...args['heading-3-medium']} />
      <Typography {...args['heading-4-bold']} />
      <Typography {...args['heading-4-medium']} />
      <Typography {...args['heading-5-extrabold']} />
      <Typography {...args['heading-5-medium']} />
    </div>
  };
  export const Heading = HeadingTemplate.bind({});
  Heading.args = {
    'heading-1': { children: "Heading 1", typo: 'heading-1' },
    'heading-2': { children: "Heading 2", typo: 'heading-2' },
    'heading-3-extrabold': { children: "Heading 3 extrabold", typo: 'heading-3-extrabold' },
    'heading-3-medium': { children: "Heading 3 medium", typo: 'heading-3-medium' },
    'heading-4-bold': { children: "Heading 4 bold", typo: 'heading-4-bold' },
    'heading-4-medium': { children: "Heading 4 medium", typo: 'heading-4-medium' },
    'heading-5-extrabold': { children: "Heading 5 extrabold", typo: 'heading-5-extrabold' },
    'heading-5-medium': { children: "Heading 5 medium", typo: 'heading-5-medium' },
  }
  
  const TextTemplate = (args: Record<string, JSX.IntrinsicAttributes & TypographyProps>) => {
    return <div>
      <Typography {...args['text-1-normal']} />
      <Typography {...args['text-1-bold']} />
      <Typography {...args['text-2-normal']} />
      <Typography {...args['text-2-bold']} />
      <Typography {...args['text-3-normal']} />
      <Typography {...args['text-3-bold']} />
      <Typography {...args['text-4-normal']} />
      <Typography {...args['text-4-bold']} />
    </div>
  };
  export const Text = TextTemplate.bind({});
  Text.args = {
    'text-1-normal': { children: "La Provence change, alors on change La Provence", typo: 'text-1-normal' },
    'text-1-bold': { children: "La Provence change, alors on change La Provence", typo: 'text-1-bold' },
    'text-2-normal': { children: "La Provence change, alors on change La Provence", typo: 'text-2-normal' },
    'text-2-bold': { children: "La Provence change, alors on change La Provence", typo: 'text-2-bold' },
    'text-3-normal': { children: "La Provence change, alors on change La Provence", typo: 'text-3-normal' },
    'text-3-bold': { children: "La Provence change, alors on change La Provence", typo: 'text-3-bold' },
    'text-4-normal': { children: "La Provence change, alors on change La Provence", typo: 'text-4-normal' },
    'text-4-bold': { children: "La Provence change, alors on change La Provence", typo: 'text-4-bold' },
  }