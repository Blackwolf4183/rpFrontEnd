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

  const [isLoading, setIsLoading] = useState(false);
  const [donations, setDonations] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/donations')
      .then(response => {
        console.log(response.data.donations);
        setDonations(response.data.donations);
      })
      .catch(err => {
        console.log('error: ' + err);
      });
  }, []);

  return (
    <Center mt="150px">
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

        <Heading size="md">
          !Contribuye al servidor y forma parte de la comunidad!
        </Heading>

        <VStack spacing="10px" align={"left"} maxHeight={'600px'} overflowY="scroll" p="20px">
          <DonationBox name="Jose" amount="200" />
          {donations
            ? donations.map(item => {
                return (
                  <DonationBox
                    key={item.id}
                    donatorId={item.donatorId}
                    amount={item.amount.$numberDecimal}
                  />
                );
              })
            : null}
        </VStack>
      </VStack>
    </Center>
  );
};

export default DonationsSection;
