import { FieldInputProps } from 'Field/utils';

export type Props<T = string> = Omit<FieldInputProps, 'inputProps'> & {
  onSelect: (newValue: T | null) => void;
  value: T;
};
