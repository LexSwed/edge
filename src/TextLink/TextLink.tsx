import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
};

const TextLink = React.forwardRef<HTMLAnchorElement, Props>(({ active, children, className, ...props }, ref) => {
  return (
    <a className={cx('fx-textlink', active && 'fx-textlink--active', className)} {...props} ref={ref}>
      {children}
    </a>
  );
});

if (__DEV__) {
  TextLink.displayName = 'FxTextLink';
}

export default TextLink;
