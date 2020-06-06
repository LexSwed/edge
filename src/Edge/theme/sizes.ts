const sizes = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export const space = {
  ...Object(sizes),
  xs: sizes[1],
  s: sizes[2],
  m: sizes[3],
  l: sizes[4],
  xl: sizes[5],
  xxl: sizes[6],
};

const fonts = ['11.06px', '12.44px', '14px', '17.72px', '22.43px', '28.38px', '35.92px', '45.46px'];

export const fontSizes = {
  ...Object(fonts),
  xs: fonts[1],
  s: fonts[1],
  m: fonts[2],
  l: fonts[3],
  xl: fonts[4],
  xxl: fonts[5],
};

export const radii = {
  xs: 0,
  s: '2px',
  m: '3px',
  l: '8px',
  xl: '12px',
};

type Breakpoints = 'mobile' | 'tablet' | 'desktop' | 'wide';

export const breakpoints = ['320px', '768px', '1024px', '1400px'] as string[] & Record<Breakpoints, string>;

export const mediaQueries = {
  above: {
    mobile: `@media screen and (min-width: ${breakpoints[0]})`,
    tablet: `@media screen and (min-width: ${breakpoints[1]})`,
    desktop: `@media screen and (min-width: ${breakpoints[2]})`,
    wide: `@media screen and (min-width: ${breakpoints[3]})`,
  },
  below: {
    mobile: `@media screen and (max-width: ${breakpoints[0]})`,
    tablet: `@media screen and (max-width: ${breakpoints[1]})`,
    desktop: `@media screen and (max-width: ${breakpoints[2]})`,
    wide: `@media screen and (max-width: ${breakpoints[3]})`,
  },
};
