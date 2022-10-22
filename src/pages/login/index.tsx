import { Flex } from '@chakra-ui/react';

import LoginForm from './LoginForm';

const Login = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      w="full"
    >
      <LoginForm />
    </Flex>
  );
};

export default Login;
