import React from 'react';

import Box from '../Box';
import theme from '../Edge/theme';

type Props = React.ComponentProps<typeof Box> & {
  elevation: keyof typeof theme.shadows;
};

const Card = React.forwardRef<HTMLDivElement, Props>(({ children, elevation, ...props }, ref) => {
  return (
    <Box {...props} boxShadow={elevation} bg="#fff" borderRadius="m" ref={ref}>
      {children}
    </Box>
  );
});

if (__DEV__) {
  Card.displayName = 'FxCard';
}

Card.defaultProps = {
  p: 'm',
  elevation: 1,
};

export default Card;
