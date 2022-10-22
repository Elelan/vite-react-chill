import { Box, VStack } from '@chakra-ui/react';
import ScrollReveal from '@/containers/ScrollReveal';

const showAnimation = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const translationAnimation = {
  visible: { opacity: 1, x: '150px', transition: { duration: 1 } },
  hidden: { opacity: 1, x: '0' },
};

const tiltAnimation = {
  visible: { opacity: 1, x: '300px', y: '-300px', transition: { duration: 1 } },
  hidden: { opacity: 1, x: '0', y: '0' },
};

function ScrollDemo() {
  return (
    <VStack spacing="100px">
      <ScrollReveal variants={showAnimation} isLoop={true}>
        <Box w="40px" h="40px" bg="yellow.200" my={10} />
      </ScrollReveal>
      <ScrollReveal variants={translationAnimation} isLoop={true}>
        <Box w="40px" h="40px" bg="tomato" my={10} />
      </ScrollReveal>
      <ScrollReveal variants={tiltAnimation} isLoop={true}>
        <Box w="40px" h="40px" bg="pink.100" my={10} />
      </ScrollReveal>
    </VStack>
  );
}

export default ScrollDemo;
