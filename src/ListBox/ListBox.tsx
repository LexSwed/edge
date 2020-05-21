import React, { Children } from 'react';

import Popover from '../Dropdown/Popover';
import Option from '../Option';
import { useDropdown, useDownshiftState } from '../Dropdown/utils';
import { useCombinedRefs } from '../@utils';
import { ListBoxStyled } from './ListBox.styled';

const ListBox = React.forwardRef<HTMLUListElement, Props>(({ children, ...props }, forwardedRef) => {
  const { dropdownRef } = useDropdown();
  const { isOpen, getMenuProps, getItemProps, highlightedIndex } = useDownshiftState();
  const { ref, ...menuProps } = getMenuProps();
  const combinedRef = useCombinedRefs(ref, forwardedRef, dropdownRef as React.RefObject<HTMLUListElement>);

  return (
    <Popover>
      <ListBoxStyled {...menuProps} {...props} ref={combinedRef}>
        {isOpen &&
          Children.map(children, (el: OptionChildren, index) => {
            return React.cloneElement(el, {
              selected: index === highlightedIndex,
              ...getItemProps({ index, item: el, ...el.props }),
            });
          })}
      </ListBoxStyled>
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
