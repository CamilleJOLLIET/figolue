import React from 'react';
import Button, { ButtonProps } from './Button';

import '@figolue/scss/lib/atoms/Button.css';
import '@figolue/scss/lib/utilities/Spacing.css';
import themes from '@figolue/foundation/lib/Theme';

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    theme: {
      control: {
        type: 'radio',
        options: Object.values(themes)
      }
    }
  }
}


const Template = (args: JSX.IntrinsicAttributes & ButtonProps ) => <Button {...args} />;
export const Primary = Template.bind({});
export const ButtonWithControls = Template.bind({});
ButtonWithControls.args = {
  label: 'Abonne toi wesh !',
  paddingX: 'xs',
  paddingY: 'xxxs',
  theme: 'primary',
  disabled: false
};

Primary.args = {
  label: 'Abonne toi wesh !',
  paddingX: 'xs',
  paddingY: 'xxxs',
  theme: 'primary',
  disabled: false
};