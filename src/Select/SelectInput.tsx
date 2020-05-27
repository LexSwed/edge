import React from 'react';

import { useToggleButtonProps, useDownshiftState } from '../Dropdown/utils';

import { useCombinedRefs } from '../@utils';
import type { SelectInputProps } from './utils';
import { ArrowIcon, FieldWrapper, Value, Chevron } from './Select.styled';
import { Wrapper, LabelStyled, MessageStyled } from '../Field/Field.styled';
import { useMergedInputProps } from '../Field/utils';
import LeftIcon from '../Field/LeftIcon';

const SelectInput = React.forwardRef<HTMLButtonElement, SelectInputProps>((initialProps, passedRef) => {
  const [inputProps, wrapperProps] = useMergedInputProps(initialProps);
  const { ref, ...downshiftProps } = useToggleButtonProps();
  const { isOpen } = useDownshiftState();
  const refs = useCombinedRefs(ref, passedRef);

  const { value, placeholder, disabled } = inputProps;

  const { label, message, tone, variant, icon, ...props } = wrapperProps;

  return (
    <Wrapper tone={tone}>
      {label && (
        <LabelStyled disabled={disabled} htmlFor={downshiftProps.id}>
          {label}
        </LabelStyled>
      )}
      <FieldWrapper
        tone={tone || 'default'}
        variant={variant || 'default'}
        disabled={disabled}
        as="button"
        {...inputProps}
        {...props}
        {...downshiftProps}
        ref={refs}
      >
        {icon && <LeftIcon icon={icon} />}
        {value ? (
          <Value withIcon={Boolean(icon)}>{value}</Value>
        ) : (
          <Value withIcon={Boolean(icon)} color="text.ultralight">
            {placeholder}
          </Value>
        )}
        <Chevron icon={<ArrowIcon icon="expand_more" expanded={isOpen} />} />
      </FieldWrapper>
      {message && (
        <MessageStyled tone={tone} disabled={disabled} id={inputProps['aria-describedby']}>
          {message}
        </MessageStyled>
      )}
    </Wrapper>
  );
});

if (__DEV__) {
  SelectInput.displayName = 'FxSelectInput';
}

export default SelectInput;
