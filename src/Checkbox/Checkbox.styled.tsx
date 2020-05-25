import React from 'react';
import styled, { css, CSSObject } from 'styled-components/macro';

import FieldLabel from '../FieldLabel';
import Box from '../Box';
import { outline } from '../Edge/theme';

const size = '20px';
const CheckmarkSvg = React.memo((props) => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
    />
  </svg>
));

export const Label = styled(FieldLabel)<{ disabled?: boolean }>`
  line-height: 20px;
  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.text.disabled};
    `}
`;

export const CheckMark = styled(CheckmarkSvg)<{ checked?: boolean }>`
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  border-radius: ${(props) => props.theme.radii.m};
  width: ${size};
  height: ${size};
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.border.default};
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.12s ease-in-out;
  & > path {
    transition: fill 0.12s ease-in-out;
    fill: transparent;
  }
  ${(props) =>
    props.checked &&
    css`
      background-color: ${props.theme.colors.brand[600]};
      border-color: ${props.theme.colors.brand[600]};
      & path {
        fill: #fff;
      }
    `}
`;

export const CheckboxWrapper = styled(Box)`
  ${outline}
  outline-width: 2px;
  height: ${size};
`;

export const Wrapper = styled(Box)<{ checked?: boolean; disabled?: boolean }>(
  ({ checked, disabled, theme: { colors } }) => {
    if (disabled) {
      const style: CSSObject = {
        [`& ${Input}`]: {
          cursor: 'default',
        },
      };

      if (checked) {
        style[`& ${CheckMark}`] = {
          backgroundColor: colors.border.disabled,
          borderColor: colors.border.disabled,
        };
        style[`& ${CheckMark} path`] = {
          fill: '#fff',
        };
      }

      return style;
    }
    if (checked) {
      return css`
        &:hover {
          & ${CheckMark} {
            background-color: ${colors.brand[700]};
          }
        }
      `;
    }

    return css`
      &:hover {
        & ${CheckMark} {
          border-color: ${colors.border.hover};
        }
        & ${CheckMark} path {
          fill: ${colors.border.hover};
        }
      }
    `;
  }
);

export const Input = styled.input`
  cursor: pointer;
  width: ${size};
  height: ${size};
  position: absolute;
  appearance: none;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  -webkit-tap-highlight-color: transparent;
  z-index: 1;
  &:focus {
    outline: none;
  }
`;
