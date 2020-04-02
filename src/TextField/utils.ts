import React from 'react';
import { useId } from '@reach/auto-id';
import { FieldProps, FieldInputProps } from 'Field/utils';

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  ref?: React.RefObject<HTMLInputElement>;
};
type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

type TextFieldProps = {
  label?: string;
  message?: string;
  placeholder?: InputProps['placeholder'];
  value?: InputProps['value'];
  onChange?: InputProps['onChange'];
  disabled?: InputProps['disabled'];
  autoFocus?: InputProps['autoFocus'];
  autoComplete?: InputProps['autoComplete'];
  type?: InputProps['type'];
  name?: InputProps['name'];
  allowClear?: boolean;
  tone?: FieldProps['tone'];
  size?: FieldInputProps['size'];
  icon?: FieldInputProps['icon'];
  inputProps?: InputProps;
};

export type Props = WrapperProps & TextFieldProps;

/**
 * Merges commonly used input props that were added as shortcuts (type, autoFocus,...)
 * with inputProps object (for the rest of the <input /> props)
 * Also adds `id` if it wasn't provided and ids for <FieldLabel /> and <FieldMessage />
 */
export function useMergedInputProps(props: Partial<Props>): Partial<InputProps> {
  const {
    value,
    onChange,
    type,
    placeholder,
    disabled,
    autoFocus,
    autoComplete,
    name,
    label,
    message,
    inputProps,
  } = props;
  const uid = useId(props.id);
  const id = `textfield-${uid}`;

  const merged: Partial<InputProps> = {
    id,
    value,
    onChange,
    type,
    placeholder,
    disabled,
    autoFocus,
    autoComplete,
    name,
    ...inputProps,
  };

  const labelId = `${id}-label`;
  const messageId = `${id}-message`;

  if (label && !merged['aria-labelledby']) {
    merged['aria-labelledby'] = labelId;
  }

  if (message && !merged['aria-describedby']) {
    merged['aria-describedby'] = messageId;
  }

  return merged;
}
