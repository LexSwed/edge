import styled from 'styled-components';
import { fontSize, color, FontSizeProps, ColorProps } from 'styled-system';

export const Label = styled('label').withConfig({
  shouldForwardProp: (prop) => !['fontSize', 'color'].includes(prop),
})<FontSizeProps & ColorProps>`
  display: inline-block;
  ${fontSize}
  ${color}
  font-weight: 400;
  line-height: 1;
  transition: all 0.12s ease-in-out;
`;
