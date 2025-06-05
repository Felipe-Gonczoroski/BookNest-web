import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Link, Button } from 'components';
import { useNavigate } from 'react-router-dom';

export const RegisterScreen = () => {
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
          <Text.ScreenTitle mt="3.5rem">Cadastro</Text.ScreenTitle>

          <Input mt="1.2rem" placeholder="Nome completo" />
          <Input mt="1.2rem" placeholder="E-mail" />
          <Input.Password mt="1.3rem" placeholder="Senha" />
          <Input.Password mt="1.3rem" placeholder="Confirmar senha" />

          <Flex w="100%" mt="1rem" justifyContent="flex-end">
            <Link>Esqueceu sua senha?</Link>
          </Flex>

          <Button mt="1.2rem">Cadastrar</Button>

          <Flex align="center" justifyContent="center" mt="2.5rem">
            <Text>Possui uma conta?</Text>
            <Link
              fontSize="1rem"
              fontWeight="bold"
              color="brand.black"
              ml="0.3rem"
              onClick={() => navigate('/')}
            >
              Faça login aqui.
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
