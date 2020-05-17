import React from 'react';

import './styles.css';
import Field from '../Field';
import FieldLabel from '../FieldLabel';
import FieldMessage from '../FieldMessage';
import { useMergedInputProps, InputProps } from '../Field/utils';
import { Input, InlineWrapper, CheckMark, CheckBoxWrapper } from './Checkbox.styled';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  label?: string;
  message?: string;
  tone?: React.ComponentProps<typeof FieldMessage>['tone'];
  name?: InputProps['name'];
  value?: InputProps['value'];
  checked?: InputProps['checked'];
  onChange?: InputProps['onChange'];
  inputRef?: InputProps['ref'];
  inputProps?: InputProps;
};

const Checkbox = React.forwardRef<HTMLDivElement, Props>(
  ({ label, message, tone, name, value, checked, onChange, inputRef, inputProps, children, ...props }, ref) => {
    const mergedInputProps = useMergedInputProps({
      label,
      message,
      name,
      value,
      onChange,
      inputProps,
    });

    return (
      <Field {...props} ref={ref}>
        <InlineWrapper checked={checked}>
          <CheckBoxWrapper>
            <Input {...mergedInputProps} checked={checked} type="checkbox" ref={inputRef} />
            <CheckMark checked={checked} />
          </CheckBoxWrapper>
          <FieldLabel fontSize="m" id={mergedInputProps['aria-labelledby']} htmlFor={mergedInputProps.id}>
            {label}
          </FieldLabel>
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
