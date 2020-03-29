import React from 'react';

import { Menu as ReachMenu } from '@reach/menu-button';

import './styles.css';

type Props = React.ComponentProps<typeof ReachMenu>;

const Menu: React.FC<Props> = ({ children, ...props }) => {
  return <ReachMenu {...props}>{children}</ReachMenu>;
};

if (__DEV__) {
  Menu.displayName = 'FxMenu';
}

export default Menu;
