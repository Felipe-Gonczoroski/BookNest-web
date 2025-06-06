import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Button, Link } from 'components';

export const ResetPasswordScreen = () => {
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
          <Text.ScreenTitle mt="3.3rem">Nova senha</Text.ScreenTitle>
          <Text mt="0.8rem">
            Digite o código enviado e uma nova senha nos campos abaixo:
          </Text>
          <Input mt="1.2rem" placeholder="Ex: 0000" />
          <Input.Password mt="1.3rem" placeholder="Nova senha" />
          <Input.Password mt="1.3rem" placeholder="Confirmar nova senha" />

          <Button mt="1.5rem">Salvar</Button>

          <Flex
            flexDir={{ base: 'column', sm: 'column', md: 'row' }}
            align="center"
            justifyContent="center"
            mt="2.3rem"
          >
            <Text>Não recebeu o código?</Text>
            <Link
              fontSize="1rem"
              fontWeight="bold"
              color="brand.black"
              ml="0.3rem"
            >
              Clique aqui para reenviar.
            </Link>
          </Flex>
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
