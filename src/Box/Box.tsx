import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  padding?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';
  width?: number;
  height?: number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Box = React.forwardRef<HTMLDivElement, Props>(
  ({ padding = 'm', width, height, className, style, children, ...props }, ref) => {
    const classes = cx('fx-box', `fx-box--${padding}`, className);

    let styles: React.CSSProperties = { ...style };

    if (width) {
      styles.width = `${width}px`;
    }

    if (height) {
      styles.height = `${height}px`;
    }

    return (
      <div className={classes} style={styles} {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  Box.displayName = 'FxBox';
}

export default Box;
