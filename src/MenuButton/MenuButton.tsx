import React from 'react';

import { Dropdown, Listbox } from '../Dropdown';

import './styles.css';
import MenuButtonWrapper from './ButtonWrapper';

type Props = {
  button: React.ReactElement;
  children: 
};

const MenuButton: React.FC<Props> = ({ button, children, ...props }) => {
  return (
    <Dropdown {...props}>
      <MenuButtonWrapper>{button}</MenuButtonWrapper>
    </Dropdown>
  );
};

if (__DEV__) {
  MenuButton.displayName = 'FxMenuButton';
}

export default MenuButton;
