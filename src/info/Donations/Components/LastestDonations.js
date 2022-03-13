import {
  Box,
  Heading,
  Text,
  Tag,
  HStack,
  IconButton,
  Skeleton,
  Center,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LatestDonations = ({ donations }) => {
  const [currentDonation, setCurrentDonation] = useState(0);

  const [displayBadge, setDisplayBadge] = useState(true);
  /* FIXME: IMPLEMENTAR BADGE DE DATES */

  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (donations) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/users/` +
            donations[currentDonation].donatorId
        )
        .then(response => {
          setUsername(response.data.user.name);
          var displayDate =
            new Date().getTime() -
            new Date(donations[currentDonation].date).getTime();
          setDisplayBadge(new Date(displayDate).getDay() < 2);
        })
        .catch(err => {
          setError(err.message);
        });
    }
  }, [donations, currentDonation]);

  return (
    <Box
      h="300px"
      w="300px"
      borderRadius={'xl'}
      bgColor="secondary_donation_box"
      p="15px"
      textAlign={'center'}
    >
      <Heading color="white" size={'lg'} mt="10px" fontWeight={'600'}>
        Donaciones recientes
      </Heading>

      <HStack justify={'center'} spacing="15px">
        <IconButton
          onClick={() => {
            currentDonation > 0 && setCurrentDonation(currentDonation - 1);
          }}
          disabled={!donations}
        >
          <FontAwesomeIcon
            style={{ width: '30px', height: '30px' }}
            icon={faArrowLeft}
          />
        </IconButton>
        <Box>
          {displayBadge ? (
            <Tag
              mt="30px"
              color="white"
              fontWeight={'600'}
              variant="outline"
              userSelect={'none'}
            >
              Nueva
            </Tag>
          ) : (
            <Box mt="50px" />
          )}

          <Heading mt="10px" userSelect={'none'} w="150px">
            {!donations ? (
              <Skeleton h="30px" w="150px" mt="20px" />
            ) : (
              donations[currentDonation].amount.$numberDecimal + '$'
            )}{' '}
          </Heading>

          <Text
            fontSize={'xl'}
            fontWeight={'600'}
            mt="15px"
            userSelect={'none'}
            w="160px"
            wordBreak={'none'}
          >
            {!username ? (
              <Center>
                <Skeleton h="20px" w="90px" />
              </Center>
            ) : (
              username
            )}
          </Text>
        </Box>
        <IconButton
          onClick={() => {
            currentDonation < donations.length - 1 &&
              setCurrentDonation(currentDonation + 1);
          }}
          disabled={!donations}
        >
          <FontAwesomeIcon
            style={{ width: '30px', height: '30px' }}
            icon={faArrowRight}
          />
        </IconButton>
      </HStack>
    </Box>
  );
};

export default LatestDonations;
