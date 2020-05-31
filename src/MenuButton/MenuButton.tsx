import React, { Children } from 'react';

import { Dropdown } from '../Dropdown';
import ToggleButton from './ToggleButton';
import { useSelect } from '../Dropdown/utils';

type Props = {};

const MenuButton: React.FC<Props> = ({ children }) => {
  const [button, menu] = Children.toArray(children);
  const downshift = useSelect({ options: React.isValidElement(menu) ? menu.props.children : [] });

  return (
    <Dropdown downshift={downshift}>
      <ToggleButton>{button}</ToggleButton>
      {menu}
    </Dropdown>
  );
};

if (__DEV__) {
  MenuButton.displayName = 'FxMenuButton';
}

export default MenuButton;
