import React, { useEffect } from 'react';

import { downshiftContext, dropdownStaticContext, useDropdownProviderValue, useDownshift } from './utils';

import './styles.css';
import { Options as PopoverOptions } from '@popperjs/core';

type Props = {
  placement?: PopoverOptions['placement'];
};

const Dropdown: React.FC<Props> = ({ placement, children }) => {
  const refs = useDropdownProviderValue();
  const downshift = useDownshift();

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
