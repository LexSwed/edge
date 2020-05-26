import { useCallback } from 'react';
import { useId } from '@reach/auto-id';

import FieldMessage from '../FieldMessage';
import { Size } from '../@utils';

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
    checked,
    inputProps: { id, defaultValue, ...inputProps } = {},
    message,
  } = props;
  const uid = useId(id);

  const merged: Partial<InputProps> = {
    id: uid,
    value,
    onChange,
    type,
    placeholder,
    disabled,
    autoFocus,
    autoComplete,
    name,
    defaultValue,
    checked,
    ...inputProps,
  };

  if (message && !merged['aria-describedby']) {
    merged['aria-describedby'] = `${uid}-message`;
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
  checked?: InputProps['checked'];
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
  size?: Exclude<Size, 'xs' | 'xl'>;
  /**
   * Tone of the input field
   */
  tone?: React.ComponentProps<typeof FieldMessage>['tone'];
  /**
   * Visual mode of the field
   */
  variant?: 'underlined' | 'borderless';
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

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  ref: React.Ref<HTMLInputElement>;
}
