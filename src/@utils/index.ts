import { Children, useCallback } from 'react';

export const renderValidChild: typeof Children['map'] = (children, renderFn) => {
  return Children.map(children, (child, i) => child && renderFn(child, i));
};

export function useCombinedRefs<T>(...refs: React.Ref<T>[]) {
  return useCallback((element: T) => {
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
  }, refs); //eslint-disable-line
}
