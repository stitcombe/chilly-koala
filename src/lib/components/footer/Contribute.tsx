import React from 'react';
import { Box, Stack, Heading, Text, Button, Link } from '@chakra-ui/react';
import { GoGitPullRequest } from 'react-icons/go';

export default function Contribute(): JSX.Element {
  return (
    <Box>
      <Stack>
        <Heading as="h3" size="sm" mb={2}>
          Want to make an update?
        </Heading>
        <Text>
          All docs are open source. See something thats wrong or unclear? Submit
          a pull request.
        </Text>
        <Button
          aria-label="Pull request icon"
          leftIcon={<GoGitPullRequest />}
          variant="outline"
        >
          Make a contribution
        </Button>
        <Link href="#d" textDecoration="underline">
          Learn how to contribute
        </Link>
      </Stack>
    </Box>
  );
}
