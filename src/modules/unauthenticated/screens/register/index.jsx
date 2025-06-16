import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Link, Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const RegisterScreen = () => {
  const navigate = useNavigate();

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'O nome deve conter ao menos 3 caracteres.')
        .required('Nome completo é obrigatório.'),
      email: Yup.string()
        .email('Endereço de email inválido')
        .required('Email é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha deve conter ao menos 6 caracteres.')
        .required('Senha é obrigatória'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar a senha deve conter ao menos 6 caracteres.')
        .required('Confirmar a senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'Senhas não coincidem'),
    }),
    onSubmit: (data) => {
      navigate('/');
    },
  });

  return (
    <Flex w="100vw" h="100vh" overflowX="hidden">
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
            mt="3rem"
          />
          <Text.ScreenTitle mt="2.8rem">Cadastro</Text.ScreenTitle>

          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Nome completo"
            mt="1.2rem"
          />
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="E-mail"
            mt="1.2rem"
          />
          <Input.Password
            mt="1.3rem"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Senha"
          />
          <Input.Password
            mt="1.3rem"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="Confirmar senha"
          />

          <Button mt="1.5rem" onClick={handleSubmit}>
            Cadastrar
          </Button>

          <Flex align="center" justifyContent="center" mt="2.5rem">
            <Text>Possui uma conta?</Text>
            <Link
              fontSize="1rem"
              fontWeight="bold"
              color="brand.black"
              ml="0.3rem"
              onClick={handleSubmit}
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
