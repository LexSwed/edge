import styled from 'styled-components/macro';
import { padding, PaddingProps } from 'styled-system';

export const Wrapper = styled.div<PaddingProps>`
  background-color: ${(props) => props.theme.colors.surface[2]};
  box-shadow: ${(props) => props.theme.shadows[2]};
  ${padding}
  border-radius: ${(props) => props.theme.radii.l};
`;

export const TriggerWrapper = styled.div`
  display: inline-block;
`;
