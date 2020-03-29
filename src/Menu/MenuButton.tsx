import React from 'react';

import { MenuButton as ReachMenuButton } from '@reach/menu-button';

import './styles.css';
import '@reach/menu-button/styles.css';

import Button from '../Button';

type Props = React.ComponentProps<typeof Button> & React.ComponentProps<typeof ReachMenuButton>;

const MenuButton = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
  return (
    <Button {...props} menuButton ref={ref}>
      {children}
    </Button>
  );
});

if (__DEV__) {
  MenuButton.displayName = 'FxMenuButton';
}

export default MenuButton;
