import React, { createContext, useRef, useMemo, useLayoutEffect, useContext } from 'react';
import { createPopper, Instance as PopperInstance, Options, Modifier, State } from '@popperjs/core/lib/popper-lite';
import { Placement } from '@popperjs/core';

export const popoverContext = createContext({} as PopoverContext);

export const PopoverWrapper: React.FC = ({ children }) => {
  const triggerRef = useRef<HTMLElement>(null);
  const popoverRef = useRef<HTMLElement>(null);
  const staticValue = useMemo(() => ({ triggerRef, popoverRef }), [triggerRef, popoverRef]);

  return <popoverContext.Provider value={staticValue}>{children}</popoverContext.Provider>;
};

export function usePopoverRefs() {
  return useContext(popoverContext);
}

const widthModifier: Partial<Modifier<'widther', {}>> = {
  name: 'widther',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn({ state }) {
    const {
      rects: { reference, popper },
      styles,
    } = state;
    styles.popper.width = `${reference.width > popper.width ? reference.width : styles.width}px`;

    return state;
  },
  effect: ({
    state: {
      elements: { popper, reference },
    },
  }) => {
    const { width: refWidth } = reference.getBoundingClientRect();
    const { width: popperWidth } = popper.getBoundingClientRect();

    popper.style.width = `${refWidth > popperWidth ? refWidth : popperWidth}px`;

    return () => {};
  },
};

export type UsePopper<T = HTMLElement, P = HTMLElement> = {
  triggerRef: React.RefObject<T>;
  popoverRef: React.RefObject<P>;
  placement?: Placement;
  offset?: [number, number] | ((state: State) => number[] | undefined);
  shown: boolean;
};
export function usePopper({ triggerRef, popoverRef, placement, offset, shown }: UsePopper) {
  const popperInstanceRef = useRef<PopperInstance | null>();
  const optionsRef = useRef({
    placement,
    offset,
  });

  useLayoutEffect(() => {
    if (!shown) {
      return;
    }
    const modifiers: Partial<Modifier<any, any>>[] = [widthModifier];
    const { placement, offset } = optionsRef.current;

    if (offset) {
      modifiers.push({
        name: 'offset',
        options: {
          offset: offset as any, // types are borken
        },
      });
    }

    if (triggerRef.current && popoverRef.current) {
      const options: Partial<Options> = {
        placement: placement || 'bottom-start',
        modifiers,
      };
      popperInstanceRef.current = createPopper(triggerRef.current, popoverRef.current, options);
    }

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [shown, triggerRef, popoverRef, optionsRef]);

  optionsRef.current = {
    placement,
    offset,
  };
}

type PopoverContext<T = any, P = any> = {
  triggerRef: React.RefObject<T>;
  popoverRef: React.RefObject<P>;
};
