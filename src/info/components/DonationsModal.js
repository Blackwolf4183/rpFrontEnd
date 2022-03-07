import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Heading,
  Center,
  useToast,
  Text,
  Checkbox,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

import { Authcontext } from '../../context/auth-context';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const DonationsModal = ({ isOpen, onClose }) => {
  const auth = useContext(Authcontext);
  const history = useHistory();

  const toast = useToast();

  const [concept, setConcept] = useState(null);
  const [price, setPrice] = useState('0.00');
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    console.log('se ha aprobado');
    if (auth.isLoggedIn) {
      return actions.order
        .capture()
        .then(function (details) {
          //console.log(details);
          //alert("Transaction completed by " + details.payer.name.given_name)

          /* const testDonation = {
            order_id: data.orderID,
            paypal_email: details.payer.email_address,
            paypal_name: details.payer.name.given_name,
            paypal_surname: details.payer.name.surname,
            paypal_payer_id: details.payer.payer_id,
            concept: concept,
            amount: price,
          };

          console.log(testDonation); */

          const config = {
            headers: {
              Authorization: 'Bearer ' + auth.token,
            },
          };

          axios
            .post(
              `${process.env.REACT_APP_BACKEND_URL}/donations/`,
              {
                order_id: data.orderID,
                paypal_email: details.payer.email_address,
                paypal_name: details.payer.name.given_name,
                paypal_surname: details.payer.name.surname,
                paypal_payer_id: details.payer.payer_id,
                concept: concept,
                amount: price,
              },
              config
            )
            .then(response => {
              //console.log('response data: ' + response.data);
              onClose();
              toast({
                title: 'Pago recibido',
                description:
                  'Se ha enviado un recibo a tu dirección de correo asociada a esta cuenta. ¡Muchas gracias por su donación!',
                variant: 'solid',
                status: 'success',
                duration: 9000,
                isClosable: true,
              });
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }

    history.push('/auth/login');
  };

  const handleChangePrice = event => {
    if (event.target.value > 0 && event.target.value < 100000) {
      setIsPriceValid(true);
      setPrice(event.target.value);
    } else {
      setIsPriceValid(false);
      setPrice(0);
    }
  };

  const handleChangeConcept = e => {
    setConcept(e.target.value);
  };

  const handleCheck = e => {
    setIsChecked(!isChecked);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Método de pago</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup mb="10px">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input
              placeholder="Ingresa cantidad a donar"
              onChange={handleChangePrice}
              type="number"
              min={'0.01'}
              max={'10000'}
              maxLength="6"
            />
            <InputRightElement
              children={isPriceValid && <CheckIcon color="green.500" />}
            />
          </InputGroup>

          <InputGroup mb="40px">
            <Input
              placeholder="Concepto del pago"
              onChange={handleChangeConcept}
              maxLength="50"
            />
          </InputGroup>

          <Center mb="40px">
            <Heading size="md">Cantidad a donar: {price ? price : 0}$</Heading>
          </Center>

          {isChecked && (
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
          )}

          <Checkbox isChecked={isChecked} onChange={handleCheck}>
            Acepto los{' '}
            <Link to="/main/terminos" target="_blank" rel="noopener noreferrer"><b>términos y condiciones</b></Link>
          </Checkbox>
          {!isChecked && <Text color="red.300">*Debes aceptar los términos y condiciones para poder donar</Text>}
          
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Volver
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DonationsModal;
