import styled, { css } from 'styled-components/macro';
import { variant } from 'styled-system';

import Box from '../Box';

type Props = {
  disabled?: boolean;
  tone?: 'positive' | 'critical';
};

const tone = variant<object, NonNullable<Props['tone']>>({
  prop: 'tone',
  variants: {
    positive: {
      color: 'positive.2',
    },
    critical: {
      color: 'critical.2',
    },
  },
});

export const Message = styled(Box).attrs({
  display: 'grid',
  gridTemplateRows: '1fr',
  gridGap: 'xs',
})<Props>`
  transition: 0.2s ease-in-out;
  line-height: 1;
  font-size: ${(props) => props.theme.fontSizes.s};
  grid-template-columns: ${(props) => (props.tone ? 'auto 1fr' : '1fr')};
  ${tone}
  ${disabled};
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
