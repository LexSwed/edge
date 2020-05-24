import type { Size } from '../../@utils';

type Space = number[] & Record<Size, number>;

export const space: Space = [0, 4, 8, 16, 32, 64, 128, 256, 512] as Space;

Object.assign(space, {
  xs: space[1],
  s: space[2],
  m: space[3],
  l: space[4],
  xl: space[5],
  xxl: space[6],
});

type FontSize = string[] & Record<Size & 'xxl', number>;

export const fontSizes = [
  '11.06px',
  '12.44px',
  '14px',
  '17.72px',
  '22.43px',
  '28.38px',
  '35.92px',
  '45.46px',
] as FontSize;

Object.assign(fontSizes, {
  xs: fontSizes[1],
  s: fontSizes[1],
  m: fontSizes[2],
  l: fontSizes[3],
  xl: fontSizes[4],
  xxl: fontSizes[5],
});

export const radii = {
  xs: 0,
  s: '2px',
  m: '3px',
  l: '8px',
  xl: '12px',
};

type Breakpoints = 'mobile' | 'tablet' | 'desktop' | 'wide';

export const breakpoints = ['320px', '768px', '1024px', '1400px'] as string[] & Record<Breakpoints, string>;

breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.desktop = breakpoints[2];
breakpoints.wide = breakpoints[3];

export const mediaQueries = {
  above: {
    mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
    tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
    wide: `@media screen and (min-width: ${breakpoints.wide})`,
  },
  below: {
    mobile: `@media screen and (max-width: ${breakpoints.mobile})`,
    tablet: `@media screen and (max-width: ${breakpoints.tablet})`,
    desktop: `@media screen and (max-width: ${breakpoints.desktop})`,
    wide: `@media screen and (max-width: ${breakpoints.wide})`,
  },
};
