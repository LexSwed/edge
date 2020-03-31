import { useRef, useLayoutEffect, useEffect, useContext } from 'react';
import { createPopper, Instance as PopperInstance, Options } from '@popperjs/core';

import { dropdownStaticContext, useDropdownOpen, useCloseDropdownRef } from '../utils';

export function usePopoverHandles() {
  useClickOutside();

  useMountFocus();
}

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

  return dropdownRef;
}

export function useClickOutside() {
  const { dropdownRef } = useContext(dropdownStaticContext);
  const closeRef = useCloseDropdownRef();
  const isOpen = useDropdownOpen();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const outsideClickOpen = (e: MouseEvent) => {
      if (!dropdownRef.current || !closeRef.current) {
        return;
      }
      if (dropdownRef.current.contains(e.target as Node)) {
        return;
      }

      closeRef.current();
    };

    document.addEventListener('click', outsideClickOpen);

    return () => {
      document.removeEventListener('click', outsideClickOpen);
    };
  }, [isOpen, dropdownRef, closeRef]);
}

export function useMountFocus() {
  const { dropdownRef } = useContext(dropdownStaticContext);
  const isOpen = useDropdownOpen();

  useLayoutEffect(() => {
    if (isOpen) {
      dropdownRef.current?.focus();
    }
  }, [isOpen, dropdownRef]);
}

// function navigationReducer(state, action) {
//     switch (action.type) {
//         case 'arrow-up':
//     }
// }
