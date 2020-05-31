import React, { Children } from 'react';

import Popover from '../Popover';
import Option from '../Option';
import { useDownshiftState } from '../Dropdown/utils';
import { useCombinedRefs } from '../@utils';
import { ListBoxStyled } from './ListBox.styled';
import { usePopoverRefs, UsePopper } from '../Popover/utils';

const ListBox = React.forwardRef<HTMLUListElement, Props>(({ children, placement, ...props }, forwardedRef) => {
  const { popoverRef } = usePopoverRefs();
  const { isOpen, getMenuProps, getItemProps } = useDownshiftState();
  const { ref, ...menuProps } = getMenuProps(props);
  const combinedRef = useCombinedRefs(ref, forwardedRef, popoverRef as React.RefObject<HTMLUListElement>);

  return (
    <Popover shown={isOpen} placement={placement}>
      <ListBoxStyled {...menuProps} {...props} ref={combinedRef}>
        {isOpen &&
          Children.map(children, (el: OptionChildren, index) => {
            return React.cloneElement(el, getItemProps({ index, item: el, ...el.props }));
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
  /**
   * Placement according to [popper reference](https://popper.js.org/docs/v2/constructors/#options)
   * @default 'bottom-start'
   */
  placement?: UsePopper['placement'];
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'ref' | 'children'>;
