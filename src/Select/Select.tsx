import React from 'react';

import { TextFieldProps } from 'TextField/utils';
import ListBox from 'ListBox';
import SelectInput from './SelectInput';
import { Dropdown } from 'Dropdown';

type Props = TextFieldProps & {
  children: React.ComponentProps<typeof ListBox>['children'];
};

const Select = React.forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  return (
    <Dropdown>
      <SelectInput {...props} ref={ref} />
      <ListBox>{children}</ListBox>
    </Dropdown>
  );
});

if (__DEV__) {
  Select.displayName = 'FxSelect';
}

export default Select;
