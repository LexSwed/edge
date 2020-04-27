import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import { usePopper } from './utils/popover';
import { context } from '../Edge/Edge';

type Props = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Popover: React.FC<Props> = ({ children, ...props }) => {
  const { isOpen, dropdownRef } = usePopper();
  const edgeContext = useContext(context);

  if (typeof window === 'undefined') {
    return null;
  }

  const el = edgeContext?.edgeEl?.current;
  const render = (
    <div className="fx-popover" {...props} ref={dropdownRef as React.RefObject<HTMLDivElement>} hidden={!isOpen}>
      {children}
    </div>
  );

  if (el) {
    return ReactDOM.createPortal(render, el);
  }

  return render;
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
