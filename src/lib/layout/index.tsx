import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import WithSubnavigation from './Nav';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Box
      margin="0 auto"
      // maxWidth={800}
      transition="0.5s ease-out"
    >
      <Meta />
      <WithSubnavigation />
      <Box width="full" as="main" marginTop="60px">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
