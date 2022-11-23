import React from 'react';
import { Spacing, Colors } from '@figolue/foundation';

export interface ButtonProps {
  label: String;
  paddingX?: keyof typeof Spacing;
  paddingY?: keyof typeof Spacing;
  color?: keyof typeof Colors;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label, paddingX = Spacing.xxs, paddingY = Spacing.xxxs }) => {
  const className = `fig-button__container fig-padding-x-${paddingX} fig-padding-y-${paddingY}`;
  return <button className={className}>{label}</button>;
}

export default Button;