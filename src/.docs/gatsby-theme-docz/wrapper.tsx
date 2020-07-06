import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useColorMode } from 'theme-ui';

import { ThemeProvider } from '../../../src';

const Wrapper: React.FC = ({ children }) => {
  const [color] = useColorMode();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fxtrot</title>
        <link rel="icon" type="image/svg" href="public/logo.svg" />
      </Helmet>
      <ThemeProvider mode={color}>{children}</ThemeProvider>
    </>
  );
};

export default Wrapper;
