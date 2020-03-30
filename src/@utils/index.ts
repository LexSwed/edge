import { Children } from 'react';

export const renderValidChild: typeof Children['map'] = (children, renderFn) => {
  return Children.map(children, (child, i) => child && renderFn(child, i));
};

export function composeRefs(...refs: (((instance: HTMLElement) => void) | React.MutableRefObject<HTMLElement>)[]) {
  return (instance: HTMLElement) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref !== null && typeof ref === 'object') {
        ref.current = instance;
      }
    });
  };
}
