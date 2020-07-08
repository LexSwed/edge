import { FieldInputProps, InputProps } from '../Field/utils';

export type SelectInputProps<T = string> = {
  label?: string;
  message?: string;
  placeholder?: InputProps['placeholder'];
  disabled?: InputProps['disabled'];
  onSelect?: (newValue: T | null) => void;
  icon?: FieldInputProps['icon'];
  tone?: FieldInputProps['tone'];
  variant?: FieldInputProps['variant'];
  required?: FieldInputProps['required'];
  value?: T;
};
