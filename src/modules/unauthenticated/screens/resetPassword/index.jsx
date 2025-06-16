import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Button, Link } from 'components';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const ResetPasswordScreen = () => {
  const navigate = useNavigate();
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(4, 'O código deve conter 4 caracteres.')
        .required('O código de verificação é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve conter ao menos 6 caracteres.')
        .required('Senha é obrigatória'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar a senha deve conter ao menos 6 caracteres.')
        .required('Confirmar a senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'Senhas não coincidem'),
    }),
    onSubmit: () => {
      navigate('/');
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
          <Text.ScreenTitle mt="3.3rem">Nova senha</Text.ScreenTitle>
          <Text mt="0.8rem">
            Digite o código enviado e uma nova senha nos campos abaixo:
          </Text>
          <Input
            mt="1.2rem"
            id="token"
            name="token"
            value={values.token}
            onChange={handleChange}
            error={errors.token}
            placeholder="Ex: 0000"
            maxLength={4}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Nova senha"
            mt="1.3rem"
          />
          <Input.Password
            mt="1.3rem"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="Confirmar nova senha"
          />

          <Button mt="1.5rem" onClick={handleSubmit}>
            Salvar
          </Button>

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
