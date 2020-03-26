import React from 'react';
import cx from 'classnames';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  /**
   * Name of the icon
   */
  icon: string;
  /**
   * Material Design icon variant
   * @default 'default'
   */
  variant?: 'default' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  /**
   *  Size of the icon
   * @default 'm'
   */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
};

const Icon = React.forwardRef<HTMLElement, Props>(({ icon, variant, size, className, ...props }) => {
  return (
    <i className={cx('material-icons', 'fx-icon', `fx-icon-${variant}`, `fx-icon-${size}`, className)} {...props}>
      {icon}
    </i>
  );
});

if (__DEV__) {
  Icon.displayName = 'Fx-Icon';
}

export default Icon;
