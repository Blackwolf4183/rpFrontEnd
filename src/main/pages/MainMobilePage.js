import Logo from '../../shared/Logo';
import MediaIconBundle from '../../shared/MediaIconBundle';
import { VStack, Button, Text } from '@chakra-ui/react';
import { Divider, Center } from '@chakra-ui/layout';
import { GlassImageWrapper } from '../components/GlassImageWrapper';

import { useHistory } from 'react-router-dom';

const MainMobilepage = props => {

  const history = useHistory();

  return (
    <GlassImageWrapper gridLayout={'repeat(1, 1fr)'}>
      <VStack spacing="20px" alignItems="center">
        <Logo isMobile />
        <Button
          colorScheme="teal"
          color="black"
          fontWeight="800"
          size="md"
          onClick={() => history.push('/main')}
        >
          Descubre a la comunidad
        </Button>
      </VStack>

      <Text textAlign="center" fontWeight="600">
        O visita nuestras redes sociales
      </Text>
      <Center>
        <Divider w="60%" mb="3vh" bgColor="border" />
      </Center>
      <MediaIconBundle isMobile />
    </GlassImageWrapper>
  );
};

export default MainMobilepage;
