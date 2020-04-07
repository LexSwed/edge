import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import { usePopper } from './utils/popover';

type Props = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Popover: React.FC<Props> = ({ children, ...props }) => {
  const { isOpen, dropdownRef } = usePopper();

  if (typeof window === 'undefined') {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fx-popover" {...props} ref={dropdownRef as React.RefObject<HTMLDivElement>} hidden={!isOpen}>
      {children}
    </div>,
    document.body
  );
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
