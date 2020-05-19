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
  className: 'material-icons',
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
        fontSize: 12,
      },
      s: {
        fontSize: 14,
      },
      m: {
        fontSize: 16,
      },
      l: {
        fontSize: 24,
      },
      xl: {
        fontSize: 36,
      },
    },
  })}
`;
