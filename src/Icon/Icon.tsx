import React from 'react';

import { IconStyled } from './Icon.styled';
import { Size } from '../@utils';

type Props = React.ComponentProps<typeof IconStyled> & {
  icon: string;
  size: Size;
};

const Icon = React.forwardRef<HTMLElement, Props>(({ icon, ...props }, ref) => {
  return (
    <IconStyled {...props} ref={ref}>
      {icon}
    </IconStyled>
  );
});

if (__DEV__) {
  Icon.displayName = 'FxIcon';
}

Icon.defaultProps = {
  size: 'm',
};

export default Icon;
