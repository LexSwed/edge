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

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

export type SpacingProps = {
  p?: Size;
  px?: Size;
  py?: Size;
  pt?: Size;
  pr?: Size;
  pb?: Size;
  pl?: Size;
  m?: Size;
  mx?: Size;
  my?: Size;
  mt?: Size;
  mr?: Size;
  mb?: Size;
  ml?: Size;
};

export function useSpacing(props: Partial<SpacingProps>): Record<string, string> {
  const { p, pt, pl, pb, pr, px, py, m, mt, ml, mb, mr, mx, my } = props;
  const style: Record<string, string> = {};

  Object.entries({ p, pt, pl, pb, pr, px, py, m, mt, ml, mb, mr, mx, my })
    .filter(([, v]) => Boolean(v))
    .forEach(([k, v]) => {
      style[`--${k}`] = `var(--${v})` as string;
    });

  return style;
}
