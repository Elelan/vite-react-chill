import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" py={10}>
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{' '}
        <Link href="https://github.com/Saszr/vite-react-chill" isExternal rel="noopener noreferrer">
          vite-react-chill
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
