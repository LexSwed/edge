import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  /**
   * Space between columns
   * @default 'm'
   */
  space: 'xs' | 's' | 'm' | 'l' | 'xl';
  /**
   * Alignment of columns
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'spread' | 'apart';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Columns = React.forwardRef<HTMLDivElement, Props>(
  ({ space = 'm', align = 'left', children, className, ...props }, ref) => {
    return (
      <div className={cx('fx-columns', `fx-columns--${space}`, `fx-columns--${align}`, className)} {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  Columns.displayName = 'FxColumns';
}

export default Columns;
