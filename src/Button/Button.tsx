import React from 'react';
import cx from 'classnames';

import Inline from '../Inline';
import { Size } from '../@utils';

import './styles.css';

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ size = 'm', tone, className, children, ...props }, ref) => {
    const classes = cx('fx-button', `fx-button--${size}`, tone && `fx-button--${tone}`, className);

    return (
      <button {...props} className={classes} ref={ref}>
        <Inline space={sizeToSpaceMap[size]} alignY="center" nowrap>
          {children}
        </Inline>
      </button>
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
const sizeToSpaceMap: Record<NonNullable<Props['size']>, React.ComponentProps<typeof Inline>['space']> = {
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
  tone?: 'flat' | 'transparent' | 'brand' | 'critical';
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
