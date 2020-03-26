import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  padding?: 'xs' | 's' | 'm' | 'l';
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ padding, className, children, ...props }, ref) => {
    return (
      <div
        className={cx('fx-card', `fx-card--${padding}`, className)}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  Card.displayName = 'fx-card';
}

Card.defaultProps = {
  padding: 'm'
};

export default Card;
