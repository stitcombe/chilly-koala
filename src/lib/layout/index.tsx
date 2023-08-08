import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import SidebarWithHeader from './Nav1';
import Footer from './Footer';
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
      <SidebarWithHeader />
      <Flex width="full" as="main" marginTop="60px">
        {children}
      </Flex>
      <Footer />
    </Box>
  );
}

export default Layout;
