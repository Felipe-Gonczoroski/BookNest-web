import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({ children, ...props }) => {
  return (
    <ChakraButton
      w="26rem"
      h="3.5rem"
      bg="brand.primary"
      borderRadius="1rem"
      fontWeight="bold"
      fontSize="1rem"
      _hover={{ bg: 'brand.primaryHover' }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
