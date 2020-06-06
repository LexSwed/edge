import { useState, useEffect } from 'react';

const match = window.matchMedia('(prefers-color-scheme: dark)');

export const usePreferredTheme = (mode: Mode) => {
  const [theme, setTheme] = useState(() => (mode === 'auto' ? getTheme() : mode));

  useEffect(() => {
    if (!isSupported()) {
      return;
    }

    if (mode !== 'auto') {
      return setTheme(mode);
    }

    const handler = () => {
      setTheme(getTheme);
    };

    match.addEventListener('change', handler);

    return () => match.removeEventListener('change', handler);
  }, [mode]);

  return theme;
};

export default usePreferredTheme;

type Mode = 'dark' | 'light' | 'auto';

function getTheme() {
  if (!isSupported()) {
    return 'light';
  }

  return match.matches ? 'dark' : 'light';
}

function isSupported() {
  return typeof window !== 'undefined' && 'matchMedia' in window;
}
