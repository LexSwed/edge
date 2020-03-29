import React from 'react';

import Input from './Input';

import { Props } from './utils';

import './styles.css';
import FieldWrapper from './FieldWrapper';

const TextField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <FieldWrapper {...props} ref={ref}>
      {(inputProps, inputRef) => <Input {...inputProps} ref={inputRef} />}
    </FieldWrapper>
  );
});

if (__DEV__) {
  TextField.displayName = 'FxTextField';
}

export default TextField;
