import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  /**
   * Width of the column
   * @default fluid
   */
  width?: 'content' | 'fluid' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/4' | '2/5' | '3/5' | '4/5';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Column = React.forwardRef<HTMLDivElement, Props>(({ width = 'fluid', children, className, ...props }, ref) => {
  return (
    <div className={cx('fx-column', `fx-column--${width.split('/').join('-')}`, className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

if (__DEV__) {
  Column.displayName = 'FxColumn';
}

export default Column;
