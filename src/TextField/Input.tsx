import React from 'react';

import { InputProps } from './utils';

import './styles.css';

type Props = InputProps;

const Input = React.forwardRef<HTMLInputElement, Props>(({ value, onChange, ...props }, ref) => {
  return <input value={value} onChange={onChange} {...props} className="fx-textfield-input" ref={ref} />;
});

if (__DEV__) {
  Input.displayName = 'FxInput';
}

export default Input;
