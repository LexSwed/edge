import React from 'react';
import cx from 'classnames';

import './style.css';

const Inline = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      space = 'm',
      align = 'left',
      alignY = 'top',
      nowrap = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cx(
      'fx-inline',
      `fx-inline--${space}`,
      `fx-inline--${align}`,
      `fx-inline--y-${alignY}`,
      nowrap && 'fx-inline--nowrap',
      className
    );
    return (
      <div className={classes} {...props} ref={ref}>
        {React.Children.map(children, child => (
          <div className="fx-inline__child">{child}</div>
        ))}
      </div>
    );
  }
);

if (__DEV__) {
  Inline.displayName = 'FxInline';
}

export default Inline;

type Props = {
  /**
   * Space between items
   * @default 'm'
   */
  space?: 'none' | 'xs' | 's' | 'm' | 'l';
  /**
   * Horizontal alignment
   * @default 'left'
   */
  align?: 'left' | 'right' | 'center';
  /**
   * Vertical alignment
   * @default 'top'
   */
  alignY?: 'top' | 'bottom' | 'center';
  /**
   * Disable wrapping elements to new line
   * @default false
   */
  nowrap?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
