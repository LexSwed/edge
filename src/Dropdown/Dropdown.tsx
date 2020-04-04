import React, { useEffect } from 'react';
import { Options as PopoverOptions } from '@popperjs/core';

import { downshiftContext, dropdownStaticContext, useDropdownProviderValue, useSelect } from './utils';

type Props = {
  placement?: PopoverOptions['placement'];
  downshift: ReturnType<typeof useSelect>;
};

const Dropdown: React.FC<Props> = ({ placement, downshift, children }) => {
  const refs = useDropdownProviderValue();

  useEffect(() => {
    if (placement) {
      refs.popperOptionsRef.current = { placement };
    }
  }, [placement, refs.popperOptionsRef]);

  return (
    <dropdownStaticContext.Provider value={refs}>
      <downshiftContext.Provider value={downshift}>{children}</downshiftContext.Provider>
    </dropdownStaticContext.Provider>
  );
};

if (__DEV__) {
  Dropdown.displayName = 'FxDropdown';
}

export default Dropdown;
