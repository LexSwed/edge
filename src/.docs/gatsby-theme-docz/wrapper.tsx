import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Edge } from '../../../dist';

import '../../../dist/styles.css';

const Wrapper: React.FC = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Edge</title>
      <link rel="icon" type="image/svg" href="/logo-solid.svg" />
    </Helmet>
    <Edge>{children}</Edge>
  </>
);

export default Wrapper;
