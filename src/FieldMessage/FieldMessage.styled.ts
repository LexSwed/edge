import styled, { css } from 'styled-components';
import { variant, color, fontSize, FontSizeProps, ColorProps } from 'styled-system';

import Inline from '../Inline';

type Props = {
  disabled?: boolean;
  tone: 'positive' | 'critical';
};

export const Message = styled(Inline)<Props & FontSizeProps & ColorProps>`
  transition: 0.2s ease-in-out;
  ${fontSize}
  ${color}
  line-height: 1;
  ${disabled}
  ${variant<object, Props['tone']>({
    prop: 'tone',
    variants: {
      positive: {
        color: 'positive.2',
      },
      critical: {
        color: 'critical.2',
      },
    },
  })}
`;

function disabled({ disabled }: { disabled?: boolean }) {
  if (disabled) {
    return css`
      opacity: 0;
      visibility: hidden;
    `;
  }

  return null;
}
