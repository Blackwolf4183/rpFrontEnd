import HamburguerMenu from '../../shared/HamburguerMenu'
import Logo from '../../shared/Logo';
import MediaIconBundle from '../../shared/MediaIconBundle';

import { VStack, Button,GridItem } from '@chakra-ui/react';
import { GlassImageWrapper } from '../components/GlassImageWrapper';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';


const MotionButton = motion(Button);

const MainDesktopPage = ({hide}) => {

  const history = useHistory();


  return (
    <GlassImageWrapper gridLayout={'repeat(3, 1fr)'}>
      <GridItem colStart={1}><HamburguerMenu /> </GridItem>
      
      <VStack spacing="20px" alignItems="center">
        <Logo hidden={hide} />
        <MotionButton
          colorScheme="teal"
          color="black"
          fontWeight="800"
          size="lg"
          onClick={() => history.push('/main')}
          isLoading={hide}
          loadingText="Redirigiendo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Descubre a la comunidad
        </MotionButton>
      </VStack>

      <MediaIconBundle />
    </GlassImageWrapper>
  );
};

export default MainDesktopPage;
