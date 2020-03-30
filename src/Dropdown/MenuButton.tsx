import React, { useContext, useCallback, useEffect } from 'react';

import './styles.css';

import Button from '../Button';
import { dropdownStaticContext } from '../Dropdown/utils';

type Props = React.ComponentProps<typeof Button>;

const MenuButton: React.FC<Props> = ({ children, onClick, ...props }) => {
  const { triggerRef, dispatch } = useContext(dropdownStaticContext);

  useEffect(() => {
    dispatch({ type: 'setCloseOnClick' });
  }, [dispatch]);

  console.log('render button');

  const onClickMemo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch({ type: 'switchOpenState' });

      onClick?.(e);
    },
    [dispatch, onClick]
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
