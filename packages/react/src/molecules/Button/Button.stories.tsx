import React from 'react';
import Button, { ButtonProps } from './Button';

import '@figolue/scss/lib/atoms/Button.css';
import '@figolue/scss/lib/utilities/Spacing.css';

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' }
    }
  }
}

export const Primary = () => <Button label="Abonne toi wesh !" paddingX="xs" paddingY="xxxs" />;

const Template = (args: JSX.IntrinsicAttributes & ButtonProps ) => <Button {...args} />;
export const ButtonWithControls = Template.bind({});
ButtonWithControls.args = {
  label: 'Abonne toi wesh !',
  paddingX: 'xs',
  paddingY: 'xxxs'
};