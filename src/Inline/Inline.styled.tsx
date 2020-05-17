import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { Size } from '../@utils';
import { space, SpaceProps, variant } from 'styled-system';

type Props = {
  /**
   * Space between items
   */
  space: Size;
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

export const Flex = styled.div<Props>`
  display: flex;
  flex-wrap: ${(props) => (props.nowrap ? 'nowrap' : 'wrap')};
  ${parentMargin}
  ${variant<object, Props['alignY']>({
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
  })}
  ${variant<object, Props['align']>({
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
  })}
`;

export const Child = styled.div<SpaceProps>`
  display: flex;
  ${space}
`;

function parentMargin(props: ThemedStyledProps<Props, DefaultTheme>) {
  if (!props.space) {
    return css`
      margin: 0;
    `;
  }

  const gap = -1 * props.theme.space[props.space];

  return css`
    margin: ${gap}px 0 0 ${gap}px;
  `;
}
