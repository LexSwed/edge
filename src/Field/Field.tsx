import React from 'react';

import Stack from '../Stack';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Field = React.forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  return (
    <Stack space="xs" {...props} ref={ref}>
      {children}
    </Stack>
  );
});

if (__DEV__) {
  Field.displayName = 'FxField';
}

export default Field;
