import { useCallback } from 'react';
import { useId } from '@reach/auto-id';

import FieldMessage from '../FieldMessage';

/**
 * Merges commonly used input props that were added as shortcuts (type, autoFocus,...)
 * with inputProps object (for the rest of the <input /> props)
 * Also adds `id` if it wasn't provided and ids for <FieldLabel /> and <FieldMessage />
 */
export function useMergedInputProps(props: Partial<FieldInputProps>): Partial<InputProps> {
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
    inputProps: { id, defaultValue, ...inputProps } = {},
  } = props;
  const uid = useId(id);
  const inputId = `input-${uid}`;

  const merged: Partial<InputProps> = {
    id: inputId,
    value,
    onChange,
    type,
    placeholder,
    disabled,
    autoFocus,
    autoComplete,
    name,
    defaultValue,
    ...inputProps,
  };

  const labelId = `${inputId}-label`;
  const messageId = `${inputId}-message`;

  if (label && !merged['aria-labelledby']) {
    merged['aria-labelledby'] = labelId;
  }

  if (message && !merged['aria-describedby']) {
    merged['aria-describedby'] = messageId;
  }

  return merged;
}

export function useClearButton(
  inputRef: React.MutableRefObject<HTMLInputElement | undefined>,
  onClear?: FieldInputProps['onClear']
) {
  return useCallback(() => {
    onClear?.();
    if (!inputRef?.current) {
      return;
    }

    setNativeValue(inputRef.current, '');
    inputRef.current.focus();
  }, [inputRef, onClear]);
}

function setNativeValue(input: HTMLInputElement, value: string) {
  const valueSetter =
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value')?.set ??
    Object.getOwnPropertyDescriptor(input, 'value')?.set;

  valueSetter?.call(input, value);
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

export type FieldInputProps = {
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
  /**
   * Left side icon
   */
  icon?: string | React.ReactElement;
  /**
   * Size of the input
   * @default 'm'
   */
  size?: 's' | 'm' | 'l';
  /**
   * Tone of the input field
   */
  tone?: React.ComponentProps<typeof FieldMessage>['tone'];
  /**
   * React Ref to the input element
   */
  inputRef?: InputProps['ref'];
  /**
   * All the props that needs to be passed to the input element
   */
  inputProps?: InputProps;
  /**
   * When function is provided it renders clear button which clears the input
   */
  onClear?: () => void;
};

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  ref: React.Ref<HTMLInputElement>;
};
