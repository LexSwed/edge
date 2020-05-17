import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components/macro';
import { Size } from '../@utils';
import { space, SpaceProps, variant } from 'styled-system';

type Props = {
  /**
   * Space between items
   */
  space?: Size;
  /**
   * Horizontal alignment
   * @default 'left'
   */
  align: 'left' | 'right' | 'center';
  /**
   * Vertical alignment
   * @default 'center'
   */
  alignY: 'center' | 'top' | 'bottom';
  /**
   * Disable wrapping elements to new line
   * @default false
   */
  nowrap: boolean;
};

export const Wrapper = styled.div<{ space?: Props['space'] }>`
  padding-top: 1px;
  &:before {
    content: '';
    display: block;
    margin-top: ${(props) => (props.space ? `-${props.theme.space[props.space] + 1}px` : '-1px')};
  }
`;

const align = variant<object, Props['align']>({
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
  },
});

const alignY = variant<object, Props['alignY']>({
  prop: 'alignY',
  variants: {
    top: {
      alignItems: 'flex-start',
    },
    center: {
      alignItems: 'center',
    },
    bottom: {
      alignItems: 'flex-end',
    },
  },
});

const wrap = (props: Partial<Props>) => {
  if (props.nowrap) {
    return css`
      flex-wrap: nowrap;
    `;
  }

  return css`
    flex-wrap: wrap;
  `;
};

export const Flex = styled.div<Props>`
  display: flex;
  ${wrap}
  ${parentMargin}
  ${align}
  ${alignY}
`;

export const Child = styled.div<SpaceProps>`
  display: flex;
  ${space}
`;

function parentMargin(props: ThemedStyledProps<Partial<Props>, DefaultTheme>) {
  if (!props.space) {
    return css`
      margin: 0;
    `;
  }

  const gap = -1 * props.theme.space[props.space];

  return css`
    margin-left: ${gap}px;
    margin-top: ${gap}px;
  `;
}

export const FlexNew = styled.div<Props>`
  display: flex;
  gap: ${(props) => (props.space ? `${props.theme.space[props.space]}px` : 0)};
  ${wrap}
  ${align}
  ${alignY}
`;
