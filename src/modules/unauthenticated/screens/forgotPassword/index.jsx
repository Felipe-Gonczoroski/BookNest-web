import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Button } from 'components';
import { useNavigate } from 'react-router-dom';

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate();
  return (
    <Flex w="100vw" h="100vh">
      <Flex
        flexDir="column"
        align="center"
        justifyContent="center"
        w={['100%', '75%', '80%']}
        h="100%"
        px={['1.5rem', '3rem', '5rem']}
      >
        <Flex flexDir="column" w="100%" maxW="26rem">
          <Image
            src="/img/logo.svg"
            alt="BookNest Logo"
            w="160px"
            objectFit="contain"
          />
          <Text.ScreenTitle mt="3.3rem">Esqueceu senha</Text.ScreenTitle>
          <Text mt="0.9rem">
            Digite abaixo seu e-mail que enviaremos um código de recuperação de
            senha:
          </Text>
          <Input mt="1.3rem" placeholder="E-mail" />

          <Button mt="1.5rem" onClick={() => navigate('/reset-password')}>
            Avançar
          </Button>
        </Flex>
      </Flex>
      <Flex
        display={['none', 'flex', 'flex', 'flex']}
        w={['30%', '35%', '40%', '80%']}
        h="100%"
        backgroundImage="url('/img/auth_background.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="12px"
        borderBottomLeftRadius="12px"
        marginLeft="auto"
      />
    </Flex>
  );
};
