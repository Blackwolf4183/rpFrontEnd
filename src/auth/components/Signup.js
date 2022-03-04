import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
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

const Signup = () => {
  const auth = useContext(Authcontext);
  const history = useHistory();

  function usernameValidator(value) {
    let error;
    if (!value) {
      error = 'Introduce un usuario válido';
    } else if (value.trim().length > 15) {
      error = 'Usuario demasiado largo, prueba uno más corto';
    }
    return error;
  }

  function steamIdValidator(value) {
    let error;
    if ( !value || 
      !value.match(
        /^steam:\d+$/
      )
    ) {
      error = 'Steam Id no válida';
    }
    return error;
  }

  function emailValidator(value) {
    let error;
    if (
      !value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      error = 'Dirección de correo no válida';
    }
    return error;
  }

  function passwordValidator(value) {
    let error;
    if (value.length < 5) {
      error = 'Tu contraseña debe tener al menos 5 caracteres';
    }
    return error;
  }

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show); //password

  const [errorMsg, setErrorMsg] = useState(null); //errors from server

  return (
    <Formik
      initialValues={{ mail: '',steamId: '', password: '', username: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          const { mail, password, username, steamId } = values;

          /* console.log({
              name: username,
              steamId: steamId,
              email : mail,
              password: password,
            }) */
          axios
            .post('http://localhost:5000/api/users/signup/', {
              name: username,
              steamId: steamId,
              email: mail,
              password: password,
            })
            .then(response => {
              //console.log(response.data)
              const responseData = response.data;
              actions.setSubmitting(false);
              //console.log(responseData.userId);
              
              auth.login(responseData.userId, responseData.token);
            })
            .catch(error => {
              actions.setSubmitting(false);
              if (error.response.data) {
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
              <Heading mt="10px">Sign up</Heading>

              <Field name="username" validate={usernameValidator}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                  >
                    <FormLabel htmlFor="username">Usuario</FormLabel>
                    <Input
                      {...field}
                      id="username"
                      placeholder="Ej: Manolo22"
                      fontSize="md"
                      variant="flushed"
                    />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="steamId" validate={steamIdValidator}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.steamId && form.touched.steamId}
                  >
                    <FormLabel htmlFor="steamId">Steam ID</FormLabel>
                    <Input
                      {...field}
                      id="steamId"
                      placeholder="Ej: steam:11000013409a8b6"
                      fontSize="md"
                      variant="flushed"
                    />
                    <FormErrorMessage>{form.errors.steamId}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="mail" validate={emailValidator}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.mail && form.touched.mail}
                  >
                    <FormLabel htmlFor="mail">Email</FormLabel>
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
                          {show ? 'Hide' : 'Show'}
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
                    Registrate
                  </Button>
                  <Text
                    pb="15px"
                    cursor={'pointer'}
                    onClick={() => {
                      history.push('/auth/login');
                    }}
                  >
                    ¿Ya tienes una cuenta?
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

export default Signup;
