import { Children, isValidElement, useMemo, useEffect, useReducer, useCallback } from 'react';
import Option from '../../Option';

import { useDropdownOpen, useCloseDropdownRef } from '.';

const initialState = {
  selectedIndex: 0,
};

type State = typeof initialState;

type ActionType = 'ArrowUp' | 'ArrowDown' | 'Enter' | 'Escape';

type Action = { type: ActionType };

export function useKeyboard(children: Props['children']) {
  const items = useChildren(children);
  const isOpen = useDropdownOpen();
  const closeRef = useCloseDropdownRef();
  const reducer = useCallback<(state: State, action: Action) => State>(
    (state, action) => {
      if (items.length === 0) {
        return state;
      }
      switch (action.type) {
        case 'ArrowUp': {
          const newIndex = items.slice(0, state.selectedIndex).findIndex((el) => !el.disabled);

          return { ...state, selectedIndex: newIndex > -1 ? newIndex : 0 };
        }
        case 'ArrowDown': {
          const start = state.selectedIndex + 1;
          const newIndex = items.slice(start).findIndex((el) => !el.disabled);

          return { ...state, selectedIndex: newIndex > -1 ? start + newIndex : items.length - 1 };
        }
        case 'Enter': {
          closeRef.current?.();

          return state;
        }
        case 'Escape': {
          closeRef.current?.();

          return state;
        }
        default:
          return state;
      }
    },
    [items, closeRef]
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      dispatch({ type: e.key as ActionType });
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, closeRef, dispatch]);

  return state;
}

function useChildren(children: OptionChildren[] | OptionChildren) {
  return useMemo(
    () =>
      Children.map(children, (el: OptionChildren, index) => {
        if (__DEV__) {
          if (!isValidElement(el)) {
            throw Error('Listbox can only take <Option /> as a child');
          }
        }
        const { value, disabled } = el.props;

        return { value, disabled, index };
      }),
    [children]
  );
}

export type OptionChildren = React.ReactComponentElement<typeof Option>;
export type Props = {
  children: OptionChildren[] | OptionChildren;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'ref' | 'children'>;
