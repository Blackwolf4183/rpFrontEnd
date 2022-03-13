import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Updates = () => {
  return (
    <Box w="60%" textAlign={'left'} pb="100px" id="nosotros">
      <Heading textAlign={'left'}>Actualizaciones</Heading>
      <Box
        borderTop={'2px solid'}
        mt="10px"
        maxW="500px"
        width="70%"
        minW={'300px'}
      />
      <Text fontSize={'xl'} ml="50px" maxW={'800px'} mt="50px" fontWeight="600">
        Descubre que ha cambiado en el servidor, haz click en cualquiera de las
        actualizaciones para más detalle
      </Text>
    </Box>
  );
};

export default Updates;
