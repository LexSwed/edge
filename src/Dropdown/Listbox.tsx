import React, { useContext } from 'react';
import cx from 'classnames';

import Popover from './Popover';
import { dropdownStaticContext } from './utils';

import { useKeyboard, Props } from './utils/listbox';

import './styles.css';

const ListBox: React.FC<Props> = ({ children, className, ...props }) => {
  const { dropdownRef } = useContext(dropdownStaticContext);

  const state = useKeyboard(children);

  console.log(state);

  return (
    <Popover>
      <ul
        role="listbox"
        tabIndex={-1}
        {...props}
        className={cx('fx-listbox', className)}
        ref={dropdownRef as React.RefObject<HTMLUListElement>}
      >
        {children}
      </ul>
    </Popover>
  );
};

if (__DEV__) {
  ListBox.displayName = 'FxListBox';
}

export default ListBox;
