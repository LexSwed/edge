import React from 'react';
import cx from 'classnames';

import { useToggleButtonProps, useDownshiftState } from '../Dropdown/utils';
import FieldInput from '../Field/FieldInput';
import Icon from '../Icon';

import './styles.css';
import type { SelectInputProps } from './utils';

const inputProps = {
  readOnly: true,
};

const SelectInput: React.FC<SelectInputProps> = ({ onSelect, value, ...props }) => {
  const downshiftProps = useToggleButtonProps();
  const { isOpen } = useDownshiftState();

  return (
    <FieldInput
      className="fx-select"
      value={value ?? ''}
      onClear={onSelect ? () => onSelect(null) : null}
      inputProps={inputProps}
      icon={<Icon icon="expand_more" className={cx('fx-select-icon', isOpen ? 'fx-select-expanded' : '')} />}
      {...props}
      {...downshiftProps}
    />
  );
};

if (__DEV__) {
  SelectInput.displayName = 'FxSelectInput';
}

export default SelectInput;
