import React, { useEffect } from 'react';

import { dropdownContext, dropdownStaticContext, useDropdownProviderValue } from './utils';

import './styles.css';
import { Options as PopoverOptions } from '@popperjs/core';
import { Props as MenuListProps } from './utils/listbox';

type Props = {
  placement?: PopoverOptions['placement'];
  children: MenuListProps['children'];
};

const Dropdown: React.FC<Props> = ({ placement, children }) => {
  const [state, methods] = useDropdownProviderValue();

  useEffect(() => {
    if (placement) {
      methods.popperOptionsRef.current = { placement };
    }
  }, [placement, methods.popperOptionsRef]);

  return (
    <dropdownContext.Provider value={state}>
      <dropdownStaticContext.Provider value={methods}>{children}</dropdownStaticContext.Provider>
    </dropdownContext.Provider>
  );
};

if (__DEV__) {
  Dropdown.displayName = 'FxDropdown';
}

export default Dropdown;
