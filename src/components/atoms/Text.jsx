import { Text as ChakraText } from '@chakra-ui/react';

export const Text = ({ children, ...props }) => {
  return <ChakraText {...props}>{children}</ChakraText>;
};

Text.ScreenTitle = ({ children, ...props }) => {
  return (
    <ChakraText
      fontSize="1.25rem"
      fontWeight="extrabold"
      color="brand.black"
      {...props}
    >
      {children}
    </ChakraText>
  );
};
