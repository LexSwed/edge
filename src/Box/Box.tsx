import styled from 'styled-components/macro';
import {
  compose,
  space,
  SpaceProps,
  shadow,
  ShadowProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  color,
  ColorProps,
  borderRadius,
  BorderRadiusProps,
  border,
  BorderProps,
  position,
  PositionProps,
  grid,
  GridProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

type Props = SpaceProps &
  ShadowProps &
  LayoutProps &
  FlexboxProps &
  ColorProps &
  BorderRadiusProps &
  BorderProps &
  PositionProps &
  GridProps;

const Box = styled.div.withConfig({
  shouldForwardProp,
})<Props>`
  ${compose(layout, space, shadow, flexbox, color, borderRadius, border, position, grid)}
`;

if (__DEV__) {
  Box.displayName = 'FxBox';
}

export default Box;
