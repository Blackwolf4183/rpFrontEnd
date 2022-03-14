import { Box, Text, Heading, Wrap } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import UpdatesJson from '../../DUMMY_DATA/Updates.json';
import UpdateBox from './Components/UpdateBox';


const Updates = () => {
  return (
    <Box w="60%" textAlign={'left'} pb="100px" id="actualizaciones">
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

      <Wrap mt="50px" spacing="15px">
        {UpdatesJson.updates.map(update => {
          return (<UpdateBox key={update.date} textDate={update.date} title={update.title} mainText={update.mainText}/>)
        })}
      </Wrap>
    </Box>
  );
};

export default Updates;
