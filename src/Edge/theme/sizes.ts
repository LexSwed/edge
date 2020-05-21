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

type FontSize = number[] & Record<Size & 'xxl', number>;

export const fontSizes = [11.06, 12.44, 14, 17.72, 22.43, 28.38, 35.92, 45.46] as FontSize;

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
  round: '50%',
};
