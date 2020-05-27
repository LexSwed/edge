const gray = {
  100: '#f7fafc',
  200: '#edf2f7',
  300: '#e2e8f0',
  400: '#cbd5e0',
  500: '#a0aec0',
  600: '#718096',
  700: '#4a5568',
  800: '#2d3748',
  900: '#1a202c',
};
const brand = {
  100: '#ebf4ff',
  200: '#c3dafe',
  300: '#a3bffa',
  400: '#7f9cf5',
  500: '#667eea',
  600: '#5a67d8',
  700: '#4c51bf',
  800: '#434190',
  900: '#3c366b',
};
const blue = {
  100: '#ebf8ff',
  200: '#bee3f8',
  300: '#90cdf4',
  400: '#63b3ed',
  500: '#4299e1',
  600: '#3182ce',
  700: '#2b6cb0',
  800: '#2c5282',
  900: '#2a4365',
};
const green = {
  100: '#e6fffa',
  200: '#b2f5ea',
  300: '#81e6d9',
  400: '#4fd1c5',
  500: '#38b2ac',
  600: '#319795',
  700: '#2c7a7b',
  800: '#285e61',
  900: '#234e52',
};
const red = {
  100: '#fff5f5',
  200: '#fed7d7',
  300: '#feb2b2',
  400: '#fc8181',
  500: '#f56565',
  600: '#e53e3e',
  700: '#c53030',
  800: '#9b2c2c',
  900: '#742a2a',
};

const text = {
  default: gray[900],
  light: gray[700],
  ultralight: gray[500],
  disabled: gray[600],
  modes: {
    dark: { default: '#fff', light: gray[300] },
  },
};

const border = {
  default: gray[600],
  hover: gray[700],
  focus: gray[800],
  disabled: gray[500],
};

const positive = {
  1: green[500],
  2: green[600],
  3: green[700],
};

const critical = {
  1: red[500],
  2: red[600],
  3: red[700],
};

const surface = {
  0: '#fff',
  1: '#fff',
  2: '#fff',
  disabled: gray[300],
};

export default {
  gray,
  brand,
  blue,
  green,
  red,
  text,
  border,
  accent: brand[600],
  positive,
  critical,
  surface,
};
