import React, { useContext } from 'react';
import cx from 'classnames';

import Popover from '../Popover';
import { dropdownContext, dropdownStaticContext } from './utils';

import './styles.css';

type Props = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

const ListBox: React.FC<Props> = ({ children, className, ...props }) => {
  const { isOpen } = useContext(dropdownContext);
  const { dropdownRef } = useContext(dropdownStaticContext);

  if (!isOpen) {
    return null;
  }

  return (
    <Popover>
      <ul className={cx('fx-listbox', className)} {...props} ref={dropdownRef as React.RefObject<HTMLUListElement>}>
        {children}
      </ul>
    </Popover>
  );
};

if (__DEV__) {
  ListBox.displayName = 'FxListBox';
}

export default ListBox;
