import React from 'react';

import ListBox from 'ListBox';
import SelectInput from './SelectInput';
import { Dropdown } from 'Dropdown';
import { useDownshift } from 'Dropdown/utils';
import type { SelectInputProps } from './utils';

type Props = SelectInputProps & {
  children: React.ComponentProps<typeof ListBox>['children'];
};

const Select: React.FC<Props> = ({ children, ...props }) => {
  const downshift = useDownshift({ value: props.value, onSelect: props.onSelect });

  return (
    <Dropdown downshift={downshift}>
      <SelectInput {...props} />
      <ListBox>{children}</ListBox>
    </Dropdown>
  );
};

if (__DEV__) {
  Select.displayName = 'FxSelect';
}

export default Select;
