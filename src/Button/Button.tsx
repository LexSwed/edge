import React from 'react';
import cx from 'classnames';

import Link from '../Link';

import './styles.css';

type Props = ButtonProps | AnchorProps;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ children, className, size, variant, ...props }, ref) => {
    const classes = cx(
      'fx-button',
      `fx-button--${size}`,
      `fx-button--${variant}`,
      className
    );

    if (hasHref(props)) {
      return (
        <Link
          {...(props as AnchorProps)}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        {...(props as ButtonProps)}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </button>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'fx-button';
}

Button.defaultProps = {
  size: 'm',
  variant: 'default'
};

export default Button;

interface CommonProps {
  className?: string;
  size?: 'xs' | 's' | 'm' | 'l';
  variant?:
    | 'default'
    | 'flat'
    | 'transparent'
    | 'primary'
    | 'warning'
    | 'danger';
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & {
    href?: undefined;
  };

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & {
    href: string;
  };

// Guard to check if href exists in props
function hasHref(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}
