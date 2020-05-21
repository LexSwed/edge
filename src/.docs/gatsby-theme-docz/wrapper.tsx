import React from 'react';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from '../../../dist';

import logo from '../../../src/Logo/logo-solid.svg';

const Wrapper: React.FC = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Fxtrot</title>
      <link rel="icon" type="image/svg" href={logo} />
    </Helmet>
    <ThemeProvider>{children}</ThemeProvider>
  </>
);

export default Wrapper;
