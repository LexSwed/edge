import { useMemo } from 'react';
import deepmerge from 'deepmerge';
import memoize from 'memoize-one';

import defaultTheme from './';
import usePreferredTheme from './usePreferredTheme';

// shameful code
const getThemeForMode = memoize((mode: Mode) => {
  function findDark(obj: any): EdgeTheme {
    if (obj.modes?.[mode]) {
      return { ...obj, ...obj.modes[mode] };
    }

    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) =>
        typeof value === 'object' && !Array.isArray(value) ? [key, findDark(value)] : [key, value]
      )
    ) as EdgeTheme;
  }

  return findDark(defaultTheme);
});

function useTheme(mode: 'dark' | 'light' | 'auto', theme: Partial<EdgeTheme>) {
  const preferredColor = usePreferredTheme(mode);

  const mergedTheme = useMemo(() => {
    if (preferredColor === 'dark') {
      return deepmerge(getThemeForMode(preferredColor), theme);
    }

    return deepmerge(defaultTheme, theme);
  }, [preferredColor, theme]);

  return mergedTheme;
}

export default useTheme;

type Mode = 'dark' | 'light' | 'auto';

type EdgeTheme = typeof defaultTheme;
