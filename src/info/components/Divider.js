import React from 'react';
import { Box,Center } from '@chakra-ui/react';

const Divider = () => {
  return (
    <div>
      <Box w="200px" h="2px" bgColor={'white'}></Box>
      <Center>
        <Box w="80px" h="2px" bgColor={'white'}></Box>
      </Center>
    </div>
  );
};

export default Divider;
