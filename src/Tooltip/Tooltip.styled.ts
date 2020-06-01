import styled from 'styled-components/macro';
import { padding, PaddingProps } from 'styled-system';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)<PaddingProps>`
  background-color: ${(props) => props.theme.colors.surface[2]};
  box-shadow: ${(props) => props.theme.shadows[2]};
  ${padding}
  border-radius: ${(props) => props.theme.radii.m};
`;
