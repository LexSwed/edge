import styled, { css } from 'styled-components/macro';
import Field from '../Field';
import { Input } from '../Checkbox/Checkbox.styled';
import FieldLabel from '../FieldLabel';
import Box from '../Box';
import { outline } from '../Edge/theme';

const height = '20px';
const size = () => css`
  width: 36px;
  height: ${height};
`;

export const ToggleStyled = styled.div<{ checked?: boolean }>`
  background: ${(props) => props.theme.colors.surface[1]};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.border.focus};
  border-radius: 10px;
  transition: background 1s ease-in-out, 0.12s ease-in-out;
  position: relative;
  ${size}
  &:after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: ${(props) => props.theme.colors.border.hover};
    position: absolute;
    top: 3px;
    left: 3px;
    transition: 0.24s ease-in-out;
  }
  ${({ checked, theme }) =>
    checked &&
    css`
      background: ${theme.colors.brand[500]};
      border-color: ${theme.colors.brand[500]};
      &:after {
        background-color: #fff;
        transform: translateX(16px);
      }
      &:hover {
        background-color: ${theme.colors.brand[600]};
        border-color: ${theme.colors.brand[600]};
      }
    `}
`;

export const ToggleInput = styled(Input)`
  ${size}
  ${({
    checked,
    theme: {
      colors: { border },
    },
  }) =>
    !checked &&
    css`
      &:hover + ${ToggleStyled}:after, &:focus + ${ToggleStyled}:after {
        background-color: ${border.focus};
      }
    `}
`;

export const ToggleWrapper = styled(Box)`
  position: relative;
  height: ${height};
  ${outline}
  outline-width: 2px;
`;

export const FieldStyled = styled(Field)``;

export const Label = styled(FieldLabel)`
  line-height: ${height};
`;
