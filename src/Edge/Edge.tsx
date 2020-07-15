import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import defaultTheme from './theme';
import { EdgeStyled } from './Edge.styled';
import useTheme from './theme/useTheme';
import FocusManager from '../FocusManager';
import { isClient } from '../@utils';
import CSSReset from './CSSReset';

type EdgeContext = {
  edgeEl: React.RefObject<HTMLDivElement> | null;
};

export const context = React.createContext<EdgeContext>({ edgeEl: null });

type Props = {
  mode?: 'light' | 'dark' | 'auto';
  theme?: Partial<typeof defaultTheme>;
};

const Edge: React.FC<Props> = ({ children, mode = 'auto', theme = {} }) => {
  const edgeEl = useRef(null);
  const mergedTheme = useTheme(mode, theme);

  return (
    <FocusManager>
      <ThemeProvider theme={mergedTheme}>
        <context.Provider value={{ edgeEl }}>
          <EdgeStyled color="text.default" ref={edgeEl}>
            <CSSReset />
            {children}
          </EdgeStyled>
        </context.Provider>
      </ThemeProvider>
    </FocusManager>
  );
};

if (__DEV__) {
  Edge.displayName = 'FxEdge';
}

export default Edge;

if (isClient) {
  Object.entries({
    main: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap&subset=cyrillic',
    icons:
      'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round',
  }).forEach(([key, link]) => {
    if (document.querySelector<HTMLLinkElement>(`link[rel="stylesheet"][data-foxtrotedge="${key}"]`)) {
      return;
    }
    const el = document.createElement('link');
    el.href = link;
    el.dataset['foxtrotedge'] = key;
    el.rel = 'stylesheet';

    document.head.prepend(el);
  });
}
