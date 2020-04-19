import { Children, useCallback, CSSProperties } from 'react';

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

type Paddings = {
  p?: Size;
  px?: Size;
  py?: Size;
  pt?: Size;
  pr?: Size;
  pb?: Size;
  pl?: Size;
};

type Margins = {
  m?: Size;
  mx?: Size;
  my?: Size;
  mt?: Size;
  mr?: Size;
  mb?: Size;
  ml?: Size;
};

export type SpacingProps = Paddings & Margins;

export function useSpacing(props: Partial<SpacingProps>): CSSProperties {
  const { p, pt, pl, pb, pr, px, py, m, mt, ml, mb, mr, mx, my } = props;
  const style: CSSProperties = {};

  style.padding = `${cssVar(pt, py, p)} ${cssVar(pr, px, p)} ${cssVar(pb, py, p)} ${cssVar(pl, px, p)}`;

  style.margin = `${cssVar(mt, my, m)} ${cssVar(mr, mx, m)} ${cssVar(mb, my, m)} ${cssVar(ml, mx, m)}`;

  return style;
}

function cssVar(value?: Size, axis?: Size, all?: Size) {
  return value || axis || all ? `var(--${value || axis || all})` : 0;
}
