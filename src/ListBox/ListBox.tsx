import React, { Children } from 'react';
import cx from 'classnames';

import Popover from 'Dropdown/Popover';
import Option from 'Option';
import { useDropdown, useOptionItems } from 'Dropdown/utils';
import { useCombinedRefs } from '@utils';

import './styles.css';

const ListBox = React.forwardRef<HTMLUListElement, Props>(({ children, className, ...props }, forwardedRef) => {
  const { dropdownRef } = useDropdown();
  const { isOpen, getMenuProps, getItemProps, highlightedIndex } = useOptionItems(children);
  const { ref, ...menuProps } = getMenuProps();

  return (
    <Popover>
      <ul
        {...menuProps}
        {...props}
        className={cx('fx-listbox', className)}
        ref={useCombinedRefs(ref, forwardedRef, dropdownRef as React.RefObject<HTMLUListElement>)}
      >
        {isOpen &&
          Children.map(children, (el: OptionChildren, index) => {
            return React.cloneElement(el, {
              selected: index === highlightedIndex,
              ...getItemProps({ index, item: el, ...el.props }),
            });
          })}
      </ul>
    </Popover>
  );
});

if (__DEV__) {
  ListBox.displayName = 'FxListBox';
}

export default ListBox;

type OptionChildren = React.ReactComponentElement<typeof Option>;
type Props = {
  children: OptionChildren[] | OptionChildren;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'ref' | 'children'>;
