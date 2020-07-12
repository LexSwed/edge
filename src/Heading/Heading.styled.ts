import styled from 'styled-components/macro';
import { variant, space, SpaceProps } from 'styled-system';

type Props = {
  /** Specifies level of the Heading
   * @default 'h1'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Specifies font-weight: default bold or lighter */
  variant?: 'light';
} & SpaceProps;

export const HeadingStyled = styled.h1<Props>`
  font-family: 'Source Sans Pro', system-ui, sans-serif;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.text.default};
  ${space}
  ${variant<object, NonNullable<Props['as']>>({
    prop: 'as',
    variants: {
      h1: {
        fontSize: 6,
        fontWeight: 900,
        textTransform: 'uppercase',
      },
      h2: {
        fontSize: 5,
      },
      h3: {
        fontSize: 4,
      },
      h4: {
        fontSize: 4,
        textTransform: 'uppercase',
      },
      h5: {
        fontSize: 3,
        textTransform: 'uppercase',
      },
      h6: {
        fontSize: 3,
      },
    },
  })}
  ${variant({
    prop: 'variant',
    variants: {
      light: {
        fontWeight: 400,
      },
    },
  })}
`;
