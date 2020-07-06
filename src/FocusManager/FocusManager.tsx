import React, { useEffect } from 'react';
import { applyFocusVisiblePolyfill } from './focus-visible';

const FocusManager: React.FC = ({ children }) => {
  useEffect(() => {
    const cleanup = applyFocusVisiblePolyfill();

    return cleanup;
  }, []);

  return <>{children}</>;
};

export default FocusManager;
