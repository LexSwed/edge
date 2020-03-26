import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  /** Specifies level of the Heading */
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  /** Specifies font-weight: default bold or lighter */
  tone?: 'default' | 'light';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const Heading = React.forwardRef<HTMLHeadingElement, Props>(
  ({ as = 'h1', tone, className, children, ...props }, ref) => {
    const Tag = as;

    return (
      <Tag className={cx('fx-heading', `fx-heading--${as}`, `fx-heading--${tone}`, className)} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

if (__DEV__) {
  Heading.displayName = 'FxHeading';
}

Heading.defaultProps = {
  as: 'h1',
  tone: 'default',
};

export default Heading;
