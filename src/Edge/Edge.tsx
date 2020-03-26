import React from 'react';

import './styles.css';

export const context = React.createContext(null);

const Edge: React.FC = ({ children }) => {
  // useInjectedFontLinks();

  return (
    <context.Provider value={null}>
      <div className="edge-wrapper">{children}</div>
    </context.Provider>
  );
};

if (__DEV__) {
  Edge.displayName = 'FxEdge';
}

export default Edge;

// const links = [
//   ['main', 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap&subset=cyrillic'],
//   [
//     'icons',
//     'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Sharp|Material+Icons+Round'
//   ]
// ];

// function useInjectedFontLinks() {
//   React.useEffect(() => {
//     const fonts = links.map(([key, link]) => {
//       if (document.querySelector<HTMLLinkElement>(`link[rel="stylesheet"][data-foxtrotedge="${key}"]`)) {
//         return;
//       }
//       const el = document.createElement('link');
//       el.href = link;
//       el.dataset['foxtrotedge'] = key;
//       el.rel = 'stylesheet';

//       return el;
//     });

//     document.head.prepend(...fonts);
//   }, []);
// }
