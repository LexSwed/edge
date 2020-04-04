import React from 'react';
import cx from 'classnames';

import './styles.css';
import Stack from 'Stack';
import Inline from 'Inline';
import FieldLabel from 'FieldLabel';
import FieldMessage from 'FieldMessage';
import { useMergedInputProps } from 'Field/utils';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  ref: React.Ref<HTMLInputElement>;
};

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  label?: string;
  message?: string;
  tone?: React.ComponentProps<typeof FieldMessage>['tone'];
  value?: InputProps['value'];
  checked?: InputProps['checked'];
  onChange?: InputProps['onChange'];
  inputProps?: InputProps;
};

const Checkbox = React.forwardRef<HTMLDivElement, Props>(
  ({ label, message, tone, value, checked, onChange, inputProps, className, children, ...props }, ref) => {
    const mergedInputProps = useMergedInputProps({
      label,
      message,
      value,
      onChange,
      inputProps: { ...inputProps, checked },
    });

    return (
      <Stack className={cx(className)} {...props} ref={ref}>
        <Inline className={cx('fx-checkbox', tone && `fx-checkbox-${tone}`)}>
          <input type="checkbox" className="fx-checkbox-input" {...mergedInputProps} />
          <FieldLabel id={mergedInputProps['aria-labelledby']} htmlFor={mergedInputProps.id}>
            {label}
          </FieldLabel>
        </Inline>
        {message && (
          <FieldMessage id={mergedInputProps['aria-describedby']} tone={tone}>
            {message}
          </FieldMessage>
        )}
        {children}
      </Stack>
    );
  }
);

if (__DEV__) {
  Checkbox.displayName = 'FxCheckbox';
}

export default Checkbox;
