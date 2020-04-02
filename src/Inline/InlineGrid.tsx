import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props<T extends string = string> = {
  /**
   * Space between items
   * @default 'm'
   */
  space?: 'none' | 'xs' | 's' | 'm' | 'l';
  /**
   * Render as element, native (JSX.IntrinsicElements) can be used
   * @default 'div'
   */
  as?: T;
} & React.HTMLProps<T>;

const InlineGrid = React.forwardRef<HTMLElement, Props>(
  ({ as = 'div', space = 's', children, className, ...props }, ref) => {
    const style = {
      ...props.style,
      '--columns-count': countNonNullChildren(children),
      '--grid-gap': spaceToGap[space],
    };

    return React.createElement(as, {
      className: cx('fx-inlinegrid', className),
      ...props,
      children,
      style,
      ref,
    });
  }
);

if (__DEV__) {
  InlineGrid.displayName = 'FxInlineGrid';
}

const spaceToGap: Record<NonNullable<Props['space']>, string> = {
  none: '0',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '32px',
};

export default InlineGrid;

function countNonNullChildren(children: Props['children']): number {
  return React.Children.toArray(children).length;
}
