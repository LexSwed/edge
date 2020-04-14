import React from 'react';
import cx from 'classnames';

import './styles.css';
import { Size } from '../@utils';

type ElementProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'children'>;

type Props = ElementProps & {
  /**
   * Name of the icon
   */
  icon: string;
  /**
   * Material Design icon tone
   */
  tone?: 'outlined' | 'round' | 'two-tone';
  /**
   *  Size of the icon
   * @default 'm'
   */
  size?: Size;
};

const Icon = React.forwardRef<HTMLElement, Props>(({ icon, tone, size = 'm', className, ...props }, ref) => {
  return (
    <i
      className={cx('material-icons', 'fx-icon', tone && `fx-icon--${tone}`, `fx-icon--${size}`, className)}
      role="img"
      {...props}
      ref={ref}
    >
      {icon}
    </i>
  );
});

if (__DEV__) {
  Icon.displayName = 'FxIcon';
}

export default Icon;
