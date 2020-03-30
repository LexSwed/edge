import React from 'react';
import cx from 'classnames';

import Inline from '../Inline';

import './styles.css';

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ size = 'm', tone, className, children, ...props }, ref) => {
    const classes = cx('fx-button', `fx-button--${size}`, tone && `fx-button--${tone}`, className);

    return (
      <button {...props} className={classes} ref={ref}>
        {React.Children.count(children) > 1 ? (
          <Inline alignY="center" space={sizeToSpaceMap[size]} nowrap>
            {children}
          </Inline>
        ) : (
          children
        )}
      </button>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'FxButton';
}

export default Button;

/** Do not make it larger then 'm' */
const sizeToSpaceMap: Record<NonNullable<ButtonProps['size']>, React.ComponentProps<typeof Inline>['space']> = {
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'm',
};

type ButtonProps = {
  /**
   * The size of the button
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l';
  /**
   * The color tone of the button
   */
  tone?: 'flat' | 'transparent' | 'accent' | 'critical';
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
