import styled from 'styled-components/macro';
import { variant } from 'styled-system';

import { Size } from '../@utils';

type Props = {
  variant: 'brand' | 'dark' | 'light';
  size: Size;
};

export const LogoStyled = styled.svg<Props>`
  --color: ${(props) => props.theme.colors.brand[600]};
  --light-color: ${(props) => props.theme.colors.brand[400]};
  ${variant<object, Size>({
    prop: 'size',
    variants: {
      xs: {
        size: '24px',
      },
      s: {
        size: '32px',
      },
      m: {
        size: '48px',
      },
      l: {
        size: '64px',
      },
      xl: {
        size: '128px',
      },
    },
  })}
`;
