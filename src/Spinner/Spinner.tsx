import React from 'react';

import { Size } from '../@utils';

import Logo from '../Logo';
import { Wrapper, Particle } from './Spinner.styled';

type Props = {
  /**
   * Size of the spinner
   * @default 'm'
   */
  size?: Size;
  /**
   * Color of the spinner
   * @default 'dark'
   */
  tone?: 'dark' | 'light' | 'brand';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Spinner = React.forwardRef<HTMLDivElement, Props>(({ size = 'm', tone = 'dark', ...props }, ref) => {
  return (
    <Wrapper size={size} aria-busy="true" aria-live="polite" {...props} ref={ref}>
      <Particle size={size} tone={tone} />
      <Particle size={size} tone={tone} />
      <Particle size={size} tone={tone} />
      <Particle size={size} tone={tone} />
      {size === 'xl' && <Logo size="s" tone={tone} />}
    </Wrapper>
  );
});

if (__DEV__) {
  Spinner.displayName = 'FxSpinner';
}

export default Spinner;
