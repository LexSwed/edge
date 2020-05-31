import React from 'react';

import { downshiftContext, useSelect } from './utils';
import { PopoverWrapper } from '../Popover/utils';

type Props = {
  downshift: ReturnType<typeof useSelect>;
};

const Dropdown: React.FC<Props> = ({ downshift, children }) => {
  return (
    <PopoverWrapper>
      <downshiftContext.Provider value={downshift}>{children}</downshiftContext.Provider>
    </PopoverWrapper>
  );
};

if (__DEV__) {
  Dropdown.displayName = 'FxDropdown';
}

export default Dropdown;
