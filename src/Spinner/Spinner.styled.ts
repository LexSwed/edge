import styled, { keyframes } from 'styled-components/macro';
import { variant } from 'styled-system';
import { Size } from '../@utils';

const size = variant<object, Size>({
  prop: 'size',
  variants: {
    xs: {
      borderWidth: '3px',
      size: '12px',
    },
    s: {
      borderWidth: '4px',
      size: '16px',
    },
    m: {
      borderWidth: '4px',
      size: '24px',
    },
    l: {
      borderWidth: '6px',
      size: '48px',
    },
    xl: {
      borderWidth: '6px',
      size: '64px',
    },
  },
});

export const Wrapper = styled.div<{ size: Size }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${size}
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Particle = styled.div<{ size: Size; variant: 'dark' | 'light' | 'brand' }>`
  box-sizing: border-box;
  position: absolute;
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-style: solid;
  border-color: transparent;
  border-top-color: ${(props) => props.theme.colors.gray[600]};
  ${size}
  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
  ${variant<object, 'dark' | 'light' | 'brand'>({
    prop: 'variant',
    variants: {
      dark: {
        borderTopColor: 'gray.800',
      },
      light: {
        borderTopColor: '#fff',
      },
      brand: {
        borderTopColor: 'brand.600',
      },
    },
  })}
`;
