import { FieldInputProps } from 'Field/utils';

export type SelectInputProps<T = string> = Omit<FieldInputProps, 'inputProps'> & {
  onSelect: (newValue: T | null) => void;
  value: T;
};
