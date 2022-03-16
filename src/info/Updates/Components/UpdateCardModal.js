import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
  Text,
  Icon,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const UpdateCardModal = ({
  isOpen,
  onClose,
  textDate,
  mainText,
  bulletPoints,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        color="black"
        style={{
          background:
            'radial-gradient(circle, rgba(167,156,204,1) 0%, rgba(139,169,217,1) 98%, rgba(167,156,204,1) 100%)',
        }}
        boxShadow="box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
      >
        <ModalHeader>
          <Icon>
            <FontAwesomeIcon icon={faRotate} />
          </Icon>{' '}
          Actualización - {textDate}{' '}
        </ModalHeader>
        <Divider bgColor="white" mb="20px" w="80%" />
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="lg" fontWeight={'600'}>
            {mainText}
          </Text>
          <List spacing={3} fontWeight={"600"} mt="20px">
              {bulletPoints.map(point => {
                  return(
                  <ListItem key={point}>
                  <ListIcon as={CheckCircleIcon} color="green.300"  />
                {point}
                </ListItem>)
              })}
            

          </List>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateCardModal;
