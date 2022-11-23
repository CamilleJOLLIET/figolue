import React from 'react';
import { Spacing, Theme } from '@figolue/foundation';

export interface ButtonProps {
  label: String;
  disabled: boolean;
  paddingX?: keyof typeof Spacing;
  paddingY?: keyof typeof Spacing;
  theme?: keyof typeof Theme;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label, paddingX = Spacing.xxs, paddingY = Spacing.xxxs, theme = Theme.primary, disabled = false }) => {
  const className = `fig-button__container fig-button__container--${theme} fig-padding-x-${paddingX} fig-padding-y-${paddingY}`;
  return <button className={className} disabled={disabled} >{label}</button>;
}

export default Button;