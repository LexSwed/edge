import React from 'react';

import Inline from '../Inline';
import { OptionStyled } from './Option.styled';

type Props = {
  value: React.OptionHTMLAttributes<HTMLOptionElement>['value'];
} & React.ComponentProps<typeof OptionStyled>;

const Option = React.forwardRef<HTMLLIElement, Props>(({ children, ...props }, ref) => {
  return (
    <OptionStyled role="option" aria-selected="false" {...props} ref={ref}>
      <Inline space="s" alignY="center" className="fx-option-inline" nowrap>
        {children}
      </Inline>
    </OptionStyled>
  );
});

if (__DEV__) {
  Option.displayName = 'FxOption';
}

export default Option;
