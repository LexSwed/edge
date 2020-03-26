import React from 'react';
import cx from 'classnames';

import './styles.css';

type Props = {
  padding?: 'xs' | 's' | 'm' | 'l' | 'xl';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Box = React.forwardRef<HTMLDivElement, Props>(({ padding = 'm', className, children, ...props }, ref) => {
  const classes = cx('fx-box', `fx-box--${padding}`, className);

  return (
    <div className={classes} {...props} ref={ref}>
      {children}
    </div>
  );
});

if (__DEV__) {
  Box.displayName = 'FxBox';
}

export default Box;
