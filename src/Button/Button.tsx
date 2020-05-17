import React from 'react';

import Inline from '../Inline';
import { ButtonStyled, Tone } from './Button.styled';
import { Size } from '../@utils';

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
  return (
    <ButtonStyled {...props} ref={ref}>
      <Inline space={sizeToSpaceMap[props.size || 'm']} alignY="center" nowrap>
        {children}
      </Inline>
    </ButtonStyled>
  );
});

if (__DEV__) {
  Button.displayName = 'FxButton';
}

Button.defaultProps = {
  type: 'button',
  size: 'm',
};

export default Button;

/** Do not make it larger then 'm' */
const sizeToSpaceMap: Record<NonNullable<ButtonProps['size']>, React.ComponentProps<typeof Inline>['space']> = {
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'm',
  xl: 'm',
};

type ButtonProps = {
  /**
   * The size of the button
   * @default 'm'
   */
  size?: Size;
  /**
   * The color tone of the button
   */
  tone?: Tone;
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
