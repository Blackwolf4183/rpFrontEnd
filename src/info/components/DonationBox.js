import { Badge, Box, Text } from '@chakra-ui/react';
import React from 'react';

const DonationBox = ({ name, amount }) => {
  return (
    <Box
      bgColor={'teal'}
      borderRadius="md"
      p="10px"
      maxW={'80vw'}
      textAlign="center"
    >
      <Text fontSize={'lg'} fontWeight="600">
        <Badge colorScheme={"cyan"}>Nueva</Badge> {name} ha realizado una donación de {amount} €. !El servidor te está agradecido!
      </Text>
    </Box>
  );
};

export default DonationBox;
