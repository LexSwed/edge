import React from 'react';
import { LinkStyled, Props } from './utils';

const Link = React.forwardRef<HTMLAnchorElement, Props>(({ active, children, ...props }, ref) => {
  return (
    <LinkStyled {...props} ref={ref}>
      {children}
    </LinkStyled>
  );
});

export default Link;
