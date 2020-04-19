import React from 'react';
import cx from 'classnames';

import Box from '../Box';

import './styles.css';

type Props = React.ComponentProps<typeof Box>;

const Card = React.forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <Box className={cx('fx-card', className)} {...props} ref={ref}>
      {children}
    </Box>
  );
});

if (__DEV__) {
  Card.displayName = 'FxCard';
}

Card.defaultProps = {
  p: 'm',
  elevation: '1',
};

export default Card;
