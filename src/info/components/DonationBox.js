import { Badge, Box, Text } from '@chakra-ui/react';
import React from 'react';

import axios from 'axios';

const DonationBox = ({ donatorId, amount }) => {
  return (
    <Box
      bgColor={'teal'}
      borderRadius="md"
      p="10px"
      maxW={'80vw'}
      textAlign="left"
    >
      <Text fontSize={'lg'} fontWeight="600">
        <Badge colorScheme={"cyan"}>Nueva</Badge> {"Nombre temporal"} ha realizado una donación de {amount} €. !El servidor te está agradecido!
      </Text>
    </Box>
  );
};

export default DonationBox;
