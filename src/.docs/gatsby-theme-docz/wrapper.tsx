import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Edge } from '../../../dist';

import '../../../dist/styles.css';
import logo from '../../../src/Logo/logo-solid.svg';

const Wrapper: React.FC = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Fxtrot</title>
      <link rel="icon" type="image/svg" href={logo} />
    </Helmet>
    <Edge>{children}</Edge>
  </>
);

export default Wrapper;
