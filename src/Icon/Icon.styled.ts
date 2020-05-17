import styled from 'styled-components/macro';
import { variant } from 'styled-system';
import { Size } from '../@utils';

type Props = {
  /**
   * Name of the icon
   */
  icon: string;
  /**
   * Material Design icon tone
   */
  tone?: 'outlined' | 'round' | 'two-tone';
  /**
   *  Size of the icon
   * @default 'm'
   */
  size?: Size;
};

export const IconStyled = styled.i.attrs({
  role: 'img',
})<Props>`
  font-family: 'Material Icons';
  color: currentColor;
  flex-shrink: 0;
  line-height: 1;
  cursor: inherit;
  user-select: none;
  flex: 0 0 0;
  ${variant<object, NonNullable<Props['tone']>>({
    prop: 'tone',
    variants: {
      'outlined': {
        fontFamily: 'Material Icons Outlined',
      },
      'round': {
        fontFamily: 'Material Icons Round',
      },
      'two-tone': {
        fontFamily: 'Material Icons Two Tone',
      },
    },
  })}
  ${variant<object, Size>({
    prop: 'size',
    variants: {
      xs: {
        fontSize: 1,
      },
      s: {
        fontSize: 2,
      },
      m: {
        fontSize: 3,
      },
      l: {
        fontSize: 4,
      },
      xl: {
        fontSize: 5,
      },
    },
  })}
`;
