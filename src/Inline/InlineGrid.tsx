import React from 'react';
import cx from 'classnames';

import { Size } from '../@utils';

import './styles.css';

type Props<T extends string = string> = {
  /**
   * Space between items
   */
  space?: Size;
  /**
   * Render as element, native (JSX.IntrinsicElements) can be used
   * @default 'div'
   */
  as?: T;
} & React.HTMLProps<T>;

const InlineGrid = React.forwardRef<HTMLElement, Props>(({ as = 'div', space, children, className, ...props }, ref) => {
  const style = {
    ...props.style,
    '--columns-count': countNonNullChildren(children),
    '--grid-gap': `var(--${space})`,
  };

  return React.createElement(as, {
    className: cx('fx-inlinegrid', className),
    ...props,
    children,
    style,
    ref,
  });
});

if (__DEV__) {
  InlineGrid.displayName = 'FxInlineGrid';
}

export default InlineGrid;

function countNonNullChildren(children: Props['children']): number {
  return React.Children.toArray(children).length;
}
