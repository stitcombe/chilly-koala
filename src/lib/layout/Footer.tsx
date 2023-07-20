import React from 'react';
import LegalFooter from 'lib/components/footer/LegalFooter';
import Contribute from 'lib/components/footer/Contribute';
import { Container, SimpleGrid } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Container>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Contribute />
        <Contribute />
        <Contribute />
      </SimpleGrid>
      <LegalFooter />
    </Container>
  );
}
