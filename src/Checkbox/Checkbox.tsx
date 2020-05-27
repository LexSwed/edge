import React from 'react';

import Field from '../Field';
import FieldMessage from '../FieldMessage';
import { useMergedInputProps, InputProps } from '../Field/utils';
import { Input, Wrapper, CheckMark, CheckboxWrapper, Label } from './Checkbox.styled';
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

const Checkbox = React.forwardRef<HTMLDivElement, Props>((initialProps, ref) => {
  const [inputProps, wrapperProps] = useMergedInputProps(initialProps);
  const { label, message, tone, children, ...props } = wrapperProps;

  return (
    <Field {...props} ref={ref}>
      <Wrapper
        checked={inputProps.checked}
        disabled={inputProps.disabled}
        display="inline-grid"
        gridTemplateColumns="auto 1fr"
        gridGap="s"
        alignItems="flex-start"
      >
        <CheckboxWrapper>
          <Input {...inputProps} type="checkbox" />
          <CheckMark checked={inputProps.checked} />
        </CheckboxWrapper>
        <Box>
          <Label id={inputProps['aria-labelledby']} htmlFor={inputProps.id} disabled={inputProps.disabled}>
            {label}
          </Label>
          {message && (
            <FieldMessage id={inputProps['aria-describedby']} tone={tone}>
              {message}
            </FieldMessage>
          )}
        </Box>
      </Wrapper>
      {inputProps.checked && children}
    </Field>
  );
});

if (__DEV__) {
  Checkbox.displayName = 'FxCheckbox';
}

export default Checkbox;
