import { useRef, useLayoutEffect, createContext, useEffect, useContext } from 'react';
import Popper, { PopperOptions } from 'popper.js';

type DropdownContext = {
  triggerRef: React.RefObject<HTMLElement>;
  dropdownRef: React.RefObject<HTMLElement>;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const popoverContext = createContext<DropdownContext>({} as DropdownContext);

export function usePopper() {
  const { triggerRef, dropdownRef } = useContext(popoverContext);
  const popperInstanceRef = useRef<Popper | null>();

  useLayoutEffect(() => {
    if (triggerRef.current && dropdownRef.current) {
      const options: PopperOptions = {
        placement: 'bottom-start',
        modifiers: {
          setWidth: {
            enabled: true,
            order: 800,
            fn: setWidthModifier,
          },
        },
      };
      popperInstanceRef.current = new Popper(triggerRef.current, dropdownRef.current, options);
    }

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [triggerRef, dropdownRef]);

  useLayoutEffect(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.scheduleUpdate();
    }
  });

  return dropdownRef;
}

function setWidthModifier(data: Parameters<Popper.ModifierFn>[0]) {
  const {
    offsets: { reference, popper },
  } = data;

  data.styles.width = `${reference.width > popper.width ? reference.width : popper.width}px`;
  return data;
}

export function usePopoverHandles() {
  const { dropdownRef, setOpen } = useContext(popoverContext);
  const closePopover = useRef(() => setOpen(false));

  useClickOutside(dropdownRef, closePopover);

  useOnEscButton(closePopover);
}

export function useClickOutside(elementRef: React.RefObject<HTMLElement>, callbackRef: React.RefObject<Function>) {
  useEffect(() => {
    const outsideClickOpen = (e: MouseEvent) => {
      if (!elementRef.current || !callbackRef.current) {
        return;
      }
      if (elementRef.current.contains(e.target as Node)) {
        return;
      }

      callbackRef.current();
    };

    document.addEventListener('click', outsideClickOpen);

    return () => {
      document.removeEventListener('click', outsideClickOpen);
    };
  }, [elementRef, callbackRef]);
}

export function useOnEscButton(callbackRef: React.RefObject<Function>) {
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callbackRef.current?.(e);
      }
    };
    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [callbackRef]);
}

export function useMountFocus(elementRef: React.RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    elementRef.current?.focus();
  }, [elementRef]);
}
