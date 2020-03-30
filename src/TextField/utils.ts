import React, { useRef, useCallback } from 'react';
import FieldMessage from '../FieldMessage';
import { useId } from '@reach/auto-id';

export type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
> & {
  ref?: React.RefObject<HTMLInputElement>;
};
type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

export type Props = WrapperProps & {
  label?: string;
  placeholder?: InputProps['placeholder'];
  value?: InputProps['value'];
  onChange?: InputProps['onChange'];
  disabled?: InputProps['disabled'];
  autoFocus?: InputProps['autoFocus'];
  autoComplete?: InputProps['autoComplete'];
  type?: InputProps['type'];
  name?: InputProps['name'];
  id?: InputProps['id'];
  message?: string;
  tone?: React.ComponentProps<typeof FieldMessage>['tone'];
  size?: 's' | 'm' | 'l';
  icon?: string;
  allowClear?: boolean;
  inputProps?: InputProps;
  children: (props: InputProps, ref?: React.RefObject<HTMLInputElement>) => WrapperProps['children'];
};

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

export function useClearButton(ref?: React.Ref<HTMLInputElement>) {
  const inputRefInternal = useRef<HTMLInputElement>(null);
  const inputRef = (ref as React.RefObject<HTMLInputElement>) || inputRefInternal;

  const onClearClick = useCallback(() => {
    if (!inputRef?.current) {
      return;
    }

    setNativeValue(inputRef.current, '');
    inputRef.current.focus();
  }, [inputRef]);

  return [inputRef, onClearClick] as const;
}

function setNativeValue(input: HTMLInputElement, value: string) {
  const valueSetter =
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value')?.set ??
    Object.getOwnPropertyDescriptor(input, 'value')?.set;

  valueSetter?.call(input, value);
  input.dispatchEvent(new Event('change', { bubbles: true }));
}
