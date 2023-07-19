import React from 'react';
import { Container, HStack, Heading, Link, Text } from '@chakra-ui/react';

export default function LegalFooter(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Heading as="h2" size="sm" mb={2}>
        Legal
      </Heading>
      <HStack spacing={4}>
        <Text>&copy; {year} Foo, Inc.</Text>
        <Link href="#a">Terms</Link>
        <Link href="#b">Pricing</Link>
        <Link href="#c">Status</Link>
      </HStack>
    </Container>
  );
}
