import React from 'react';

import Field from '../Field';
import FieldMessage from '../FieldMessage';
import { useMergedInputProps, InputProps } from '../Field/utils';
import { Input, InlineWrapper, CheckMark, Label } from './Checkbox.styled';
import Box from '../Box';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  label?: string;
  message?: string;
  tone?: React.ComponentProps<typeof FieldMessage>['tone'];
  name?: InputProps['name'];
  value?: InputProps['value'];
  checked?: InputProps['checked'];
  disabled?: InputProps['disabled'];
  onChange?: InputProps['onChange'];
  inputRef?: InputProps['ref'];
  inputProps?: InputProps;
};

const Checkbox = React.forwardRef<HTMLDivElement, Props>(
  (
    { label, message, tone, name, value, checked, disabled, onChange, inputRef, inputProps, children, ...props },
    ref
  ) => {
    const mergedInputProps = useMergedInputProps({
      label,
      message,
      name,
      value,
      checked,
      disabled,
      onChange,
      inputProps,
    });

    return (
      <Field {...props} ref={ref}>
        <InlineWrapper checked={checked} disabled={disabled}>
          <Box display="inline-flex">
            <Input {...mergedInputProps} type="checkbox" ref={inputRef} />
            <CheckMark checked={checked} />
          </Box>
          <Label id={mergedInputProps['aria-labelledby']} htmlFor={mergedInputProps.id} disabled={disabled}>
            {label}
          </Label>
        </InlineWrapper>
        {message && (
          <FieldMessage id={mergedInputProps['aria-describedby']} tone={tone}>
            {message}
          </FieldMessage>
        )}
        {checked && children}
      </Field>
    );
  }
);

if (__DEV__) {
  Checkbox.displayName = 'FxCheckbox';
}

export default Checkbox;
