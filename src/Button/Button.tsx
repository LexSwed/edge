import React from 'react';
import cx from 'classnames';
import { MenuButton as ReachMenuButton } from '@reach/menu-button';

import Inline from '../Inline';

import './styles.css';

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ menuButton = false, size = 'm', tone, className, children, ...props }, ref) => {
    const classes = cx('fx-button', `fx-button--${size}`, tone && `fx-button--${tone}`, className);
    const Component = menuButton ? ReachMenuButton : 'button';

    return (
      <Component {...props} className={classes} ref={ref}>
        {React.Children.count(children) > 1 ? (
          <Inline alignY="center" space={size}>
            {children}
          </Inline>
        ) : (
          children
        )}
      </Component>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'FxButton';
}

export default Button;

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
  /**
   * Renders menu button
   * @default false
   */
  menuButton?: boolean;
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
