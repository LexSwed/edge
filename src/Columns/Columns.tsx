import React from 'react';
import { ColumnsStyled, Props } from './Columns.styled';

const Columns = React.forwardRef<HTMLDivElement, Props>(({ children, align, alignY, ...props }, ref) => {
  return (
    <ColumnsStyled align={align} alignY={alignY} {...props} ref={ref}>
      {children}
    </ColumnsStyled>
  );
});

if (__DEV__) {
  Columns.displayName = 'FxColumns';
}

export default Columns;
