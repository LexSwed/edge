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

type FontSize = number[] & Record<Size, number>;

export const fontSizes = [12, 14, 16, 20, 24] as FontSize;

Object.assign(fontSizes, {
  xs: fontSizes[0],
  s: fontSizes[0],
  m: fontSizes[1],
  l: fontSizes[2],
  xl: fontSizes[3],
  xxl: fontSizes[4],
});

export const radii = {
  xs: 0,
  s: '2px',
  m: '3px',
  l: '8px',
  xl: '12px',
  round: '50%',
};
