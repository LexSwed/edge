import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  /**
   * Space between columns
   * @default 'm'
   */
  space: 'xs' | 's' | 'm' | 'l' | 'xl' | 'apart' | 'spread';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Columns = React.forwardRef<HTMLDivElement, Props>(({ space = 'm', children, className, ...props }, ref) => {
  return (
    <div className={cx('fx-columns', `fx-columns--${space}`, className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

if (__DEV__) {
  Columns.displayName = 'FxColumns';
}

export default Columns;
