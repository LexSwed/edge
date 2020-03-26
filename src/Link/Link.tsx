import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
};

const Link = React.forwardRef<HTMLAnchorElement, Props>(({ active, children, className, ...props }, ref) => {
  return (
    <a className={cx('fx-link', active && 'fx-link--active', className)} {...props} ref={ref}>
      {children}
    </a>
  );
});

if (__DEV__) {
  Link.displayName = 'fx-link';
}

export default Link;
