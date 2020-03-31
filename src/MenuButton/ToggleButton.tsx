import React from 'react';

import { useDropdown, useDownshiftState } from 'Dropdown/utils';
import { useCombinedRefs } from '../@utils';

type Props = {};

const ToggleButton: React.FC<Props> = ({ children }) => {
  const { triggerRef } = useDropdown();
  const { getToggleButtonProps } = useDownshiftState();

  const { ref: downshiftRef, ...downshiftProps } = getToggleButtonProps({
    ...(children as React.ReactElement).props,
  } as any);

  const refs = useCombinedRefs(downshiftRef, triggerRef);

  return React.cloneElement(children as React.ReactElement, {
    ...downshiftProps,
    ref: refs,
  });
};

if (__DEV__) {
  ToggleButton.displayName = 'FxToggleButton';
}

export default ToggleButton;
