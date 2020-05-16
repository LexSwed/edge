import styled from 'styled-components';
import {
  space,
  SpaceProps,
  shadow,
  ShadowProps,
  layout,
  LayoutProps,
  flex,
  FlexProps,
  color,
  ColorProps,
  borderRadius,
  BorderRadiusProps,
} from 'styled-system';

type Props = SpaceProps & ShadowProps & LayoutProps & FlexProps & ColorProps & BorderRadiusProps;

const Box = styled.div<Props>`
  ${layout}
  ${space}
  ${shadow}
  ${flex}
  ${color}
  ${borderRadius}
`;

if (__DEV__) {
  Box.displayName = 'FxBox';
}

export default Box;
