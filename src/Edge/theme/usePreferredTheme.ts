import { useState, useEffect } from 'react';
import { isClient } from '../../@utils';

export const usePreferredTheme = (mode: Mode) => {
  const [theme, setTheme] = useState(() => (mode === 'auto' ? getTheme() : mode));

  useEffect(() => {
    if (!isSupported()) {
      return;
    }

    if (mode !== 'auto') {
      return setTheme(mode);
    }

    const match = matchesDark();

    const handler = () => {
      setTheme(getTheme);
    };

    match?.addEventListener('change', handler);

    return () => match?.removeEventListener('change', handler);
  }, [mode]);

  return theme;
};

export default usePreferredTheme;

function matchesDark() {
  if (isSupported()) {
    return window.matchMedia('(prefers-color-scheme: dark)');
  }

  return null;
}

function getTheme() {
  if (!isSupported()) {
    return 'light';
  }

  return matchesDark()?.matches ? 'dark' : 'light';
}

function isSupported() {
  return isClient && 'matchMedia' in window;
}

type Mode = 'dark' | 'light' | 'auto';
