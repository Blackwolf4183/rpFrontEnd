import { Box, Skeleton, Text,Heading } from '@chakra-ui/react';
import React from 'react';

const DonatorBox = ({ username, amount, loading }) => {
  return (
    <Box
      textAlign={'center'}
      w="auto"
      h="auto"
      borderRadius={'md'}
      bgColor="secondary_donation_box"
    >
      {loading ? (
        <Text fontWeight={'600'} fontSize="lg" p="20px">
        <Skeleton w="200px" h="20px"/>
      </Text>
      ) : (
        <Text fontWeight={'600'} fontSize="xl" p="20px">
          {username} - {amount} $
        </Text>
      )}
    </Box>
  );
};

export default DonatorBox;
