import React from 'react';
import cx from 'classnames';

import './styles.css';
import Field from '../Field';
import Inline from '../Inline';
import FieldLabel from '../FieldLabel';
import FieldMessage from '../FieldMessage';
import { useMergedInputProps } from '../Field/utils';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  ref: React.Ref<HTMLInputElement>;
};

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  label?: string;
  message?: string;
  tone?: React.ComponentProps<typeof FieldMessage>['tone'];
  name?: InputProps['name'];
  value?: InputProps['value'];
  checked?: InputProps['checked'];
  onChange?: InputProps['onChange'];
  inputProps?: InputProps;
};

const checkmark = (
  <svg viewBox="0 0 20 20" className="fx-checkbox-tick" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
    />
  </svg>
);

const Checkbox = React.forwardRef<HTMLDivElement, Props>(
  ({ label, message, tone, name, value, checked, onChange, inputProps, className, children, ...props }, ref) => {
    const mergedInputProps = useMergedInputProps({
      label,
      message,
      name,
      value,
      onChange,
      inputProps: { ...inputProps, checked },
    });

    return (
      <Field className={cx('fx-checkbox', className)} {...props} ref={ref}>
        <Inline alignY="center" space="s" className={cx('fx-checkbox', tone && `fx-checkbox--${tone}`)}>
          <span className="fx-checkbox-wrap">
            <input className="fx-checkbox-input" {...mergedInputProps} type="checkbox" />
            {checkmark}
          </span>
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
      </Field>
    );
  }
);

if (__DEV__) {
  Checkbox.displayName = 'FxCheckbox';
}

export default Checkbox;
