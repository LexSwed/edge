import React from 'react';
import cx from 'classnames';

import Icon from '../Icon';
import Inline from '../Inline';

import './styles.css';

const icons: Record<NonNullable<Props['tone']>, React.ReactNode> = {
  neutral: null,
  positive: <Icon icon="check_circle_outline" size="xs" />,
  critical: <Icon icon="error_outline" size="xs" />,
};

const FieldMessage = React.forwardRef<HTMLDivElement, Props>(
  ({ id, disabled, tone = 'neutral', className, children, ...props }, ref) => {
    const classes = cx(
      'fx-fieldmessage',
      `fx-fieldmessage--${tone}`,
      disabled && 'fx-fieldmessage--disabled',
      className
    );

    return (
      <Inline id={id} className={classes} space="xs" {...props} ref={ref}>
        {icons[tone]}
        <span>{children}</span>
      </Inline>
    );
  }
);

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
   * @default 'neutral'
   */
  tone?: 'neutral' | 'positive' | 'critical';
} & DivProps;
