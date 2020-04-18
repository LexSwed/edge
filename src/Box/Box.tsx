import React from 'react';
import cx from 'classnames';

import { SpacingProps, useSpacing } from '../@utils';

import './styles.css';

type Props = SpacingProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Box = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, style, p, pt, pl, pb, pr, px, py, m, mt, ml, mb, mr, mx, my, ...props }, ref) => {
    const classes = cx('fx-box', className);
    const styles = {
      ...style,
      ...useSpacing({ p, pt, pl, pb, pr, px, py, m, mt, ml, mb, mr, mx, my }),
    };

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
