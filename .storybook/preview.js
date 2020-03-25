import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';

import Edge from '../src/Edge';

addDecorator(withKnobs);
addDecorator(addReadme);
addDecorator(storyFn => <Edge>{storyFn()}</Edge>);
