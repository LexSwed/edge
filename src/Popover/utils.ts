import { useRef, useLayoutEffect, useEffect, useContext } from 'react';
import { createPopper, Instance as PopperInstance, Options } from '@popperjs/core';
import { dropdownStaticContext } from '../Dropdown/utils';

export function usePopper() {
  const { triggerRef, dropdownRef } = useContext(dropdownStaticContext);
  const popperInstanceRef = useRef<PopperInstance | null>();

  useLayoutEffect(() => {
    if (triggerRef.current && dropdownRef.current) {
      const options: Partial<Options> = {
        placement: 'bottom-start',
        // modifiers: {
        //   setWidth: {
        //     enabled: true,
        //     order: 800,
        //     fn: setWidthModifier,
        //   },
        // },
      };
      popperInstanceRef.current = createPopper(triggerRef.current, dropdownRef.current, options);
    }

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [triggerRef, dropdownRef]);

  return dropdownRef;
}

// function setWidthModifier(data: ModifierArguments<Options>) {
//   const {
//     offsets: { reference, popper },
//   } = data;

//   data.styles.width = `${reference.width > popper.width ? reference.width : popper.width}px`;
//   return data;
// }

export function usePopoverHandles() {
  const { dropdownRef, dispatch } = useContext(dropdownStaticContext);
  const closePopover = useRef(() => dispatch({ type: 'close' }));

  useClickOutside(dropdownRef, closePopover);

  useOnEscButton(closePopover);

  useMountFocus(dropdownRef);
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
