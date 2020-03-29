import React from 'react';
import cx from 'classnames';
import { MenuList as ReachMenuList } from '@reach/menu-button';

import './styles.css';

type Props = React.ComponentProps<typeof ReachMenuList>;

const MenuList = React.forwardRef<HTMLDivElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <ReachMenuList className={cx('fx-menulist', className)} {...props} ref={ref}>
      {children}
    </ReachMenuList>
  );
});

if (__DEV__) {
  MenuList.displayName = 'FxMenuList';
}

export default MenuList;
