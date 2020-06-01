import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { usePopper, UsePopper, usePopoverRefs } from './utils';
import { context } from '../Edge/Edge';
import { PopperWrapper } from './Popover.styled';
import VisuallyHidden from '../VisuallyHidden';

type Props = {
  shown: UsePopper['shown'];
  placement?: UsePopper['placement'];
  offset?: UsePopper['offset'];
};

const Popover: React.FC<Props> = ({ shown, offset, placement, children, ...props }) => {
  const { triggerRef, popoverRef } = usePopoverRefs();
  const edgeContext = useContext(context);

  usePopper({
    shown,
    popoverRef,
    triggerRef,
    placement,
    offset,
  });

  if (typeof window === 'undefined') {
    return null;
  }

  const edgeWrapperEl = edgeContext?.edgeEl?.current;
  let render = (
    <PopperWrapper {...props} ref={popoverRef}>
      {children}
    </PopperWrapper>
  );

  if (!shown) {
    render = <VisuallyHidden>{render}</VisuallyHidden>;
  }

  return edgeWrapperEl ? ReactDOM.createPortal(render, edgeWrapperEl) : render;
};

if (__DEV__) {
  Popover.displayName = 'FxPopover';
}

export default Popover;
