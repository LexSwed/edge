import React, { useCallback, useRef } from 'react';

import ClearButton from './ClearButton';
import LeftIcon from './LeftIcon';
import { useMergedInputProps, useClearButton, FieldInputProps } from './utils';

import { useCombinedRefs } from '../@utils';
import { Wrapper, FieldInputWrapper, Input, LabelStyled, MessageStyled } from './Field.styled';

type WrapperProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'>;

type Props = WrapperProps & FieldInputProps;

const FieldInput = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      label,
      message,
      icon,
      size = 'm',
      disabled,
      tone,
      onClick,
      onClear,
      inputRef: providedInputRef,
      inputProps,
      variant,
      ...props
    },
    ref
  ) => {
    const mergedInputProps = useMergedInputProps({
      inputProps,
      disabled,
      ...props,
    });

    const inputRef = useRef<HTMLInputElement>();
    const onClearClick = useClearButton(inputRef, onClear);
    const inputRefs = useCombinedRefs(providedInputRef, inputRef);

    const onWrapperClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (disabled) {
          return;
        }
        onClick?.(e);
        inputRef.current?.focus();
      },
      [onClick, disabled]
    );

    return (
      <Wrapper tone={tone} {...props}>
        {label && (
          <LabelStyled id={mergedInputProps['aria-labelledby']} htmlFor={mergedInputProps.id}>
            {label}
          </LabelStyled>
        )}
        <FieldInputWrapper
          size={size}
          tone={tone || 'default'}
          variant={variant || 'default'}
          disabled={disabled}
          onClick={onWrapperClick}
          {...props}
          ref={ref}
        >
          <LeftIcon icon={icon} size={size} />
          <Input {...mergedInputProps} ref={inputRefs} />
          {onClear && <ClearButton size={size} shown={Boolean(mergedInputProps?.value)} onClick={onClearClick} />}
        </FieldInputWrapper>
        {message && (
          <MessageStyled tone={tone} disabled={disabled} id={mergedInputProps['aria-describedby']}>
            {message}
          </MessageStyled>
        )}
      </Wrapper>
    );
  }
);

if (__DEV__) {
  FieldInput.displayName = 'FxFieldInput';
}

export default FieldInput;
