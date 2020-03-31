import React from 'react';

import './styles.css';

import Button from '../Button';
import { useDropdown, useDownshiftState } from './utils';
import { useCombinedRefs } from '../@utils';

type Props = {} & React.ComponentProps<typeof Button>;

const MenuButton = React.forwardRef<HTMLButtonElement, Props>(({ children, onClick, ...props }, ref) => {
  const { triggerRef } = useDropdown();
  const { getToggleButtonProps } = useDownshiftState();

  return (
    <Button
      {...props}
      {...getToggleButtonProps({ onClick })}
      ref={useCombinedRefs(ref, triggerRef as React.Ref<HTMLButtonElement>)}
    >
      {children}
    </Button>
  );
});

if (__DEV__) {
  MenuButton.displayName = 'FxMenuButton';
}

export default MenuButton;
