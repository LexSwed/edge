import React, { useRef } from 'react';
import cx from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import type { Props as ParentProps, InputProps } from './utils';

import './styles.css';

const sizeMap: Record<NonNullable<Props['size']>, NonNullable<React.ComponentProps<typeof Button>['size']>> = {
  s: 'xs',
  m: 's',
  l: 'm',
};

type Props = InputProps & { onClear?: ParentProps['onClear']; size?: ParentProps['size'] };

const Input = React.forwardRef<HTMLInputElement, Props>(({ value, onChange, onClear, size, ...props }, ref) => {
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
      <input value={value} onChange={onChange} {...props} className="fx-textfield-input" ref={inputRef} />
      {onClear && (
        <span className={cx('fx-textfield-clear', (value ?? props.defaultValue) && 'fx-textfield-clear--shown')}>
          <Button onClick={onClearClick} size={size && sizeMap[size]} tone="transparent">
            <Icon icon="clear" />
          </Button>
        </span>
      )}
    </>
  );
});

if (__DEV__) {
  Input.displayName = 'FxInput';
}

export default Input;
