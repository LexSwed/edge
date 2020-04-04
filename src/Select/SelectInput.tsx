import React from 'react';

import Field from 'Field';
import { useToggleButtonProps } from 'Dropdown/utils';
import FieldInput from 'Field/FieldInput';

import './styles.css';
import type { SelectInputProps } from './utils';

const inputProps = {
  readOnly: true,
};

const SelectInput: React.FC<SelectInputProps> = ({ onSelect, value, ...props }) => {
  const downshiftProps = useToggleButtonProps();

  return (
    <Field>
      <FieldInput
        className="fx-select-input"
        value={value ?? ''}
        onClear={() => onSelect(null)}
        inputProps={inputProps}
        icon="expand_more"
        {...props}
        {...downshiftProps}
      />
    </Field>
  );
};

if (__DEV__) {
  SelectInput.displayName = 'FxSelectInput';
}

export default SelectInput;
