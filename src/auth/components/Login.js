import { useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Center,
  Heading,
  HStack,
  Button,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Authcontext } from '../../context/auth-context';

const Login = () => {
  const auth = useContext(Authcontext);
  const history = useHistory();

  function emailValidator(value) {
    let error;
    if (!value) {
      error = 'No es un email valido';
    }
    return error;
  }

  function passwordValidator(value) {
    let error;
    if (!value) {
      error = 'Prueba a escribir una contraseña';
    }
    return error;
  }

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <Formik
      initialValues={{ mail: '', password: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          const { mail, password } = values;
          axios
            .post('http://localhost:5000/api/users/login', {
              email: mail,
              password: password,
            })
            .then(response => {
              /* console.log(response.data); */
              const responseData = response.data;
              actions.setSubmitting(false);
              auth.login(responseData.userId, responseData.token);
            })
            .catch(error => {
              actions.setSubmitting(false);
              if (error.response) {
                setErrorMsg(error.response.data.message);
              }
            });
        }, 1000);
      }}
    >
      {props => (
        <Form>
          <Center mt="50px">
            <VStack spacing="30px" w="90%" maxWidth="1000px">
              <Heading mt="10px">{'Log in'}</Heading>

              <Field name="mail" validate={emailValidator}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.mail && form.touched.mail}
                  >
                    <FormLabel htmlFor="title">Email</FormLabel>
                    <Input
                      {...field}
                      id="mail"
                      placeholder="tuEmail@gmail.com"
                      fontSize="md"
                      variant="flushed"
                    />
                    <FormErrorMessage>{form.errors.mail}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password" validate={passwordValidator}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">Contraseña</FormLabel>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Tu contraseña"
                        variant="flushed"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? 'Ocultar' : 'Mostrar'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <>
                {errorMsg && (
                  <HStack w="100%" color={'red.300'}>
                    <Text h="0">{errorMsg}</Text>
                  </HStack>
                )}
                <HStack w="100%">
                  <Button
                    mt={2}
                    mb={10}
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Log in
                  </Button>
                  <Text
                    pb="15px"
                    cursor={'pointer'}
                    onClick={() => {
                      history.push('/auth/signup/');
                    }}
                  >
                    ¿No tienes cuenta?
                  </Text>
                </HStack>
              </>
            </VStack>
          </Center>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
