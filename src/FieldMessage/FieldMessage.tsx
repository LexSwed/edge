import React from 'react';

import Icon from '../Icon';
import { Message } from './FieldMessage.styled';

const icons: Record<NonNullable<Props['tone']>, React.ReactNode> = {
  positive: <Icon icon="check_circle_outline" size="xs" aria-hidden="true" />,
  critical: <Icon icon="error_outline" size="xs" aria-hidden="true" />,
};

const FieldMessage = React.forwardRef<HTMLDivElement, Props>(({ tone, children, ...props }, ref) => {
  return (
    <Message {...props} tone={tone} color="text.light" ref={ref}>
      {tone ? icons[tone] : null}
      <span>{children}</span>
    </Message>
  );
});

if (__DEV__) {
  FieldMessage.displayName = 'FxFieldMessage';
}

export default FieldMessage;

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type Props = {
  /**
   * Field the message describes
   */
  id?: string;
  /**
   * Whether described by the message field is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Tone of the message
   */
  tone?: 'positive' | 'critical';
} & DivProps;
