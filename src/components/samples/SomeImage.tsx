import { Flex } from '@chakra-ui/react';

import HelperImage from './HelperImage';
import ChakraLogo from '@/assets/chakra-ui-logomark-colored.svg';
import TsLogo from '@/assets/ts-logo-512.svg';

const SomeImage = () => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <HelperImage src={ChakraLogo} label="Chakra UI" />
      <HelperImage src={TsLogo} label="TypeScript" />
    </Flex>
  );
};

export default SomeImage;
