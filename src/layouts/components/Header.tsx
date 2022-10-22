import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const bg = useColorModeValue('#FFFFFF', '#1A202C');
  const navigate = useNavigate();

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      pos="sticky"
      top={0}
      bg={bg}
      py={3}
      px={5}
      zIndex="1"
    >
      <Flex marginLeft="auto" gap={10}>
        <Button colorScheme="teal" variant="link" onClick={() => navigate('sample')}>
          Sample
        </Button>
        <Button colorScheme="teal" variant="link" onClick={() => navigate('example')}>
          Example
        </Button>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
