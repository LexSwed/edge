import { createContext, useRef, useMemo, useReducer, useContext } from 'react';
import { Options as PopperOptions } from '@popperjs/core';

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
};

type Action = {
  type: 'switchOpenState' | 'optionClick' | 'close';
};

export function dropdownStateReducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'switchOpenState':
      return { ...state, isOpen: !state.isOpen };
    case 'optionClick':
    case 'close':
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

  return [state, methods] as const;
}

export function useDropdownOpen() {
  return useContext(dropdownContext).isOpen;
}

export function useCloseDropdownRef() {
  const { dispatch } = useContext(dropdownStaticContext);
  return useRef(() => dispatch({ type: 'close' }));
}
