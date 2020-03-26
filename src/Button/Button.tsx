import React from 'react';
import cx from 'classnames';

import './styles.css';

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ size = 'm', variant = 'default', className, children, ...props }, ref) => {
    const classes = cx(
      'fx-button',
      `fx-button--${size}`,
      `fx-button--${variant}`,
      className
    );

    return (
      <button {...props} className={classes} ref={ref}>
        {children}
      </button>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'FxButton';
}

export default Button;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * The size of the button
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l';
  /**
   * The color variant of the button
   * @default 'default'
   */
  variant?:
    | 'default'
    | 'flat'
    | 'transparent'
    | 'primary'
    | 'warning'
    | 'error';
};
