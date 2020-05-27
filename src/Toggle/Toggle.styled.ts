import styled, { css, CSSObject } from 'styled-components/macro';
import { Input } from '../Checkbox/Checkbox.styled';
import FieldLabel from '../FieldLabel';
import Box from '../Box';
import { outline } from '../Edge/theme';
import { variant } from 'styled-system';

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
  ${({ checked, disabled, theme: { colors } }) => {
    if (disabled) {
      const styles: CSSObject = {
        cursor: 'default',
      };

      if (checked) {
        styles[`& + ${ToggleStyled}`] = {
          borderColor: colors.border.disabled,
          backgroundColor: colors.border.disabled,
        };
        styles[` & + ${ToggleStyled}:after`] = {
          backgroundColor: '#fff',
        };
      } else {
        styles[`& + ${ToggleStyled}`] = {
          borderColor: colors.border.disabled,
        };
        styles[` & + ${ToggleStyled}:after`] = {
          backgroundColor: colors.border.disabled,
        };
      }

      return styles;
    }

    if (checked) {
      return null;
    }

    return css`
      &:hover + ${ToggleStyled}:after, &:focus + ${ToggleStyled}:after {
        background-color: ${colors.border.focus};
      }
    `;
  }}
`;

export const ToggleWrapper = styled(Box)`
  position: relative;
  height: ${height};
  ${outline}
`;

export const ContentWrapper = styled(Box)``;

export const Label = styled(FieldLabel)`
  line-height: ${height};
`;

export const Wrapper = styled(Box)<{ align?: 'left' | 'right' | 'apart' }>`
  ${variant({
    prop: 'align',
    variants: {
      left: {},
      right: {
        gridTemplateColumns: '1fr auto',
        [`& ${ToggleWrapper}`]: {
          order: 2,
        },
        [`& ${ContentWrapper}`]: {
          textAlign: 'right',
          justifySelf: 'flex-end',
        },
      },
      apart: {
        gridTemplateColumns: '1fr auto',
        [`& ${ToggleWrapper}`]: {
          order: 2,
        },
      },
    },
  })}
`;
