import { Heading, Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const Nosotros = () => {
  return (
    <Box w="60%" textAlign={'left'} pb="100px">
      <Heading textAlign={'left'}>Sobre Nosotros</Heading>
      <Box borderTop={'2px solid'}  ml="10%" mt="10px" maxW="500px" width="70%" minW={"300px"}></Box>
      <HStack mt="50px">
        <Text fontSize={"xl"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          sagittis feugiat est vitae varius. Praesent vestibulum mauris ut urna
          imperdiet ullamcorper. Duis ac nibh enim. Curabitur iaculis purus
          lacus, sed aliquam eros tempor in. Fusce lectus libero, hendrerit non
          gravida ultricies, pellentesque non nulla. Curabitur dignissim justo
        </Text>
        <Box w="500px" bgColor={'purple.800'} h="100px"></Box>
      </HStack>
    </Box>
  );
};

export default Nosotros;
