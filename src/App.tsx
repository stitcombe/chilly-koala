import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from 'lib/layout';
import Routings from 'lib/router/Routings';
import theme from 'lib/styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
