import styled from 'styled-components/macro';
import { variant } from 'styled-system';

import { ButtonStyled, buttonSize } from '../Button/Button.styled';
import { Size } from '../@utils';

export const Button = styled(ButtonStyled).attrs({
  variant: 'transparent',
})<React.ComponentProps<typeof ButtonStyled>>`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${variant<object, Size>({
    prop: 'size',
    variants: {
      xs: {
        size: buttonSize.xs,
      },
      s: {
        size: buttonSize.s,
      },
      m: {
        size: buttonSize.m,
      },
      l: {
        size: buttonSize.l,
      },
      xl: {
        size: buttonSize.xl,
      },
    },
  })}
`;
