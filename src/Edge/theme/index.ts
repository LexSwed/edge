import { css, ThemeProps, DefaultTheme } from 'styled-components/macro';

import * as sizes from './sizes';
import colors from './colors';

const shadows = {
  0: '0 0 1px rgba(0,0,0,0.7)',
  1: '0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11)',
  2: '0px 12.8px 28.8px rgba(0, 0, 0, 0.13), 0px 0px 9.2px rgba(0, 0, 0, 0.11)',
};

export const outline = (props: ThemeProps<DefaultTheme>) => css`
  outline: none;

  &[data-focus-visible]:focus {
    outline: 2px auto ${props.theme.colors.border.focus};
  }
/* position: relative;

  &:after {
    position: absolute;
    display: block;
    content: '';
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: ${props.theme.radii.m};
    transition: box-shadow 0.12s ease-in-out;
  }

  &[data-focus-visible]:focus {
    border-color: transparent !important;
    &:after {
      box-shadow: 0 0 0 2px ${props.theme.colors.border.focus};
    }
  } */
`;

export default { ...sizes, colors, shadows };
