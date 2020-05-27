import React from 'react';

import ClearButton from './ClearButton';
import LeftIcon from './LeftIcon';
import { useMergedInputProps, FieldInputProps } from './utils';

import { Wrapper, FieldInputWrapper, Input, LabelStyled, MessageStyled, INPUT_SIZE } from './Field.styled';

const FieldInput = React.forwardRef<HTMLDivElement, FieldInputProps>((initialProps, ref) => {
  const [inputProps, wrapperProps] = useMergedInputProps(initialProps);

  const { label, message, icon, tone, onClear, variant, ...props } = wrapperProps;

  return (
    <Wrapper tone={tone}>
      {label && (
        <LabelStyled disabled={inputProps.disabled} htmlFor={inputProps.id}>
          {label}
        </LabelStyled>
      )}
      <FieldInputWrapper
        tone={tone || 'default'}
        variant={variant || 'default'}
        disabled={inputProps.disabled}
        withClearButton={Boolean(onClear)}
        {...props}
        ref={ref}
      >
        <LeftIcon icon={icon} />
        <Input {...inputProps} pr={onClear ? INPUT_SIZE : '8px'} pl={icon ? INPUT_SIZE : '8px'} />
        {onClear && <ClearButton shown={Boolean(inputProps?.value)} disabled={inputProps.disabled} onClick={onClear} />}
      </FieldInputWrapper>
      {message && (
        <MessageStyled tone={tone} disabled={inputProps.disabled} id={inputProps['aria-describedby']}>
          {message}
        </MessageStyled>
      )}
    </Wrapper>
  );
});

if (__DEV__) {
  FieldInput.displayName = 'FxFieldInput';
}

export default FieldInput;
