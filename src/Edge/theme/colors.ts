const shade = {
  0: '#fff',
  100: '#f7fafc',
  200: '#edf2f7',
  300: '#e2e8f0',
  400: '#cbd5e0',
  500: '#a0aec0',
  600: '#718096',
  700: '#4a5568',
  800: '#2d3748',
  900: '#1a202c',
  1000: '#000',
  modes: {
    dark: {
      0: '#000',
      100: '#1A202C',
      200: '#2D3748',
      300: '#333333',
      400: '#3b3b3b',
      500: '#484848',
      600: '#4d4d4d',
      700: '#484d56',
      800: '#767980',
      900: '#a3a6ab',
      1000: '#fff',
    },
  },
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
  default: shade[900],
  light: shade[700],
  ultralight: shade[600],
  disabled: shade[600],
  modes: {
    dark: {
      default: shade.modes.dark[1000],
      light: shade.modes.dark[700],
      ultralight: shade.modes.dark[600],
      disabled: shade.modes.dark[600],
    },
  },
};

const border = {
  default: shade[500],
  hover: shade[600],
  focus: shade[800],
  disabled: shade[500],
  modes: {
    dark: {
      default: shade.modes.dark[600],
      hover: shade.modes.dark[700],
      focus: shade.modes.dark[800],
      disabled: shade.modes.dark[500],
    },
  },
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
  0: shade[0],
  1: shade[0],
  2: shade[0],
  disabled: shade[300],
  modes: {
    dark: {
      0: shade.modes.dark[100],
      1: shade.modes.dark[200],
      2: shade.modes.dark[300],
      disabled: shade.modes.dark[400],
    },
  },
};

export default {
  shade,
  brand,
  blue,
  green,
  red,
  positive,
  critical,
  text,
  border,
  surface,
};
