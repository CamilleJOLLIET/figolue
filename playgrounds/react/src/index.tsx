import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@figolue/react';
import { Typography } from '@figolue/react';
import '@figolue/scss/lib/global.css';
import '@figolue/scss/lib/foundation/Typography.css';
import '@figolue/scss/lib/atoms/Button.css';
import '@figolue/scss/lib/utilities/Spacing.css';

ReactDOM.render(
    <div>
        <Button label="Example" paddingX='xs' paddingY='xxxs' />
        <h3>Test H3</h3>
        <Typography children="La Provence change, alors on change La Provence" typo='text-1-normal' />
    </div>,
    document.querySelector('#root')
);