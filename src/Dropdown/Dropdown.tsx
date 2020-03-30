import React from 'react';

import { dropdownContext, dropdownStaticContext, useDropdownProviderValue } from './utils';

import './styles.css';

type Props = {};

const Dropdown: React.FC<Props> = ({ children }) => {
  const [state, methods] = useDropdownProviderValue();

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
