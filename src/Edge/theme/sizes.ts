export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

Object.assign(space, {
  xs: space[1],
  s: space[2],
  m: space[3],
  l: space[4],
  xl: space[5],
  xxl: space[6],
});

export const fontSizes = [12, 14, 16, 20, 24];

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
  s: 2,
  m: 3,
  l: 8,
  xl: 12,
  round: '50%',
};
