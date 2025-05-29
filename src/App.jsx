import { Box, Text, Heading } from '@chakra-ui/react';

export default function App() {
  return (
    <Box bg="brand.whiteSoft" color="brand.blackSoft" minH="100vh" p={8}>
      <Heading color="brand.amber">Hello Chakra!</Heading>
      <Text mt={4}>Isso é um teste do tema customizado!</Text>
    </Box>
  );
}
