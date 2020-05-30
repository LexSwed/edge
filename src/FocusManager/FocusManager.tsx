import React from 'react';
import { applyFocusVisiblePolyfill } from './focus-visible';

const FocusManager: React.FC = ({ children }) => {
  React.useEffect(() => {
    const cleanup = applyFocusVisiblePolyfill();

    return cleanup;
  }, []);

  return <>{children}</>;
};

export default FocusManager;
