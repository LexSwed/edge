import styled, { css } from 'styled-components/macro';
import Field from '../Field';

const size = () => css`
  width: 36px;
  height: 20px;
`;

export const ToggleStyled = styled.div<{ checked?: boolean }>`
  background: ${(props) => props.theme.colors.surface[1]};
  border: 1px solid ${(props) => props.theme.colors.border.default};
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
    background-color: ${(props) => props.theme.colors.border.default};
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

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  ${size}
  outline: none;
  appearance: none;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  ${({
    checked,
    theme: {
      colors: { border },
    },
  }) =>
    !checked &&
    css`
      &:hover + ${ToggleStyled}:after {
        background-color: ${border.hover};
      }
      &:focus + ${ToggleStyled}:after {
        background-color: ${border.focus};
      }
    `}
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const FieldStyled = styled(Field)`
  ${({ theme }) => css`
    &:hover ${ToggleStyled} {
      border-color: ${theme.colors.border.hover};
    }
    &:focus-within ${ToggleStyled} {
      border-color: ${theme.colors.border.focus};
    }
  `}
`;
