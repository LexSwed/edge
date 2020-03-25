import React from 'react';
import Button from './Button';
import { withKnobs, select } from '@storybook/addon-knobs';

export default { title: 'Button', decorators: [withKnobs] };

// export const withText = () => (
//   <Button variant={select('Variant', ['flat'], 'default')}>Hello Button</Button>
// );
