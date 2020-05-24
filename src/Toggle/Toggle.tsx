import React from 'react';

import { FieldStyled, InputWrapper, ToggleInput, ToggleStyled } from './Toggle.styled';
import FieldLabel from '../FieldLabel';
import FieldMessage from '../FieldMessage';
import Inline from '../Inline';
import { InputProps, useMergedInputProps } from '../Field/utils';

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
      <FieldStyled {...props} ref={ref}>
        <Inline space="m" nowrap alignY="center">
          <InputWrapper>
            <ToggleInput {...mergedInputProps} type="checkbox" ref={inputRef} />
            <ToggleStyled checked={checked} />
          </InputWrapper>
          <FieldLabel id={mergedInputProps['aria-labelledby']} htmlFor={mergedInputProps.id}>
            {label}
          </FieldLabel>
        </Inline>
        {message && (
          <FieldMessage id={mergedInputProps['aria-describedby']} tone={tone}>
            {message}
          </FieldMessage>
        )}
        {checked && children}
      </FieldStyled>
    );
  }
);

export default Toggle;
