import React, { useRef, useMemo, useState } from 'react';

import { popoverContext } from '../Popover/utils';

import './styles.css';

type Props = {};

const Dropdown: React.FC<Props> = ({ children }) => {
  const triggerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLElement>(null);
  const [isOpen, setOpen] = useState(false);

  const value = useMemo(() => ({ triggerRef, dropdownRef, isOpen, setOpen }), [
    triggerRef,
    dropdownRef,
    isOpen,
    setOpen,
  ]);

  return <popoverContext.Provider value={value}>{children}</popoverContext.Provider>;
};

if (__DEV__) {
  Dropdown.displayName = 'FxDropdown';
}

export default Dropdown;
