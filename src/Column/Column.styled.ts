import styled from 'styled-components/macro';
import { variant } from 'styled-system';

type Props = {
  /**
   * Width of the column
   * @default fluid
   */
  width?: 'content' | 'fluid' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5';
};

export const ColumnStyled = styled('div').withConfig({
  shouldForwardProp: (prop) => !['width'].includes(prop),
})<Props>`
  width: 100%;
  ${variant<object, NonNullable<Props['width']>>({
    prop: 'width',
    variants: {
      'content': {
        flexShrink: 0,
        width: 'auto',
      },
      'fluid': {},
      '1/2': { flex: '0 0 50%' },
      '1/3': { flex: '0 0 calc(100% / 3)' },
      '2/3': { flex: '0 0 calc(2 * (100% / 3))' },
      '1/4': { flex: '0 0 calc(100% / 4)' },
      '3/4': { flex: '0 0 calc(3 * (100% / 4))' },
      '1/5': { flex: '0 0 calc(100% / 5)' },
      '2/5': { flex: '0 0 calc(2 * (100% / 5))' },
      '3/5': { flex: '0 0 calc(3 * (100% / 5))' },
      '4/5': { flex: '0 0 calc(4 * (100% / 5))' },
    },
  })}
`;
