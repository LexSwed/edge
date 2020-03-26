import React from 'react';

import './styles.css';

const context = React.createContext(null);

const Edge: React.FC = ({ children }) => {
  return (
    <context.Provider value={null}>
      <div className="edge-wrapper">{children}</div>
    </context.Provider>
  );
};

if (__DEV__) {
  Edge.displayName = 'fx-edge';
}

export default Edge;
