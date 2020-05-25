import { css } from 'styled-components/macro';

import * as sizes from './sizes';
import colors from './colors';

const shadows = {
  0: '0 0 1px rgba(0,0,0,0.7)',
  1: '0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11)',
  2: '0px 12.8px 28.8px rgba(0, 0, 0, 0.13), 0px 0px 9.2px rgba(0, 0, 0, 0.11)',
};

export const outline = () => css`
  outline-style: solid;
  outline-width: 1px;
  outline-color: transparent;
  &:focus-within,
  &:focus {
    outline-color: ${(props) => props.theme.colors.border.focus};
  }
`;

export default { ...sizes, colors, shadows };
