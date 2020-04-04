import React from 'react';

import ListBox from 'ListBox';
import SelectInput from './SelectInput';
import { Dropdown } from 'Dropdown';
import type { Props as ExtraProps } from './utils';

type Props = {
  children: React.ComponentProps<typeof ListBox>['children'];
} & ExtraProps;

const Select: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Dropdown value={props.value} onSelect={props.onSelect}>
      <SelectInput {...props} />
      <ListBox>{children}</ListBox>
    </Dropdown>
  );
};

if (__DEV__) {
  Select.displayName = 'FxSelect';
}

export default Select;
