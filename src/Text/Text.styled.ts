import styled, { css } from 'styled-components/macro';
import { FontSizeProps, fontSize, variant } from 'styled-system';

type Props = {
  /**
   * Text tone
   */
  tone?: 'light';
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Truncate text after maximum lines reached
   */
  maxLines?: number;
};

export const TextStyled = styled.div<Props & FontSizeProps>`
  display: block;
  font-family: 'Source Sans Pro', system-ui, sans-serif;
  ${fontSize}
  ${variant<object, NonNullable<Props['tone']>>({
    prop: 'tone',
    variants: {
      light: {
        color: 'text.light',
        fontSize: 's',
      },
    },
  })}
  ${variant<object, NonNullable<Props['align']>>({
    prop: 'align',
    variants: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  })}
  ${(props) =>
    props.maxLines &&
    css<Props>`
      display: -webkit-box;
      -webkit-line-clamp: ${(props) => props.maxLines};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`;
