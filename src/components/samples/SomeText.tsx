import { Grid, Heading, Text } from '@chakra-ui/react';

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        vite-react-chill
      </Heading>

      <Text fontSize="xs" color="gray.500">
        This is a react app with Vite / TypeScript / Chakra-UI / Redux Toolkit (include RTK Query)
        setup.
      </Text>
    </Grid>
  );
};

export default SomeText;
