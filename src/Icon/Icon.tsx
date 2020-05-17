import React from 'react';
import cx from 'classnames';

import { IconStyled } from './Icon.styled';

type Props = React.ComponentProps<typeof IconStyled> & {
  icon: string;
};

const Icon = React.forwardRef<HTMLElement, Props>(({ icon, className, ...props }, ref) => {
  return (
    <IconStyled className={cx('material-icons', className)} {...props} ref={ref}>
      {icon}
    </IconStyled>
  );
});

if (__DEV__) {
  Icon.displayName = 'FxIcon';
}

export default Icon;
