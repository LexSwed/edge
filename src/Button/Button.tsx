import React from 'react';

import Inline from '../Inline';
import { ButtonStyled, Variant, SpinnerWrapper } from './Button.styled';
import { Size } from '../@utils';
import Spinner from '../Spinner';

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, loading, size = 'm', onClick, ...props }, ref) => {
    return (
      <ButtonStyled {...props} onClick={loading ? undefined : onClick} size={size} ref={ref}>
        {loading && (
          <SpinnerWrapper>
            <Spinner
              size={sizeToSpinnerMap[size]}
              variant={props.variant && ['brand', 'critical'].includes(props.variant) ? 'light' : 'dark'}
            />
          </SpinnerWrapper>
        )}
        <Inline space={sizeToSpaceMap[size]} alignY="center" align="center" nowrap>
          {children}
        </Inline>
      </ButtonStyled>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'FxButton';
}

Button.defaultProps = {
  type: 'button',
};

export default Button;

/** Do not make it larger then 'm' */
const sizeToSpaceMap: Record<Size, Size> = {
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'm',
  xl: 'm',
};

const sizeToSpinnerMap: Record<Size, React.ComponentProps<typeof Spinner>['size']> = {
  xs: 'xs',
  s: 'xs',
  m: 's',
  l: 's',
  xl: 'm',
};

type ButtonProps = {
  /**
   * The size of the button
   * @default 'm'
   */
  size?: Size;
  /**
   * Button variant
   */
  variant?: Variant;
  /**
   * Show spinner state
   */
  loading?: boolean;
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
