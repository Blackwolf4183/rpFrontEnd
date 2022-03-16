import { Box, Text, Heading, Wrap } from '@chakra-ui/react';
import UpdatesJson from '../../DUMMY_DATA/Updates.json';
import UpdateBox from './Components/UpdateBox';
import { useMediaQuery } from '@react-hook/media-query';

const Updates = () => {

  const isLowRes = useMediaQuery('(max-width:860px)');

  return (
    <Box w={isLowRes ? "90%" : "60%"} textAlign={'left'} pb="100px" id="actualizaciones">
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

      <Wrap mt="50px" spacing="15px" justify={ isLowRes && "center"}>
        {UpdatesJson.updates.map(update => {
          return (
            <UpdateBox
              key={update.date}
              textDate={update.date}
              mainText={update.mainText}
              bulletPoints={update.bulletPoints}
            />
          );
        })}
      </Wrap>
    </Box>
  );
};

export default Updates;
