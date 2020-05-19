import styled from 'styled-components/macro';
import { variant } from 'styled-system';

type Props = {
  /** Specifies level of the Heading
   * @default 'h1'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  /** Specifies font-weight: default bold or lighter */
  tone?: 'light';
};

export const HeadingStyled = styled.h1<Props>`
  font-family: 'Source Sans Pro', system-ui, sans-serif;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.text.default};
  ${variant<object, NonNullable<Props['as']>>({
    prop: 'as',
    variants: {
      h1: {
        fontSize: 6,
        fontWeight: 900,
        textTransform: 'uppercase',
      },
      h2: {
        fontSize: 7,
      },
      h3: {
        fontSize: 5,
      },
      h4: {
        fontSize: 4,
        textTransform: 'uppercase',
      },
    },
  })}
  ${variant({
    prop: 'tone',
    variants: {
      light: {
        fontWeight: 400,
      },
    },
  })}
`;
