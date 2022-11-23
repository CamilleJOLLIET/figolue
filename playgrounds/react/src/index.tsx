import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@figolue/react';
import '@figolue/scss/lib/atoms/Button.css';
import '@figolue/scss/lib/utilities/Spacing.css';

ReactDOM.render(
    <Button label="Example" paddingX='xs' paddingY='xxxs' />,
    document.querySelector('#root')
);