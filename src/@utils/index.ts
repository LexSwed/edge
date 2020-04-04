import { Children, useCallback } from 'react';

export const renderValidChild: typeof Children['map'] = (children, renderFn) => {
  return Children.map(children, (child, i) => child && renderFn(child, i));
};

export function useCombinedRefs<T = any>(...refs: Ref<T>[]) {
  return useCallback(joinRefs(...refs), refs); //eslint-disable-line
}

export function joinRefs<T>(...refs: Ref<T>[]) {
  return (element: T) =>
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }

      if (typeof ref === 'function') {
        ref(element);
      } else if (ref !== null && typeof ref === 'object') {
        (ref as React.MutableRefObject<T>).current = element;
      }
    });
}

type Ref<T> = React.Ref<T> | React.MutableRefObject<T> | null | undefined;
