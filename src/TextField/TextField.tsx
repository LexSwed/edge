import React from 'react';

import Field from 'Field';
import FieldInput from 'Field/FieldInput';
import type { FieldInputProps } from 'Field/utils';

type Props = Omit<FieldInputProps, 'onClear'> & {
  allowClear?: boolean;
} & React.ComponentProps<typeof Field>;

const TextField: React.FC<Props> = ({
  allowClear,
  label,
  message,
  placeholder,
  value,
  onChange,
  disabled,
  autoFocus,
  autoComplete,
  type,
  name,
  icon,
  size,
  tone,
  inputProps,
  ...props
}) => {
  return (
    <Field {...props}>
      <FieldInput
        label={label}
        message={message}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        type={type}
        name={name}
        icon={icon}
        size={size}
        tone={tone}
        inputProps={inputProps}
        onClear={allowClear ? onClear : undefined}
      />
    </Field>
  );
};

if (__DEV__) {
  TextField.displayName = 'FxTextField';
}

export default TextField;

function onClear() {}
