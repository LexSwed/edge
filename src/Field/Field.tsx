import React from 'react';
import cx from 'classnames';

import Stack from '../Stack';
import FieldLabel from 'FieldLabel';
import FieldMessage from 'FieldMessage';

import './styles.css';
import { FieldProps } from './utils';

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ label, message, tone, disabled, className, children, inputProps, ...props }, ref) => {
    return (
      <Stack space="xs" className={cx('fx-field', className)} {...props} ref={ref}>
        {label && (
          <FieldLabel id={inputProps?.['aria-labelledby']} htmlFor={inputProps?.inputId}>
            {label}
          </FieldLabel>
        )}
        {children}
        {message && (
          <FieldMessage
            tone={tone}
            disabled={disabled}
            id={inputProps?.['aria-describedby']}
            className="fx-field-message"
          >
            {message}
          </FieldMessage>
        )}
      </Stack>
    );
  }
);

if (__DEV__) {
  Field.displayName = 'FxField';
}

export default Field;
