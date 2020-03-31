import { Children, isValidElement, useMemo, useEffect, useReducer } from 'react';
import Option from '../../Option';

import { useDropdownOpen, useCloseDropdownRef } from '.';

const initialState = {
  isOpen: false,
  selectedIndex: 0,
  items: [] as ReturnType<typeof useChildren>,
};

type ActionType = 'Open' | 'SwitchOpen' | 'ArrowUp' | 'ArrowDown' | 'Enter' | 'Escape';

type Action = { type: ActionType };

function reducer(state: typeof initialState, action: Action) {
  if (state.items.length === 0) {
    return state;
  }
  switch (action.type) {
    case 'Open': {
      return { ...state, isOpen: true };
    }
    case 'SwitchOpen': {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
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
    case 'Enter': {
      console.log('Select item', state.items[state.selectedIndex]);
      return state;
    }
    case 'Escape': {
      console.log('Close popup!');
      return state;
    }
    default:
      return state;
  }
}

export function useKeyboard(children: Props['children']) {
  const items = useChildren(children);
  const [state, dispatch] = useReducer(reducer, { ...initialState, items });
  const isOpen = useDropdownOpen();
  const closeRef = useCloseDropdownRef();

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

function useChildren(children: Props['children']) {
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

type OptionChildren = React.ReactComponentElement<typeof Option>;
export type Props = {
  children: OptionChildren[] | OptionChildren;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'ref' | 'children'>;
