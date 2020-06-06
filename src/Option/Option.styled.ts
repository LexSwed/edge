import styled from 'styled-components/macro';
import { variant } from 'styled-system';

type Props = {
  variant?: 'bordered';
};

const variants = variant<object, NonNullable<Props['variant']>>({
  prop: 'variant',
  variants: {
    bordered: {
      'borderWidth': '1px',
      'backgroundColor': 'transparent',
      '&[aria-selected="true"],&:focus, &:active': {
        borderColor: 'shade.700',
      },
    },
  },
});

export const OptionStyled = styled.li<Props>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  box-sizing: border-box;
  padding: 0 8px;
  height: 36px;
  cursor: pointer;
  border-radius: ${(props) => props.theme.radii.m};
  background-color: ${(props) => (props['aria-selected'] === 'true' ? props.theme.colors.shade[300] : 'transparent')};
  border: 0px solid transparent;
  transition: border-color 0.12s, background-color 0.12s;
  color: ${(props) => props.theme.colors.text.default};
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSizes[2]};
  &:focus,
  &:active {
    background-color: transparent;
    outline: none;
  }
  &[aria-selected='true'],
  &:hover {
    background-color: ${(props) => props.theme.colors.shade[200]};
    &:active {
      background-color: ${(props) => props.theme.colors.shade[300]};
    }
  }
  &:disabled,
  &[disabled] {
    background-color: ${(props) => props.theme.colors.shade[200]};
    color: ${(props) => props.theme.colors.shade[600]};
    pointer-events: none;
    opacity: 0.6;
  }
  ${variants}
`;
