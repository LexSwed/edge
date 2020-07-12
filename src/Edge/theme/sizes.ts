const sizes = [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem'];

export const space = {
  ...Object(sizes),
  xs: sizes[2],
  s: sizes[3],
  m: sizes[4],
  l: sizes[5],
  xl: sizes[6],
  xxl: sizes[7],
};

export const fonts = ['0.875rem', '1rem', '1.25rem', '1.5rem', '1.875rem', '2.25rem', '3rem', '4rem', '4.5rem'];

export const fontSizes = {
  ...Object(fonts),
  xs: fonts[2],
  s: fonts[2],
  m: fonts[3],
  l: fonts[4],
  xl: fonts[6],
  xxl: fonts[7],
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
