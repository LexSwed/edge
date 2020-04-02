import { useCallback, useRef } from 'react';
import FieldMessage from 'FieldMessage';
import Stack from 'Stack';

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

export type FieldProps = React.ComponentProps<typeof Stack> & {
  label?: string;
  message?: string;
  disabled?: boolean;
  tone?: React.ComponentProps<typeof FieldMessage>['tone'];
  inputProps?: {
    'aria-labelledby': string;
    'inputId': string;
    'aria-describedby': string;
  };
};

export type FieldInputProps = {
  /**
   * Left side icon
   */
  icon?: string | React.ReactElement;
  /**
   * Whether to show a clear button
   * false doesn't render anything
   * hidden, shown hide or show the button
   */
  clearButton?: false | 'hidden' | 'shown';
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
   * Reference to the input element for the clear button
   */
  inputRef?: React.RefObject<HTMLInputElement>;
  children: React.ReactElement;
};
