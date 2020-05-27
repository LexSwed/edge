import { createContext, useRef, useMemo, useContext, Children, useCallback } from 'react';
import { Options as PopperOptions } from '@popperjs/core';
import { useSelect as useDownshiftSelect, UseSelectProps } from 'downshift';

import Option from '../../Option';
import { useCombinedRefs } from '../../@utils';

export const downshiftContext = createContext<DownshiftContextType>({} as DownshiftContextType);
export const dropdownStaticContext = createContext<DropdownStaticContext>({} as DropdownStaticContext);

export function useDropdownProviderValue() {
  const triggerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLElement>(null);
  const popperOptionsRef = useRef<Partial<PopperOptions>>({});

  return { triggerRef, dropdownRef, popperOptionsRef };
}

export function useDropdownOpen() {
  return useContext(downshiftContext).isOpen;
}

export function useDropdown() {
  return useContext(dropdownStaticContext);
}

const stateReducer: UseSelectProps<any>['stateReducer'] = (_state, { type, changes }) => {
  switch (type) {
    case useDownshiftSelect.stateChangeTypes.ItemClick:
    case useDownshiftSelect.stateChangeTypes.MenuKeyDownEnter: {
      if (changes.selectedItem?.props?.onSelect) {
        setTimeout(() => {
          changes.selectedItem.props.onSelect();
        }, 0);
      }
      return changes;
    }
    default:
      return changes;
  }
};

export function useSelect({ value, onSelect, options }: UseSelectParams) {
  const items = useMemo<OptionChildren[]>(() => Children.toArray(options) as OptionChildren[], [options]);
  const onSelectedItemChange: UseSelectProps<OptionChildren>['onSelectedItemChange'] = useCallback(
    ({ selectedItem }) => {
      onSelect?.(optionToString(selectedItem));
    },
    [onSelect]
  );

  return useDownshiftSelect({
    items,
    stateReducer,
    itemToString: optionToString,
    selectedItem: items.find((option) => optionToString(option) === value),
    onSelectedItemChange,
  });
}

/** useful when you need latest state in async manner (event handlers) */
export function useDownshiftStateRef() {
  return useRef(useDownshiftState());
}

export function useDownshiftState() {
  return useContext(downshiftContext);
}

export function useToggleButtonProps() {
  const { triggerRef } = useDropdown();
  const { getToggleButtonProps } = useDownshiftState();

  const { ref: downshiftRef, ...downshiftProps } = getToggleButtonProps();
  downshiftProps.ref = useCombinedRefs(triggerRef, downshiftRef);

  return downshiftProps;
}

export function optionToString(item?: OptionChildren): string {
  if (!item) {
    return '';
  }

  const { value } = item.props;
  return typeof value === 'string' ? value : JSON.stringify(value);
}

type DropdownStaticContext = {
  triggerRef: React.RefObject<HTMLElement>;
  dropdownRef: React.RefObject<HTMLElement>;
  popperOptionsRef: React.RefObject<Partial<PopperOptions>>;
};

type DownshiftContextType = ReturnType<typeof useSelect>;

type OptionChildren = React.ReactComponentElement<typeof Option>;

type UseSelectParams = { value?: string; onSelect?: (v: string) => void; options: OptionChildren[] | OptionChildren };
