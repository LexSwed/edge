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

export function useSpacing(props: Partial<SpacingProps>): Record<string, string> {
  const { p, pt, pl, pb, pr, px, py, m, mt, ml, mb, mr, mx, my } = props;
  const style: Record<string, string> = {};

  if (pt || py || p) {
    style['padding-top'] = `var(--${pt || py || p})`;
  }
  if (pr || px || p) {
    style['padding-right'] = `var(--${pr || px || p})`;
  }

  if (pb || py || p) {
    style['padding-bottom'] = `var(--${pb || py || p})`;
  }

  if (pl || px || p) {
    style['padding-left'] = `var(--${pl || px || p})`;
  }

  if (mt || my || m) {
    style['margin-top'] = `var(--${mt || my || m})`;
  }
  if (mr || mx || m) {
    style['margin-right'] = `var(--${mr || mx || m})`;
  }

  if (mb || my || m) {
    style['margin-bottom'] = `var(--${mb || my || m})`;
  }

  if (ml || mx || m) {
    style['margin-left'] = `var(--${ml || mx || m})`;
  }

  return style;
}
