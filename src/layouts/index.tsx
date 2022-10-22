import { Outlet } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <Flex direction="column" margin="0 auto" minH="full">
      <Header />
      <Flex flex="1" direction="column" justify="between">
        <Box as="main" flex="1">
          <Outlet />
        </Box>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
