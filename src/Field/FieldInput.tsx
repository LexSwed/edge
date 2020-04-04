import React, { useCallback, useRef } from 'react';
import cx from 'classnames';

import ClearButton from './ClearButton';
import LeftIcon from './LeftIcon';
import FieldLabel from 'FieldLabel';
import FieldMessage from 'FieldMessage';
import { useMergedInputProps, useClearButton, FieldInputProps } from './utils';

import './styles.css';
import { useCombinedRefs } from '@utils';

type LabelProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'>;

type Props = LabelProps & FieldInputProps;

const FieldInput = React.forwardRef<HTMLDivElement, Props>(
  ({ label, message, icon, size = 'm', disabled, tone, className, onClick, onClear, inputProps, ...props }, ref) => {
    const classes = cx(
      'fx-field-wrap',
      `fx-field-wrap--${size}`,
      tone && `fx-field-wrap--${tone}`,
      disabled && 'fx-field-wrap--disabled',
      className
    );
    const { ref: providedInputRef, className: inputClassName, ...mergedInputProps } = useMergedInputProps({
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
      <>
        {label && (
          <FieldLabel id={mergedInputProps['aria-labelledby']} htmlFor={mergedInputProps.id}>
            {label}
          </FieldLabel>
        )}
        <div className={classes} onClick={onWrapperClick} {...props} ref={ref}>
          <LeftIcon icon={icon} />
          <input {...mergedInputProps} className={cx('fx-field-input', inputClassName)} ref={inputRefs} />
          {onClear && <ClearButton shown={Boolean(mergedInputProps?.value)} onClick={onClearClick} />}
        </div>
        {message && (
          <FieldMessage
            tone={tone}
            disabled={disabled}
            id={mergedInputProps['aria-describedby']}
            className="fx-field-message"
          >
            {message}
          </FieldMessage>
        )}
      </>
    );
  }
);

if (__DEV__) {
  FieldInput.displayName = 'FxFieldInput';
}

export default FieldInput;
