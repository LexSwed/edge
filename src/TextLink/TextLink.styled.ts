import styled from 'styled-components/macro';

export const TextLinkStyled = styled.a`
  color: ${(props) => props.theme.colors.brand[700]};
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
