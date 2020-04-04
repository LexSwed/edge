import React from 'react';

import { useToggleButtonProps } from 'Dropdown/utils';

type Props = {};

const ToggleButton: React.FC<Props> = ({ children }) => {
  const downshiftProps = useToggleButtonProps();

  return React.cloneElement(children as React.ReactElement, downshiftProps);
};

if (__DEV__) {
  ToggleButton.displayName = 'FxToggleButton';
}

export default ToggleButton;
