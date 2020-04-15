import React from 'react';
import cx from 'classnames';

import LogoBrand from './logo-solid.svg';
import LogoDark from './logo-dark.svg';
import LogoLight from './logo-light.svg';
import { Size } from '../@utils';

import './styles.css';

type Props = {
  /** Main color scheme of the Logo
   * @default 'brand'
   */
  tone?: keyof typeof LogoIcon;
  /**
   * Size of the logo
   * @default 'm'
   */
  size?: Size;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'>;

const Logo = React.forwardRef<HTMLDivElement, Props>(({ tone = 'brand', size = 'm', className, ...props }, ref) => {
  const classes = cx('fx-logo', size && `fx-logo--${size}`, className);

  const Icon = LogoIcon[tone];

  return <Icon className={classes} ref={ref} {...props} />;
});

if (__DEV__) {
  Logo.displayName = 'FxLogo';
}

export default Logo;

const LogoIcon = {
  brand: LogoBrand,
  dark: LogoDark,
  light: LogoLight,
};
