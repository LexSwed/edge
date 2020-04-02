import React from 'react';

import Field from 'Field';
import Icon from 'Icon';
import { useDownshiftState } from 'Dropdown/utils';
import FieldInput from 'Field/FieldInput';

import './styles.css';

type Props = {};

const SelectInput = React.forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => {
  const { selectedItem, getToggleButtonProps } = useDownshiftState();

  console.log(selectedItem);

  return (
    <Field {...props} ref={ref}>
      <FieldInput icon={<Icon icon="expand_more" />} {...getToggleButtonProps()}>
        <span>Some text</span>
      </FieldInput>
    </Field>
  );
});

if (__DEV__) {
  SelectInput.displayName = 'FxSelectInput';
}

export default SelectInput;
