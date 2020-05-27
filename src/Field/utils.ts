import { useId } from '@reach/auto-id';

import FieldMessage from '../FieldMessage';

/**
 * Merges commonly used input props that were added as shortcuts (type, autoFocus,...)
 * with inputProps object (for the rest of the <input /> props)
 * Also adds `id` if it wasn't provided and ids for <FieldLabel /> and <FieldMessage />
 */
export function useMergedInputProps<T extends FieldInputProps = any>(initialProps: T) {
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
    required,
    inputProps: { id, defaultValue, ...inputProps } = {},
    inputRef,
    ...props
  } = initialProps;
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
    required,
    ref: inputRef,
    ...inputProps,
  };

  if (props.message && !merged['aria-describedby']) {
    merged['aria-describedby'] = `${uid}-message`;
  }

  return [merged, props] as const;
}

type InputWrapperProps = {
  /**
   * Left side icon
   */
  icon?: string | React.ReactElement;
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

export type FieldInputProps = InputWrapperProps & {
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
  required?: InputProps['required'];
};

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  ref: React.Ref<HTMLInputElement>;
}
