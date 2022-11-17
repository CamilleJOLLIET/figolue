import React from 'react';
import { Spacing } from '@figolue/foundation';

const Button = ({ label, paddingX = Spacing.xxs, paddingY = Spacing.xxxs }) => {
    const className = `fig-button__container fig-padding-x-${paddingX} fig-padding-y-${paddingY}`;
    return React.createElement("button", { className: className }, label);
};

export { Button as default };
//# sourceMappingURL=Button.js.map
