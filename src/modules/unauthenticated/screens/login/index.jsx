import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Link, Button } from 'components';

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
          <Image
            src="/img/logo.svg"
            alt="BookNest Logo"
            w="160px"
            objectFit="contain"
          />
          <Text.ScreenTitle mt="3.5rem">Login</Text.ScreenTitle>
          <Input mt="1.2rem" placeholder="exemplo@gmail.com" />
          <Input.Password mt="1.3rem" />
          <Flex w="100%" mt="1rem" align="flex-end" justifyContent="flex-end">
            <Link>Esqueceu sua senha?</Link>
          </Flex>
          <Button mt="1.2rem">Login</Button>
          <Flex align="center" justifyContent="center" mt="3rem">
            <Text>Não possui uma conta?</Text>
            <Link
              fontSize="1rem"
              fontWeight="bold"
              color="brand.black"
              ml="0.3rem"
            >
              Cadastre-se aqui.
            </Link>
          </Flex>
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
