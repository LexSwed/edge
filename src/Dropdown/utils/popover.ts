import { useRef, useLayoutEffect, useContext } from 'react';
import { createPopper, Instance as PopperInstance, Options, Modifier, State } from '@popperjs/core';

import { dropdownStaticContext, useDropdownOpen } from '../utils';

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

const offset: Partial<Modifier<'offset', { offset: (state: State) => number[] | undefined }>> = {
  name: 'offset',
  options: {
    offset: ({ placement }: State) => {
      if (placement.includes('end')) {
        return [-1, 0];
      }
      return [];
    },
  },
};

export function usePopper() {
  const { triggerRef, dropdownRef, popperOptionsRef } = useContext(dropdownStaticContext);
  const popperInstanceRef = useRef<PopperInstance | null>();
  const isOpen = useDropdownOpen();

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    if (triggerRef.current && dropdownRef.current) {
      const options: Partial<Options> = {
        placement: 'bottom-start',
        modifiers: [offset, widthModifier],
        ...popperOptionsRef.current,
      };
      popperInstanceRef.current = createPopper(triggerRef.current, dropdownRef.current, options);
    }

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [isOpen, triggerRef, popperOptionsRef, dropdownRef]);

  return { isOpen, dropdownRef };
}

/* export function useClickOutside() {
  const { dropdownRef } = useContext(dropdownStaticContext);
  const { isOpen, closeMenu } = useDownshiftState();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const outsideClickOpen = (e: MouseEvent) => {
      if (!dropdownRef.current) {
        return;
      }
      if (dropdownRef.current.contains(e.target as Node)) {
        return;
      }

      closeMenu();
    };

    document.addEventListener('click', outsideClickOpen);

    return () => {
      document.removeEventListener('click', outsideClickOpen);
    };
  }, [isOpen, dropdownRef, closeMenu]);
}

export function useMountFocus(isOpen: boolean) {
  const { dropdownRef } = useContext(dropdownStaticContext);

  useLayoutEffect(() => {
    if (isOpen) {
      dropdownRef.current?.focus();
    }
  }, [isOpen, dropdownRef]);
}
 */