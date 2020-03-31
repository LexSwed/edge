import { createContext, useRef, useMemo, useReducer, useContext, Children, isValidElement } from 'react';
import { Options as PopperOptions } from '@popperjs/core';

import Option from '../../Option';

type DropdownState = typeof initialState;

type DropdownStaticContext = {
  triggerRef: React.RefObject<HTMLElement>;
  dropdownRef: React.RefObject<HTMLElement>;
  popperOptionsRef: React.RefObject<Partial<PopperOptions>>;
  dispatch: React.Dispatch<Action>;
};

export const dropdownContext = createContext<DropdownState>({} as DropdownState);
export const dropdownStaticContext = createContext<DropdownStaticContext>({} as DropdownStaticContext);

export const initialState = {
  isOpen: false,
  selectedIndex: 0,
  items: [] as ReturnType<typeof useOptionsValues>,
};

export type ActionType =
  | 'UpdateItems'
  | 'SwitchOpenState'
  | 'OptionClick'
  | 'Close'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'Enter'
  | 'Escape';

export type Action = { type: ActionType; value?: any };

export function dropdownStateReducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'UpdateItems': {
      return { ...state, items: action.value };
    }
    case 'ArrowUp': {
      const newIndex = state.items.slice(0, state.selectedIndex).findIndex((el) => !el.disabled);

      return { ...state, selectedIndex: newIndex > -1 ? newIndex : 0 };
    }
    case 'ArrowDown': {
      const start = state.selectedIndex + 1;
      const newIndex = state.items.slice(start).findIndex((el) => !el.disabled);

      return { ...state, selectedIndex: newIndex > -1 ? start + newIndex : state.items.length - 1 };
    }
    case 'SwitchOpenState': {
      return { ...state, isOpen: !state.isOpen };
    }
    case 'OptionClick':
    case 'Enter':
    case 'Escape':
    case 'Close':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export function useDropdownProviderValue() {
  const triggerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLElement>(null);
  const popperOptionsRef = useRef<Partial<PopperOptions>>({});
  const [state, dispatch] = useReducer(dropdownStateReducer, initialState);

  const methods = useMemo(() => ({ triggerRef, dropdownRef, popperOptionsRef, dispatch }), [
    triggerRef,
    dropdownRef,
    popperOptionsRef,
    dispatch,
  ]);
  console.log(state);
  return [state, methods] as const;
}

export function useDropdownOpen() {
  return useContext(dropdownContext).isOpen;
}

export function useSelectedIndex() {
  return useContext(dropdownContext).selectedIndex;
}

export function useCloseDropdownRef() {
  const { dispatch } = useContext(dropdownStaticContext);
  return useRef(() => dispatch({ type: 'Close' }));
}

export function useOptionsValues(options: OptionElement[] | OptionElement) {
  return useMemo(
    () =>
      Children.map(options, (el: OptionElement, index) => {
        if (__DEV__) {
          if (!isValidElement(el)) {
            throw Error('Listbox can only take <Option /> as a child');
          }
        }
        const { value, disabled } = el.props;

        return { value, disabled, index };
      }),
    [options]
  );
}

type OptionElement = React.ReactComponentElement<typeof Option>;
