import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const DonatorBox = ({ username, amount }) => {
  return (
    <Box
      textAlign={'center'}
      w="auto"
      h="auto"
      borderRadius={'md'}
      bgColor="secondary_donation_box"
    >
      <Text fontWeight={'600'} fontSize="lg" p="20px">
        {username} - {amount} $
      </Text>
    </Box>
  );
};

export default DonatorBox;
