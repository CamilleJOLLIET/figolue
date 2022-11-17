import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@figolue/react';
import Spacing from '@figolue/react/src/foundation/Spacing';
import '@figolue/scss/lib/atoms/Button.css';
import '@figolue/scss/lib/utilities/Spacing.css';

ReactDOM.render(
    <Button label="Example" paddingX={Spacing.xs} paddingY={Spacing.xxxs} />,
    document.querySelector('#root')
);