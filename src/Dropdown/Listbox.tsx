import React, { Children } from 'react';
import cx from 'classnames';

import Popover from './Popover';
import Option from '../Option';
import { useDropdown, useOptionItems } from './utils';
import { useCombinedRefs } from '../@utils';

import './styles.css';

const ListBox: React.FC<Props> = ({ children, className, ...props }) => {
  const { dropdownRef } = useDropdown();

  const { isOpen, getMenuProps, getItemProps, highlightedIndex } = useOptionItems(children);

  const { ref, ...menuProps } = getMenuProps();

  return (
    <Popover>
      <ul {...menuProps} {...props} className={cx('fx-listbox', className)} ref={useCombinedRefs(ref, dropdownRef)}>
        {isOpen &&
          Children.map(children, (el: OptionChildren, index) =>
            React.cloneElement(el, {
              selected: index === highlightedIndex,
              ...getItemProps({ index, item: el, ...el.props }),
            })
          )}
      </ul>
    </Popover>
  );
};

if (__DEV__) {
  ListBox.displayName = 'FxListBox';
}

export default ListBox;

type OptionChildren = React.ReactComponentElement<typeof Option>;
type Props = {
  children: OptionChildren[] | OptionChildren;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'ref' | 'children'>;
