import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { usePopper } from './utils/popover';
import { context } from '../Edge/Edge';
import { PopperWrapper } from './Dropdown.styled';

type Props = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Popover: React.FC<Props> = ({ children, ...props }) => {
  const { isOpen, dropdownRef } = usePopper();
  const edgeContext = useContext(context);

  if (typeof window === 'undefined') {
    return null;
  }

  const edgeWrapperEl = edgeContext?.edgeEl?.current;
  const render = (
    <PopperWrapper {...props} ref={dropdownRef as React.RefObject<HTMLDivElement>} hidden={!isOpen}>
      {children}
    </PopperWrapper>
  );

  return edgeWrapperEl ? ReactDOM.createPortal(render, edgeWrapperEl) : render;
};

const Wrapper: React.FC<Props> = (props) => {
  if (React.Children.count(props.children) < 1) {
    return null;
  }

  return <Popover {...props} />;
};

if (__DEV__) {
  Popover.displayName = 'FxPopover';
}

export default Wrapper;
