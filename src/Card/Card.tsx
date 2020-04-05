import React from 'react';
import cx from 'classnames';

import Box from '../Box';

import './styles.css';

type Props = {
  /**
   * Content padding
   * @default 'm'
   */
  padding?: React.ComponentProps<typeof Box>['padding'];
  elevation?: '0' | '1' | '2';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, Props>(({ elevation = '1', className, children, ...props }, ref) => {
  return (
    <Box className={cx('fx-card', `fx-card--${elevation}`, className)} {...props} ref={ref}>
      {children}
    </Box>
  );
});

if (__DEV__) {
  Card.displayName = 'FxCard';
}

Card.defaultProps = {
  padding: 'm',
};

export default Card;
