import styled from 'styled-components/macro';
import { color, ColorProps } from 'styled-system';

export const TextLinkStyled = styled.a<ColorProps>`
  ${color}
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

TextLinkStyled.defaultProps = {
  color: 'brand.700',
};
