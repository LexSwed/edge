import styled, { css } from 'styled-components/macro';

type Props = {
  bordered?: boolean;
};

export const OptionStyled = styled.li<Props>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  box-sizing: border-box;
  padding: 0 8px;
  height: 36px;
  cursor: pointer;
  border-radius: ${(props) => props.theme.radii.m};
  background-color: ${(props) => (props['aria-selected'] === 'true' ? props.theme.colors.gray[300] : 'transparent')};
  border: 0px solid transparent;
  transition: border-color 0.12s, background-color 0.12s;
  color: ${(props) => props.theme.colors.text.default};
  font-family: inherit;
  font-size: ${(props) => `${props.theme.fontSizes[2]}px`};
  &:focus,
  &:active {
    background-color: transparent;
    outline: none;
  }
  &[aria-selected='true'],
  &:hover {
    background-color: ${(props) => props.theme.colors.gray[200]};
    &:active {
      background-color: ${(props) => props.theme.colors.gray[300]};
    }
  }
  &:disabled,
  &[disabled] {
    background-color: ${(props) => props.theme.colors.gray[200]};
    color: ${(props) => props.theme.colors.gray[600]};
    pointer-events: none;
    opacity: 0.6;
  }
  ${(props) =>
    props.bordered &&
    css`
      border-width: 1px;
      background-color: transparent;
      &[aria-selected='true'],
      &:focus,
      &:active {
        border-color: ${(props) => props.theme.colors.gray[700]};
      }
    `}
`;
