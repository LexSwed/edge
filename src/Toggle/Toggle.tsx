import React from 'react';

import { Wrapper, ToggleWrapper, ToggleInput, ToggleStyled, ContentWrapper, Label } from './Toggle.styled';
import FieldMessage from '../FieldMessage';
import { InputProps, useMergedInputProps } from '../Field/utils';
import Field from '../Field';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  align?: 'left' | 'right' | 'apart';
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

const Toggle = React.forwardRef<HTMLDivElement, Props>(
  (
    { label, message, tone, name, value, checked, disabled, onChange, align, inputRef, inputProps, children, ...props },
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
        <Wrapper display="grid" gridTemplateColumns="auto 1fr" gridGap="s" align={align}>
          <ToggleWrapper>
            <ToggleInput {...mergedInputProps} type="checkbox" ref={inputRef} />
            <ToggleStyled checked={checked} />
          </ToggleWrapper>
          <ContentWrapper>
            {label && (
              <Label id={mergedInputProps['aria-labelledby']} htmlFor={mergedInputProps.id} disabled={disabled}>
                {label}
              </Label>
            )}
            {message && (
              <FieldMessage id={mergedInputProps['aria-describedby']} tone={tone}>
                {message}
              </FieldMessage>
            )}
          </ContentWrapper>
        </Wrapper>
        {checked && children}
      </Field>
    );
  }
);

export default Toggle;
