import React from 'react';
import { Box, HStack, Heading, Link, Text } from '@chakra-ui/react';

export default function LegalFooter(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <Box>
      <Heading as="h2" size="sm" mb={2} mt={4}>
        Legal
      </Heading>
      <HStack spacing={4}>
        <Text>&copy; {year} Foo, Inc.</Text>
        <Link href="#a">Terms</Link>
        <Link href="#b">Pricing</Link>
        <Link href="#c">Status</Link>
      </HStack>
    </Box>
  );
}
