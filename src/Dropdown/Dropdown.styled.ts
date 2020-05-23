import styled from 'styled-components/macro';

export const PopperWrapper = styled.div`
  min-width: 80px;
  display: inline-block;
  position: absolute;
  &[hidden] {
    display: none;
  }
`;
