import styled from 'styled-components/macro';
import { Size } from '../@utils';
import { variant, SpaceProps } from 'styled-system';
import theme from '../Edge/theme';
import Column from '../Column';

type Props = {
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
      '--space': theme.space.xs,
    },
    s: {
      '--space': theme.space.s,
    },
    m: {
      '--space': theme.space.m,
    },
    l: {
      '--space': theme.space.l,
    },
    xl: {
      '--space': theme.space.xl,
    },
  },
});

export const ColumnsStyled = styled.div<Props & SpaceProps>`
  --space: 0;
  display: flex;
  flex-direction: row;
  ${space}
  ${align}
  & ${Column}:not(:first-child) {
      padding-left: var(--space);
  }
`;
