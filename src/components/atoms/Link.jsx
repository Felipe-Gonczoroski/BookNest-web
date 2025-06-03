import { Link as ChakraLink, Flex } from '@chakra-ui/react';

export const Link = ({ children, ...props }) => {
  return (
    <ChakraLink fontSize="0.875rem" color="brand.grayDark" {...props}>
      {children}
    </ChakraLink>
  );
};
