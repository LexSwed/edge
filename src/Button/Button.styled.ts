import styled from 'styled-components';
import { variant } from 'styled-system';
import { Size } from '../@utils';
import theme from '../Edge/theme';

const sizeVariants: Record<Size, any> = {
  xs: {
    fontSize: 'xs',
    height: 20,
    px: 'xs',
  },
  s: {
    fontSize: 's',
    height: 26,
    px: '10px',
  },
  m: {
    fontSize: 'm',
    height: 32,
    px: 'm',
  },
  l: {
    fontSize: 'l',
    height: 38,
    px: 'm',
  },
  xl: {
    fontSize: 'xl',
    height: 46,
    px: 'm',
  },
};
export type Tone = 'flat' | 'transparent' | 'brand' | 'critical';

const toneVariants: Record<Tone, any> = {
  flat: {
    'borderColor': 'transparent',
    'bg': theme.colors.gray[200],
    '&:hover': {
      bg: theme.colors.gray[300],
    },
    '&:active': {
      bg: theme.colors.gray[200],
    },
    '&:disabled': {
      color: theme.colors.gray[600],
    },
  },
  transparent: {
    'borderColor': 'transparent',
    'bg': 'transparent',
    '&:hover': {
      bg: theme.colors.gray[200],
    },
    '&:active': {
      bg: theme.colors.gray[100],
    },
    '&:disabled': {
      color: theme.colors.gray[600],
    },
  },
  brand: {
    'color': '#fff',
    'borderColor': 'transparent',
    'bg': theme.colors.brand[600],
    '&:hover': {
      bg: theme.colors.brand[700],
    },
    '&:active': {
      bg: theme.colors.brand[600],
    },
    '&:disabled': {
      color: theme.colors.gray[200],
    },
  },
  critical: {
    'color': '#fff',
    'borderColor': 'transparent',
    'bg': theme.colors.red[600],
    '&:hover': {
      bg: theme.colors.red[700],
    },
    '&:active': {
      bg: theme.colors.red[600],
    },
    '&:disabled': {
      color: theme.colors.gray[200],
    },
  },
};

const Button = styled.button`
  background-color: #fff;
  border: 1px solid ${theme.colors.border.default};
  color: ${theme.colors.text.default};
  font-family: var(--font-family);
  font-size: 12px;
  line-height: 1;
  transition: background-color 0.1s, border-color 0.1s;
  cursor: pointer;
  text-decoration: none;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: ${theme.radii.s};
  padding: 0;

  &:hover {
    background-color: ${theme.colors.gray[200]};
  }
  &:active {
    background-color: ${theme.colors.gray[300]};
  }
  &:active,
  &:hover {
    border-color: ${theme.colors.border.hover};
  }
  &:focus {
    border-color: ${theme.colors.border.focus};
    outline: none;
  }
  &:disabled {
    position: relative;
    border-color: transparent;
    opacity: 0.8;
    pointer-events: none;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: not-allowed;
      pointer-events: all;
    }
  }
  ${variant({
    prop: 'size',
    variants: sizeVariants,
  })}
  ${variant({
    prop: 'tone',
    variants: toneVariants,
  })}
`;

export default Button;
