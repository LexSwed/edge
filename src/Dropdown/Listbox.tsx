import React, { useContext, useEffect, Children } from 'react';
import cx from 'classnames';

import Option from '../Option';
import Popover from './Popover';
import {
  dropdownStaticContext,
  useOptionsValues,
  useCloseDropdownRef,
  ActionType,
  useDropdownOpen,
  useSelectedIndex,
} from './utils';

import './styles.css';

const ListBox: React.FC<Props> = ({ children, className, ...props }) => {
  const { dropdownRef, dispatch } = useContext(dropdownStaticContext);
  const items = useOptionsValues(children);
  const closeRef = useCloseDropdownRef();
  const isOpen = useDropdownOpen();
  const selectedIndex = useSelectedIndex();

  useEffect(() => {
    dispatch({ type: 'UpdateItems', value: items });
  }, [items, dispatch]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      dispatch({ type: e.key as ActionType });
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, closeRef, dispatch]);

  return (
    <Popover>
      <ul
        role="listbox"
        tabIndex={-1}
        {...props}
        className={cx('fx-listbox', className)}
        ref={dropdownRef as React.RefObject<HTMLUListElement>}
      >
        {Children.map(children, (el, i) => React.cloneElement(el as OptionChildren, { selected: i === selectedIndex }))}
      </ul>
    </Popover>
  );
};

if (__DEV__) {
  ListBox.displayName = 'FxListBox';
}

export default ListBox;

type OptionChildren = React.ReactComponentElement<typeof Option>;
type Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
  'ref' | 'children'
> & {
  children: OptionChildren[] | OptionChildren;
};
