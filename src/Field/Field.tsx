import React from 'react';
import cx from 'classnames';

import Stack from '../Stack';

import './styles.css';

type Props = React.ComponentProps<typeof Stack>;

const Field = React.forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <Stack space="xs" className={cx('fx-field', className)} {...props} ref={ref}>
      {children}
    </Stack>
  );
});

if (__DEV__) {
  Field.displayName = 'FxField';
}

export default Field;
