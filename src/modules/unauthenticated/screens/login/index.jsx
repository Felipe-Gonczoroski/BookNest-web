import { Flex, Image, Text, Input, Link, Button } from '@chakra-ui/react';

export const LoginScreen = () => {
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        flexDir="column"
        align="flex-start"
        justifyContent="center"
        w="50%"
        h="100%"
        paddingLeft="7rem"
      >
        <Flex flexDir="column" width="26rem">
          <Image src="/img/logo.svg" alt="BookNest Logo" w="160px" objectFit="contain" />
          <Text mt="2rem">Login</Text>
          <Input mt="0.9rem" placeholder="exemplo@gmail.com" />
          <Input mt="1.3rem" placeholder="***************" />
          <Link mt="0.5rem">Esqueceu sua senha?</Link>
          <Button mt="0.7rem">Login</Button>
          <Link mt="2.2rem">Não possui uma conta? Cadastre-se aqui.</Link>
        </Flex>
      </Flex>
      <Flex
        w="60%"
        h="100%"
        backgroundImage="url('/img/auth_background.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="12px"
        borderBottomLeftRadius="12px"
      ></Flex>
    </Flex>
  );
};
