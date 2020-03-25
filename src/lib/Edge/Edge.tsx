import React from 'react';
import { css } from 'linaria';

import theme from 'utils/theme';

css`
  :global() {
    body {
      margin: 0;
      font-family: 'system-ui', sans-serif;
      color: ${theme.colors.text.main};
    }
  }
`;

const context = React.createContext(null);

const Edge: React.FC = ({ children }) => {
  return (
    <context.Provider value={null}>
      <>{children}</>
    </context.Provider>
  );
};

export default Edge;
