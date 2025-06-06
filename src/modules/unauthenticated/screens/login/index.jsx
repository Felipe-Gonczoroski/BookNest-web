import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Link, Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const LoginScreen = () => {
  const navigate = useNavigate();

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Endereço de email inválido')
        .required('Email é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha deve conter ao menos 6 caracteres.')
        .required('Senha é obrigatória'),
    }),
    onSubmit: (data) => {
      console.log({ data });
    },
  });

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
          <Text.ScreenTitle mt="3.5rem">Login</Text.ScreenTitle>

          <Input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="exemplo@gmail.com"
            error={errors.email}
            mt="1.2rem"
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="1.3rem"
          />

          <Flex w="100%" mt="1rem" justifyContent="flex-end">
            <Link onClick={() => navigate('/forgot-password')}>
              Esqueceu sua senha?
            </Link>
          </Flex>

          <Button onClick={handleSubmit} mt="1.2rem">
            Login
          </Button>

          <Flex align="center" justifyContent="center" mt="2.5rem">
            <Text>Não possui uma conta?</Text>
            <Link
              fontSize="1rem"
              fontWeight="bold"
              color="brand.black"
              ml="0.3rem"
              onClick={() => navigate('/signup')}
            >
              Cadastre-se aqui.
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
