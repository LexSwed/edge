import React from 'react';
import cx from 'classnames';

import { InputProps } from './utils';

import './styles.css';

type Props = InputProps;

const Input = React.forwardRef<HTMLInputElement, Props>(({ value, onChange, className, ...props }, ref) => {
  return (
    <input value={value} onChange={onChange} {...props} className={cx('fx-textfield-input', className)} ref={ref} />
  );
});

if (__DEV__) {
  Input.displayName = 'FxInput';
}

export default Input;
