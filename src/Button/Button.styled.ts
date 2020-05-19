import styled from 'styled-components/macro';
import { variant } from 'styled-system';
import { Size } from '../@utils';

export const buttonSize = {
  xs: 20,
  s: 26,
  m: 32,
  l: 38,
  xl: 46,
};

const sizeVariants: Record<Size, any> = {
  xs: {
    fontSize: 'xs',
    height: buttonSize.xs,
    px: 'xs',
  },
  s: {
    fontSize: 's',
    height: buttonSize.s,
    px: '10px',
  },
  m: {
    fontSize: 'm',
    height: buttonSize.m,
    px: 'm',
  },
  l: {
    fontSize: 'l',
    height: buttonSize.l,
    px: 'm',
  },
  xl: {
    fontSize: 'xl',
    height: buttonSize.xl,
    px: 'm',
  },
};
export type Tone = 'flat' | 'transparent' | 'brand' | 'critical';

const toneVariants: Record<Tone, any> = {
  flat: {
    'borderColor': 'transparent',
    'bg': 'gray.200',
    '&:hover': {
      bg: 'gray.300',
    },
    '&:active': {
      bg: 'gray.200',
    },
    '&:disabled': {
      color: 'gray.600',
    },
  },
  transparent: {
    'borderColor': 'transparent',
    'bg': 'transparent',
    '&:hover': {
      'bg': 'gray.200',
      '&:not(:active):not(:focus)': {
        borderColor: 'transparent',
      },
    },
    '&:active': {
      bg: 'gray.100',
    },
    '&:disabled': {
      color: 'gray.600',
    },
  },
  brand: {
    'color': '#fff',
    'borderColor': 'transparent',
    'bg': 'brand.600',
    '&:hover': {
      bg: 'brand.700',
    },
    '&:active': {
      bg: 'brand.600',
    },
    '&:disabled': {
      color: 'gray.200',
    },
  },
  critical: {
    'color': '#fff',
    'borderColor': 'transparent',
    'bg': 'red.600',
    '&:hover': {
      bg: 'red.700',
    },
    '&:active': {
      bg: 'red.600',
    },
    '&:disabled': {
      color: 'gray.200',
    },
  },
};

export const ButtonStyled = styled.button`
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.border.default};
  color: ${(props) => props.theme.colors.text.default};
  font-family: var(--font-family);
  line-height: 1;
  transition: background-color 0.1s, border-color 0.1s;
  cursor: pointer;
  text-decoration: none;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.radii.s};
  padding: 0;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray[200]};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.gray[300]};
  }
  &:active,
  &:hover {
    border-color: ${(props) => props.theme.colors.border.hover};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.border.focus};
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
