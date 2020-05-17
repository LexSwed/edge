import styled from 'styled-components';
import { Size } from '../@utils';
import { variant } from 'styled-system';

type Props = { align: 'left' | 'right' | 'center' };

export const StackStyled = styled.div<Props>`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;

  ${variant<object, Props['align']>({
    prop: 'align',
    variants: {
      left: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      right: {
        alignItems: 'flex-end',
      },
    },
  })}
`;

export const StackChildStyled = styled.div<{ space?: Size }>`
  &:last-child {
    padding-bottom: 0;
  }
  ${variant<object, Size>({
    prop: 'space',
    variants: {
      xs: {
        pb: 'xs',
      },
      s: {
        pb: 's',
      },
      m: {
        pb: 'm',
      },
      l: {
        pb: 'l',
      },
      xl: {
        pb: 'xl',
      },
    },
  })}
`;
