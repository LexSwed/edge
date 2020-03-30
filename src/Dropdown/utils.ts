import { createContext, useRef, useMemo, useReducer } from 'react';

type DropdownState = typeof initialState;

type DropdownStaticContext = {
  triggerRef: React.RefObject<HTMLElement>;
  dropdownRef: React.RefObject<HTMLElement>;
  dispatch: React.Dispatch<Action>;
};

export const dropdownContext = createContext<DropdownState>({} as DropdownState);
export const dropdownStaticContext = createContext<DropdownStaticContext>({} as DropdownStaticContext);

export const initialState = {
  isOpen: false,
  closeOnClick: false,
};

type Action = {
  type: 'setCloseOnClick' | 'switchOpenState' | 'optionClick' | 'close';
};

export function dropdownStateReducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'setCloseOnClick':
      return { ...state, closeOnClick: true };
    case 'switchOpenState':
      return { ...state, isOpen: !state.isOpen };
    case 'optionClick':
      if (state.closeOnClick) {
        return { ...state, isOpen: false };
      }
      return state;
    case 'close':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export function useDropdownProviderValue() {
  const triggerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLElement>(null);
  const [state, dispatch] = useReducer(dropdownStateReducer, initialState);

  const methods = useMemo(() => ({ triggerRef, dropdownRef, dispatch }), [triggerRef, dropdownRef, dispatch]);

  return [state, methods] as const;
}
