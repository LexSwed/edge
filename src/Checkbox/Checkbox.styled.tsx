import React from 'react';
import styled, { css } from 'styled-components';
import Inline from '../Inline';
import { variant } from 'styled-system';

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

export const CheckMark = styled(CheckmarkSvg)<{ checked?: boolean; tone?: 'critical' | 'positive' }>`
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  border-radius: 2px;
  width: ${size};
  height: ${size};
  background-color: #fff;
  border: ${(props) => `1px solid var(--border-color, ${props.theme.colors.border.default})`};
  cursor: pointer;
  box-sizing: border-box;
  & > path {
    transition: fill 0.12s ease-in-out;
    fill: var(--check-color, transparent);
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
  ${variant({
    prop: 'tone',
    variants: {
      critical: {
        borderColor: 'critical.1',
      },
      positive: {
        borderColor: 'positive.1',
      },
    },
  })}
`;

export const InlineWrapper = styled(Inline).attrs({
  alignY: 'center',
  space: 's',
})<{ checked?: boolean }>`
  display: inline-flex;
  border: 1px solid transparent;
  padding-top: 0;
  &:focus-within {
    border-color: ${(props) => props.theme.colors.border.focus};
  }
  ${(props) => {
    if (props.checked) {
      return css`
        &:hover {
          & ${CheckMark} {
            --border-color: ${(props) => props.theme.colors.brand[700]};
            --check-color: ${(props) => props.theme.colors.brand[700]};
          }
        }
      `;
    }

    return css`
      &:hover {
        & ${CheckMark} {
          --border-color: ${(props) => props.theme.colors.border.default};
          --check-color: ${(props) => props.theme.colors.border.hover};
        }
      }
    `;
  }}
`;

export const CheckBoxWrapper = styled.span`
  display: inline-flex;
`;

export const Input = styled.input`
  cursor: pointer;
  width: ${size};
  height: ${size};
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
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
