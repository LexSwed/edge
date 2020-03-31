import React, { useContext, useCallback } from 'react';

import { dropdownStaticContext, dropdownContext } from '../Dropdown/utils';

import './styles.css';
import { useCombinedRefs } from '../@utils';

const MenuButtonWrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { triggerRef, dispatch } = useContext(dropdownStaticContext);
  const ref = useCombinedRefs(children.props.ref, triggerRef);
  const { isOpen } = useContext(dropdownContext);

  const onClickOrig = children?.props.onClick;

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch({ type: 'switchOpenState' });

      onClickOrig?.(e);
    },
    [dispatch, onClickOrig]
  );

  return React.cloneElement(children, {
    'aria-haspopup': 'listbox',
    'aria-expanded': isOpen ? 'true' : 'false',
    onClick,
    ref,
  });
};

if (__DEV__) {
  MenuButtonWrapper.displayName = 'FxMenuButtonWrapper';
}

export default MenuButtonWrapper;
