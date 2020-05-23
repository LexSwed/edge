import styled from 'styled-components/macro';
import { color } from 'styled-system';

export const EdgeStyled = styled.div`
  margin: 0;
  font-family: 'Source Sans Pro', system-ui, sans-serif;
  font-size: 14px;
  line-height: 1.2em;
  ${color}

  & * {
    box-sizing: border-box;
  }
`;
