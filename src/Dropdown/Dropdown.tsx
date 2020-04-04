import React, { useEffect } from 'react';
import { Options as PopoverOptions } from '@popperjs/core';

import { downshiftContext, dropdownStaticContext, useDropdownProviderValue, useDownshift } from './utils';

type Props = {
  placement?: PopoverOptions['placement'];
} & Parameters<typeof useDownshift>[0];

const Dropdown: React.FC<Props> = ({ placement, children, ...props }) => {
  const refs = useDropdownProviderValue();
  const downshift = useDownshift(props);

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
