import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  /**
   * Space between items
   * @default 'm'
   */
  space?: 'none' | 'xs' | 's' | 'm' | 'l';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const InlineGrid = React.forwardRef<HTMLDivElement, Props>(({ space = 's', children, className, ...props }, ref) => {
  const style = {
    ...props.style,
    '--columns-count': React.Children.count(children),
    '--grid-gap': spaceToGap[space],
  };

  return (
    <div className={cx('fx-inlinegrid', className)} {...props} style={style} ref={ref}>
      {children}
    </div>
  );
});

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
