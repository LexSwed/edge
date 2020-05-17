import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import theme from './theme';

import './styles.css';

type EdgeContext = {
  edgeEl: React.RefObject<HTMLDivElement> | null;
};

export const context = React.createContext<EdgeContext>({ edgeEl: null });

type Props = {
  mode?: 'light' | 'dark';
  theme?: Partial<typeof theme>;
};

const Edge: React.FC<Props> = ({ children }) => {
  useInjectedFontLinks();
  const edgeEl = useRef(null);

  return (
    <context.Provider value={{ edgeEl }}>
      <ThemeProvider theme={theme}>
        <div className="fxtrot-edge" ref={edgeEl}>
          {children}
        </div>
      </ThemeProvider>
    </context.Provider>
  );
};

if (__DEV__) {
  Edge.displayName = 'FxEdge';
}

export default Edge;

const links = [
  ['main', 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap&subset=cyrillic'],
  [
    'icons',
    'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round',
  ],
];

function useInjectedFontLinks() {
  React.useEffect(() => {
    const fonts = links.map(([key, link]) => {
      if (document.querySelector<HTMLLinkElement>(`link[rel="stylesheet"][data-foxtrotedge="${key}"]`)) {
        return;
      }
      const el = document.createElement('link');
      el.href = link;
      el.dataset['foxtrotedge'] = key;
      el.rel = 'stylesheet';

      return el;
    }) as Node[];

    document.head.prepend(...fonts);
  }, []);
}
