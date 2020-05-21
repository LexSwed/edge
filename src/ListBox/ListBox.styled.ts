import styled from 'styled-components/macro';

export const ListBoxStyled = styled.ul`
  list-style: none;
  padding: 4px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: ${(props) => props.theme.radii.m};
  box-shadow: ${(props) => props.theme.shadows[2]};
  outline: 0;
  z-index: 2000;
`;
