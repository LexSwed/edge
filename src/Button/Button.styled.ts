import styled, { css } from 'styled-components/macro';
import { variant } from 'styled-system';

import { Size } from '../@utils';
import { outline } from '../Edge/theme';
import Inline from '../Inline';

export const buttonSize = {
  xs: 20,
  s: 26,
  m: 32,
  l: 38,
  xl: 46,
};

const size = variant<object, Size>({
  prop: 'size',
  variants: {
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
  },
});

export type Variant = 'default' | 'flat' | 'transparent' | 'brand' | 'critical';

const variants = variant<object, Variant>({
  prop: 'variant',
  variants: {
    default: {
      'borderColor': 'border.default',
      'bg': 'surface.0',
      '&:hover': {
        bg: 'shade.200',
      },
      '&:active': {
        bg: 'shade.300',
      },
      '&:active,&:hover': {
        borderColor: 'border.hover',
      },
      '&:focus': {
        borderColor: 'border.focus',
      },
    },
    flat: {
      'borderColor': 'transparent',
      'bg': 'shade.200',
      '&:hover': {
        bg: 'shade.300',
      },
      '&:active': {
        bg: 'shade.200',
      },
      '&:disabled': {
        color: 'shade.600',
      },
    },
    transparent: {
      'borderColor': 'transparent',
      'bg': 'transparent',
      '&:hover': {
        bg: 'shade.200',
      },
      '&:active': {
        bg: 'shade.100',
      },
      '&:disabled': {
        color: 'shade.600',
      },
    },
    brand: {
      'color': '#fff',
      'borderColor': 'transparent',
      'bg': 'brand.600',
      '&:hover': {
        bg: 'brand.700',
      },
      '&:active, &:focus': {
        bg: 'brand.600',
      },
      '&:disabled': {
        color: 'shade.200',
      },
    },
    critical: {
      'color': '#fff',
      'borderColor': 'transparent',
      'bg': 'red.600',
      '&:hover': {
        bg: 'red.700',
      },
      '&:active, &:focus': {
        bg: 'red.600',
      },
      '&:disabled': {
        color: 'shade.200',
      },
    },
  },
});

const borderRadius = css`
  border-radius: ${(props) => props.theme.radii.s};
`;

export const ButtonStyled = styled.button<{ size: Size; variant?: Variant }>`
  position: relative;
  background-color: #fff;
  border: 1px solid transparent;
  color: ${(props) => props.theme.colors.text.default};
  font-family: var(--font-family);
  line-height: 1;
  transition: background-color 0.1s, border-color 0.1s;
  cursor: pointer;
  text-decoration: none;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 0;
  ${borderRadius}
  ${outline}
  ${(props) => variants({ ...props, variant: props.variant || 'default' })}
  ${size}
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
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  ${borderRadius}
`;

export const InlineStyled = styled(Inline).withConfig({
  shouldForwardProp: (prop) => !['loading'].includes(prop as string),
})<{
  loading?: boolean;
}>`
  opacity: ${(props) => props.loading && '0'};
`;
