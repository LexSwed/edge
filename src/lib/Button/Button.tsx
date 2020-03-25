import React from 'react';

import { ButtonStyled, Props } from './utils';

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
  return (
    <ButtonStyled {...props} ref={ref}>
      {children}
    </ButtonStyled>
  );
});

Button.defaultProps = {
  size: 'm',
  variant: 'default',
};

if (__DEV__) {
  Button.displayName = 'fx-button';
}

export default Button;
