import React, { Children } from 'react';

import { Dropdown } from 'Dropdown';
import ToggleButton from './ToggleButton';
import { useDownshift } from 'Dropdown/utils';

type Props = {
  /**
   * Placement according to [popper reference](https://popper.js.org/docs/v2/constructors/#options)
   * @default 'bottom-start'
   */
  placement?: DDProps['placement'];
};

const MenuButton: React.FC<Props> = ({ children, placement }) => {
  const [button, menu] = Children.toArray(children);
  const downshift = useDownshift();

  return (
    <Dropdown downshift={downshift} placement={placement}>
      <ToggleButton>{button}</ToggleButton>
      {menu}
    </Dropdown>
  );
};

if (__DEV__) {
  MenuButton.displayName = 'FxMenuButton';
}

export default MenuButton;

type DDProps = React.ComponentProps<typeof Dropdown>;
