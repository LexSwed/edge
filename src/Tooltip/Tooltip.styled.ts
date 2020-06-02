import styled, { css } from 'styled-components/macro';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.surface[2]};
    box-shadow: ${theme.shadows[2]};
    border-radius: ${theme.radii.m};
    padding: ${theme.space.xs};
  `}
`;
