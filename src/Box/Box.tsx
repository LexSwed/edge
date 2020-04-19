import React from 'react';
import cx from 'classnames';

import { SpacingProps, useSpacing } from '../@utils';

import './styles.css';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  SpacingProps & { elevation?: '0' | '1' | '2' };

const Box = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, style, p, pt, pl, pb, pr, px, py, m, mt, ml, mb, mr, mx, my, elevation, ...props }, ref) => {
    const classes = cx('fx-box', elevation && `fx-box--${elevation}`, className);
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
