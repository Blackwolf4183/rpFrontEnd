import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Link,
  Box,
} from '@chakra-ui/react';

import { Divider,Center } from '@chakra-ui/layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const DonationsModal = props => {
  return (
    <Modal isOpen={props.isDonationsOpen} onClose={props.onDonationsClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader size="xl">Donaciones</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <Text fontWeight="600" m="0px 20px 0px 20px">Contribuye al servidor de AlocaoRP aportando lo que desees a nuestro paypal.</Text>

          <Link isExternal href={'https://paypal.com'} textDecor="none"> 
            <Button colorScheme="teal" variant="outline" mt="20px" mb="20px" p="10px 5px 10px 5px">
              Donaciones
              <Box ml="10px">
                <FontAwesomeIcon
                  icon={faPaypal}
                  size="2x"
                />
              </Box>
            </Button>
          </Link>

          <Text fontWeight="600" m="0px 20px 0px 20px">Tus donaciones nos ayudan a seguir mejorando el servidor y nuestros servicios :D</Text>

          <Center><Divider w="70%" m="20px 0 20px 0"/></Center>

          <Text fontWeight="600" m="0px 20px 0px 20px">Si te ha gustado esta pagina web tambíen puedes recompensar a su programador con su link de paypal</Text>

          <Link isExternal href={'https://paypal.me/YtterbiumFivem?country.x=ES&locale.x=es_ES'}> 
            <Button colorScheme="purple" variant="outline" mt="20px" mb="20px" p="10px 5px 10px 5px">
              Donaciones al programador
              <Box ml="10px">
                <FontAwesomeIcon
                  icon={faPaypal}
                  size="2x"
                />
              </Box>
            </Button>
          </Link>
          <Text fontWeight="600" m="0px 20px 0px 20px">¡Muchas gracias por confiar en AlocaoRp!</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" onClick={props.onDonationsClose}>
            Volver
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DonationsModal;
