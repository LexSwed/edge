const brand = {
  100: '#f0abab',
  200: '#ed9a9a',
  300: '#ea8989',
  400: '#e77978',
  500: '#e46867',
  600: '#e15756',
  700: '#cb4e4d',
  800: '#b44645',
  900: '#9e3d3c'
};

const gray = {
  100: '#F7FAFC',
  200: '#EDF2F7',
  300: '#E2E8F0',
  400: '#CBD5E0',
  500: '#A0AEC0',
  600: '#718096',
  700: '#4A5568',
  800: '#2D3748',
  900: '#1A202C'
};

const red = {
  100: '#FFF5F5',
  200: '#FED7D7',
  300: '#FEB2B2',
  400: '#FC8181',
  500: '#F56565',
  600: '#E53E3E',
  700: '#C53030',
  800: '#9B2C2C',
  900: '#742A2A'
};

const yellow = {
  100: '#FFECB3',
  200: '#FFE082',
  300: '#FFD54F',
  400: '#FFCA28',
  500: '#FFC107',
  600: '#FFB300',
  700: '#FFA000',
  800: '#FF8F00',
  900: '#FF6F00'
};

export default {
  colors: {
    brand,
    gray,
    yellow,
    red,
    text: {
      main: gray[900],
      weak: gray[700],
      brand: brand[600]
    }
  },
  border: {
    radius: 2,
    colors: {
      main: gray[400],
      hover: gray[600],
      focus: gray[800]
    }
  }
};
