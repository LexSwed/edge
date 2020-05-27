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

const Toggle = React.forwardRef<HTMLDivElement, Props>((initialProps, ref) => {
  const [inputProps, wrapperProps] = useMergedInputProps(initialProps);
  const { label, message, tone, align, children, ...props } = wrapperProps;

  return (
    <Field {...props} ref={ref}>
      <Wrapper display="grid" gridTemplateColumns="auto 1fr" gridGap="s" align={align}>
        <ToggleWrapper>
          <ToggleInput {...inputProps} type="checkbox" />
          <ToggleStyled checked={inputProps.checked} />
        </ToggleWrapper>
        <ContentWrapper>
          {label && (
            <Label id={inputProps['aria-labelledby']} htmlFor={inputProps.id} disabled={inputProps.disabled}>
              {label}
            </Label>
          )}
          {message && (
            <FieldMessage id={inputProps['aria-describedby']} tone={tone}>
              {message}
            </FieldMessage>
          )}
        </ContentWrapper>
      </Wrapper>
      {inputProps.checked && children}
    </Field>
  );
});

export default Toggle;
