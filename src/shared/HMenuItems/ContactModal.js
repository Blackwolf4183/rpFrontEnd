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
  useClipboard,
  useToast,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Divider } from '@chakra-ui/layout';

const ContactModal = props => {
  const { onCopy } =
    useClipboard(
      'elefectorp@gmail.com' 
    ); 
  const toast = useToast();

  const copyLinkHandler = () => {
    onCopy();
    toast({
      title: 'Copiado al portapapeles',
      description: 'Hemos copiado la dirección a tu portapales',
      variant: 'solid',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={props.isContactOpen} onClose={props.onContactClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader size="xl">Contáctanos</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="600">
            <ArrowForwardIcon w="20px" h="20px" />
            Envíanos un correo a{' '}
            <Link color="teal.500" onClick={copyLinkHandler}>
              Haz click para copiar al portapapeles nuestra dirección de correo
            </Link>
          </Text>
          <Divider w="70%" m="10px 0 10px 0" />
          <Text fontWeight="600">
            <ArrowForwardIcon w="20px" h="20px" />
            Crea un ticket en nuestro{' '}
            <Link color="teal.500" isExternal href={'https://discord.gg/FnNV2keeDd'}>
              servidor de Discord
            </Link>
          </Text>
          <Divider w="70%" m="10px 0 10px 0" />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" onClick={props.onContactClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
