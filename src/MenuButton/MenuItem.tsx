import React from 'react';
import cx from 'classnames';
import { MenuItem as MenuItemReach } from '@reach/menu-button';

import Inline from '../Inline';

import './styles.css';

type Props = { disabled?: boolean; selected?: boolean; bordered?: boolean } & React.ComponentProps<
  typeof MenuItemReach
>;

const MenuItem = React.forwardRef<HTMLDivElement, Props>(
  ({ disabled, selected, bordered, children, className, ...props }, ref) => {
    const classes = cx(
      'fx-menuitem',
      disabled && 'fx-menuitem--disabled',
      selected && 'fx-menuitem--selected',
      bordered && 'fx-menuitem--bordered',
      className
    );

    return (
      <MenuItemReach className={classes} {...props} ref={ref}>
        <Inline alignY="center" space="s" nowrap>
          {children}
        </Inline>
      </MenuItemReach>
    );
  }
);

if (__DEV__) {
  MenuItem.displayName = 'FxMenuItem';
}

export default MenuItem;
