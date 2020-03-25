import React from 'react';

import './styles.css';

const context = React.createContext(null);

const Edge: React.FC = ({ children }) => {
  return (
    <context.Provider value={null}>
      <>{children}</>
    </context.Provider>
  );
};

Edge.displayName = 'fx-edge';

export default Edge;
