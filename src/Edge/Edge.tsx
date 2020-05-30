import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import theme from './theme';
import { EdgeStyled } from './Edge.styled';
import FocusManager from '../FocusManager';

type EdgeContext = {
  edgeEl: React.RefObject<HTMLDivElement> | null;
};

export const context = React.createContext<EdgeContext>({ edgeEl: null });

type Props = {
  mode?: 'light' | 'dark';
  theme?: Partial<typeof theme>;
};

const Edge: React.FC<Props> = ({ children }) => {
  const edgeEl = useRef(null);

  return (
    <FocusManager>
      <ThemeProvider theme={theme}>
        <context.Provider value={{ edgeEl }}>
          <EdgeStyled color="text.default" ref={edgeEl}>
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

if (typeof window !== 'undefined') {
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
