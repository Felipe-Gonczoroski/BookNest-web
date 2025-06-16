import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate();
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Endereço de email inválido')
        .required('Email é obrigatório'),
    }),
    onSubmit: () => {
      navigate('/reset-password');
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
          <Text.ScreenTitle mt="3.3rem">Esqueceu senha</Text.ScreenTitle>
          <Text mt="0.9rem">
            Digite abaixo seu e-mail que enviaremos um código de recuperação de
            senha:
          </Text>
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="E-mail"
            mt="1.3rem"
          />
          <Button mt="1.5rem" onClick={handleSubmit}>
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
