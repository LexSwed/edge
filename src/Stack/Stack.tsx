import React from 'react';
import { renderValidChild, Size } from '../@utils';

import { StackStyled, StackChildStyled } from './Stack.styled';

type Props = React.ComponentProps<typeof StackStyled> & {
  /**
   * Space between elements
   * @default 'm'
   */
  space?: Size;
  /**
   * Children alignment
   */
  align?: 'left' | 'right' | 'center';
};

const Stack = React.forwardRef<HTMLDivElement, Props>(({ space = 'm', align, children, ...props }, ref) => {
  return (
    <StackStyled align={align} {...props} ref={ref}>
      {renderValidChild(children, (child) =>
        child ? <StackChildStyled space={space}>{child}</StackChildStyled> : null
      )}
    </StackStyled>
  );
});

if (__DEV__) {
  Stack.displayName = 'FxStack';
}

export default Stack;
