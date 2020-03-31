import { useRef, useLayoutEffect, useEffect, useContext } from 'react';
import { createPopper, Instance as PopperInstance, Options } from '@popperjs/core';

import { dropdownStaticContext, useDropdownOpen, useDownshiftState } from '../utils';

export function usePopoverHandles() {
  const isOpen = useDropdownOpen();

  useClickOutside();

  useMountFocus(isOpen);

  return isOpen;
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
