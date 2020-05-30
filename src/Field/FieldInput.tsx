import React from 'react';

import ClearButton from './ClearButton';
import LeftIcon from './LeftIcon';
import { useMergedInputProps, FieldInputProps } from './utils';

import { Wrapper, FieldInputWrapper, Input, LabelStyled, MessageStyled } from './Field.styled';

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
      <FieldInputWrapper {...props} ref={ref}>
        <LeftIcon icon={icon} />
        <Input
          {...inputProps}
          tone={tone || 'default'}
          variant={variant || 'default'}
          disabled={inputProps.disabled}
          withClearButton={Boolean(onClear)}
          withIcon={Boolean(icon)}
        />
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
