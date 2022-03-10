import {
  Center,
  Heading,
  VStack,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import DonationBox from './DonationBox';
import { Authcontext } from '../../context/auth-context';

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import DonationsModal from './DonationsModal';

const DonationsSection = () => {
  const auth = useContext(Authcontext);
  const history = useHistory();

  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/donations`)
      .then(response => {
        //console.log(response.data.donations);
        setDonations(response.data.donations);
      })
      .catch(err => {
        setError(err.message);
        console.log('error: ' + error);
      });
  }, []);

  return (
    <Center mt="150px" mb="50px">
      <DonationsModal isOpen={isOpen} onClose={onClose} />
      <VStack spacing="50px">
        <Heading>Donaciones</Heading>

        {/* paypal thing */}
        {auth.isLoggedIn ? (
          <Button
            size="lg"
            colorScheme={'purple'}
            variant="outline"
            onClick={onOpen}
          >
            Haz click para donar al servidor
          </Button>
        ) : (
          <Button
            size="lg"
            colorScheme={'purple'}
            variant="outline"
            onClick={() => history.push('/auth/login')}
          >
            Debes estar logeado para poder donar
          </Button>
        )}

        <Heading size="md" textAlign={'center'} pl="25px" pr="25px">
          ¡Contribuye al servidor y forma parte de la comunidad!
        </Heading>

        <VStack
          spacing="10px"
          align={'left'}
          maxHeight={'600px'}
          maxWidth="1000px"
          overflowY="scroll"
          p="20px"
        >
          {donations &&
            (donations.length === 0 ? (
              <Heading textAlign={'center'}>
                Ups, todavía no hay donaciones, ¡se tú el primero en ayudarnos!
              </Heading>
            ) : (
              donations.map(item => {
                return (
                  <DonationBox
                    key={item.id}
                    donatorId={item.donatorId}
                    amount={item.amount.$numberDecimal}
                    date={item.date}
                  />
                );
              })
            ))}
        </VStack>
      </VStack>
    </Center>
  );
};

export default DonationsSection;
