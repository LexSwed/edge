import React from 'react';

import { useToggleButtonProps, useDownshiftState } from '../Dropdown/utils';

import type { SelectInputProps } from './utils';
import { ArrowIcon, Field } from './Select.styled';

const inputProps = {
  readOnly: true,
};

const SelectInput: React.FC<SelectInputProps> = ({ onSelect, value, ...props }) => {
  const downshiftProps = useToggleButtonProps();
  const { isOpen } = useDownshiftState();

  return (
    <Field
      value={value ?? ''}
      onClear={onSelect ? () => onSelect(null) : null}
      inputProps={inputProps}
      icon={<ArrowIcon icon="expand_more" size={props.size} expanded={isOpen} />}
      {...props}
      {...downshiftProps}
    />
  );
};

if (__DEV__) {
  SelectInput.displayName = 'FxSelectInput';
}

export default SelectInput;
