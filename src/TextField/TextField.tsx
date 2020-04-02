import React from 'react';

import { Props, useMergedInputProps } from './utils';

import Field from 'Field';
import FieldInput from 'Field/FieldInput';

import './styles.css';
import Input from './Input';

const TextField = React.forwardRef<HTMLDivElement, Props>(
  ({ label, message, tone, size, icon, disabled, allowClear, inputProps, ...props }, ref) => {
    const mergedProps = useMergedInputProps({ inputProps, disabled, ...props });

    return (
      <Field label={label} message={message} tone={tone} disabled={disabled} {...props} ref={ref}>
        <FieldInput
          className="fx-textfield"
          icon={icon}
          clearButton={allowClear && mergedProps.value ? 'shown' : 'hidden'}
          tone={tone}
          size={size}
          inputRef={inputProps?.ref}
        >
          <Input {...mergedProps} />
        </FieldInput>
      </Field>
    );
  }
);

if (__DEV__) {
  TextField.displayName = 'FxTextField';
}

export default TextField;
