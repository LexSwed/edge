import React from 'react';
import cx from 'classnames';

import './styles.css';

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ size = 'm', tone = 'default', className, children, ...props }, ref) => {
    const classes = cx('fx-button', `fx-button--${size}`, `fx-button--${tone}`, className);

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
   * The color tone of the button
   * @default 'default'
   */
  tone?: 'default' | 'flat' | 'transparent' | 'accent' | 'critical';
};
