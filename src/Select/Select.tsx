import React from 'react';

import ListBox from '../ListBox';
import SelectInput from './SelectInput';
import { Dropdown } from '../Dropdown';
import { useSelect } from '../Dropdown/utils';
import type { SelectInputProps } from './utils';
import { ClearOption } from './Select.styled';

type Props = SelectInputProps & {
  children: React.ComponentProps<typeof ListBox>['children'];
};

const Select = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
  const options = [
    <ClearOption value="" key="default-value" disabled={props.required}>
      Select one...
    </ClearOption>,
    ...React.Children.toArray(children),
  ] as React.ComponentProps<typeof ListBox>['children'];

  const downshift = useSelect({ value: props.value, onSelect: props.onSelect, options });

  return (
    <Dropdown downshift={downshift}>
      <SelectInput {...props} ref={ref} />
      <ListBox>{options}</ListBox>
    </Dropdown>
  );
});

if (__DEV__) {
  Select.displayName = 'FxSelect';
}

export default Select;
