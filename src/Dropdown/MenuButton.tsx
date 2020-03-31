import React, { useContext, useCallback } from 'react';

import Button from '../Button';
import { dropdownStaticContext, dropdownContext } from './utils';
import { useCombinedRefs } from '../@utils';

import './styles.css';

type Props = {} & React.ComponentProps<typeof Button>;

const MenuButton = React.forwardRef<HTMLButtonElement, Props>(({ children, onClick, ...props }, ref) => {
  const { triggerRef, dispatch } = useContext(dropdownStaticContext);
  const { isOpen } = useContext(dropdownContext);

  const onClickMemo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch({ type: 'SwitchOpenState' });

      onClick?.(e);
    },
    [dispatch, onClick]
  );

  return (
    <Button
      aria-haspopup="listbox"
      aria-expanded={isOpen ? 'true' : 'false'}
      {...props}
      onClick={onClickMemo}
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
