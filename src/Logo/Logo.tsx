import React from 'react';

import LogoBrand from './logo-solid.svg';
import LogoDark from './logo-dark.svg';
import LogoLight from './logo-light.svg';
import { Size } from '../@utils';

import { LogoStyled } from './Logo.styled';

type Props = {
  /** Main color scheme of the Logo
   * @default 'brand'
   */
  variant?: keyof typeof LogoIcon;
  /**
   * Size of the logo
   * @default 'm'
   */
  size?: Size;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<SVGElement>, SVGElement>, 'children'>;

const Logo = React.forwardRef<HTMLDivElement, Props>(({ variant = 'brand', size = 'm', ...props }, ref) => {
  if (!LogoIcon[variant]) {
    return null;
  }

  return <LogoStyled as={LogoIcon[variant]} size={size} ref={ref} {...props} />;
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
