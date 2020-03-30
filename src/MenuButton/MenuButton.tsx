import React, { useContext, useCallback } from 'react';

import './styles.css';

import Button from '../Button';
import { popoverContext } from '../Popover/utils';

type Props = React.ComponentProps<typeof Button>;

const MenuButton: React.FC<Props> = ({ children, onClick, ...props }) => {
  const { triggerRef, setOpen } = useContext(popoverContext);

  const onClickMemo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setOpen((val) => !val);

      onClick?.(e);
    },
    [setOpen, onClick]
  );

  return (
    <Button {...props} onClick={onClickMemo} ref={triggerRef as React.RefObject<HTMLButtonElement>}>
      {children}
    </Button>
  );
};

if (__DEV__) {
  MenuButton.displayName = 'FxMenuButton';
}

export default MenuButton;
