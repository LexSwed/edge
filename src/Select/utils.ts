import { FieldInputProps } from 'Field/utils';

export type SelectInputProps<T = string> = Omit<FieldInputProps, 'inputProps' | 'type'> & {
  onSelect: (newValue: T | null) => void;
  value: T;
};
