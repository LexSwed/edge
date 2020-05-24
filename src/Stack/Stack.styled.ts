import styled from 'styled-components/macro';
import { Size } from '../@utils';
import { variant, system } from 'styled-system';

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

const space = system({
  space: {
    property: 'paddingBottom',
    scale: 'space',
  },
});

export const StackChildStyled = styled.div<{ space?: Size }>`
  &:last-child {
    padding-bottom: 0;
  }
  ${space}
`;
