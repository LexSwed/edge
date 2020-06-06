import React from 'react';

import Box from '../Box';

type Props = React.ComponentProps<typeof Box>;

const Placeholder = React.forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  return (
    <Box
      bg="shade.100"
      border="2px solid"
      borderColor="shade.300"
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...props}
      ref={ref}
    >
      {children}
    </Box>
  );
});

if (__DEV__) {
  Placeholder.displayName = 'FxPlaceholder';
}

export default Placeholder;
