import React, { useRef, useState } from 'react';
import cx from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import type { Props as ParentProps, InputProps } from './utils';

import './styles.css';

type Props = { onClear?: ParentProps['onClear'] } & InputProps;

const Input = React.forwardRef<HTMLInputElement, Props>(({ value, onChange, onClear, ...props }, ref) => {
  const inputRefInternal = useRef<HTMLInputElement>(null);
  const inputRef = (ref as InputProps['ref']) || inputRefInternal;

  function onClearClick() {
    if (!inputRef?.current) {
      return;
    }

    inputRef.current.value = '';
    inputRef.current.focus();
    onClear?.();
  }

  return (
    <>
      <input value={value} onChange={onChange} {...props} className={cx('fx-textfield-input')} ref={inputRef} />
      {onClear && (value ?? props.defaultValue) && (
        <Button onClick={onClearClick} size="s" tone="transparent">
          <Icon icon="clear" />
        </Button>
      )}
    </>
  );
});

if (__DEV__) {
  Input.displayName = 'FxInput';
}

export default Input;
