import { Flex, Box, Heading } from '@chakra-ui/react';

import UserTable from './UserTable';
import ScrollDemo from './ScrollDemo';

function Example() {
  return (
    <Flex direction="column" maxW="960px" px={10} mx="auto">
      <Box>
        <Heading size="md" my={4}>
          rtk query
        </Heading>
        <UserTable />
      </Box>

      <Box>
        <Heading size="md" my={4}>
          scroll reveal
        </Heading>
        <ScrollDemo />
      </Box>
    </Flex>
  );
}

export default Example;
