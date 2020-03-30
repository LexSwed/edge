import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import './styles.css';
import { usePopper, usePopoverHandles } from './utils';

type Props = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Popover: React.FC<Props> = ({ children, className, ...props }) => {
  const dropdownRef = usePopper();

  usePopoverHandles();

  return ReactDOM.createPortal(
    <div className={cx(className)} {...props} ref={dropdownRef as React.RefObject<HTMLDivElement>}>
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
