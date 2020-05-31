import { createContext, useRef, useMemo, useContext, Children, useCallback } from 'react';
import { useSelect as useDownshiftSelect, UseSelectProps } from 'downshift';

import Option from '../Option';
import { useCombinedRefs } from '../@utils';
import { usePopoverRefs } from '../Popover/utils';

export const downshiftContext = createContext<DownshiftContextType>({} as DownshiftContextType);

export function useDropdownOpen() {
  return useContext(downshiftContext).isOpen;
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
  const { triggerRef } = usePopoverRefs();
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

type DownshiftContextType = ReturnType<typeof useSelect>;

type OptionChildren = React.ReactComponentElement<typeof Option>;

type UseSelectParams = { value?: string; onSelect?: (v: string) => void; options: OptionChildren[] | OptionChildren };
