import React from 'react';
import cx from 'classnames';

import { Size } from '../@utils';

import './styles.css';

type Props = {
  /**
   * Space between columns
   * @default 'm'
   */
  space?: Size;
  /**
   * Alignment of columns
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'spread' | 'apart';
  /**
   * Vertical alignment
   */
  alignY?: 'top' | 'center' | 'bottom';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Columns = React.forwardRef<HTMLDivElement, Props>(
  ({ space, align = 'left', alignY, children, className, ...props }, ref) => {
    return (
      <div
        className={cx(
          'fx-columns',
          space && `fx-columns--${space}`,
          `fx-columns--${align}`,
          alignY && `fx-columns--y-${alignY}`,
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  Columns.displayName = 'FxColumns';
}

export default Columns;
