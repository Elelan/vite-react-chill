import { Flex } from '@chakra-ui/react';

import { CTASection, SomeImage, SomeText } from '@/components/samples';

const Sample = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      w="full"
    >
      <SomeText />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};

export default Sample;
