import styled from 'styled-components';
import { Size } from '../@utils';
import { variant, SpaceProps } from 'styled-system';
import theme from '../Edge/theme';
import Column from '../Column';

export type Props = {
  /**
   * Space between columns
   */
  space?: Size;
  /**
   * Alignment of columns
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'spread' | 'apart';
  /**
   * Vertical alignment
   */
  alignY?: 'top' | 'center' | 'bottom';
};

const align = variant<object, NonNullable<Props['align']>>({
  prop: 'align',
  variants: {
    left: {
      justifyContent: 'flex-start',
    },
    center: {
      justifyContent: 'center',
    },
    right: {
      justifyContent: 'flex-end',
    },
    apart: {
      '--space': 0,
      'justifyContent': 'space-between',
    },
    spread: {
      '--space': 0,
      'justifyContent': 'space-evenly',
    },
  },
});

const space = variant<object, Size>({
  prop: 'space',
  variants: {
    xs: {
      '--space': theme.space[1],
    },
    s: {
      '--space': theme.space[2],
    },
    m: {
      '--space': theme.space[3],
    },
    l: {
      '--space': theme.space[4],
    },
    xl: {
      '--space': theme.space[5],
    },
  },
});

export const ColumnsStyled = styled.div<Props & SpaceProps>`
  --space: 0;
  --negative: calc(var(--space) * -1);
  display: flex;
  flex-direction: row;
  margin-left: var(--negative);
  ${space}
  ${align}
  & ${Column} {
      padding-left: var(--space);
  }
`;
