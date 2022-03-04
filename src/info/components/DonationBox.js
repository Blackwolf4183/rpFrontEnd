import { Badge, Box, Skeleton, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import axios from 'axios';

const DonationBox = ({ donatorId, amount, date }) => {
  var displayDate = new Date().getTime() - new Date(date).getTime();
  var displayBadge = new Date(displayDate).getHours() < 24 * 7; //si la donación es de una semana atrás

  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);

  axios.get('http://localhost:5000/api/users/' + donatorId )
  .then(response => {
    setUsername(response.data.user.name);
  })
  .catch(err => {
    setError(err.message);
  })

  return (
    <Box
      bgColor={'teal'}
      borderRadius="md"
      p="10px"
      maxW={'80vw'}
      textAlign="left"
    >
      {username && !error ? (
        <Text fontSize={'lg'} fontWeight="600">
          {displayBadge && (
            <Badge colorScheme={'cyan'} mr="5px">
              Nueva
            </Badge>
          )}
          {username} ha realizado una donación de {amount} $. !El
          servidor te está agradecido!
        </Text>
      ) : (
        <Skeleton>
          {'Nombre temporal'} Hola, esto es un texto para la longitud, si has
          llegado hasta aquí conoces de html ;)
        </Skeleton>
      )}
    </Box>
  );
};

export default DonationBox;
