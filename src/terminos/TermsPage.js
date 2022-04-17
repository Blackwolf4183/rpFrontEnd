import {
  Heading,
  VStack,
  ListItem,
  ListIcon,
  List,
  Text,
  HStack,
  Center,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import React from 'react';

const TermsPage = () => {
  return (
    <Center>
    <VStack spacing={'50px'} w="80%">
      <Heading mt="50" textAlign={'center'}>
        Términos y condiciones de Efecto RP
      </Heading>
      <List spacing={6}>
        <ListItem>
          <HStack >
            <ListIcon as={ArrowRightIcon} color="green.500" />
            <Text fontSize={'xl'}>
              En este servidor los donadores no tienen ventajas, solo tienen
              recompensas por ayudar con la estabilidad del servidor, estas
              recompensas no alteran la experiencia en el juego ni deja en
              desbalance al resto de usuarios.
            </Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <ListIcon as={ArrowRightIcon} color="green.500" />
            <Text fontSize={'xl'}>
              Efecto Roleplay no hace reembolsos una vez se haga uso del
              servicio adquirido.
            </Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack >
            <ListIcon as={ArrowRightIcon} color="green.500" />
            <Text fontSize={'xl'}>
              Reborn Services informa:  Si la persona adquiere un negocio o
              empresa dentro del servidor y este se mantiene poco activo y/o con
              mal funcionamiento, Reborn Services RP se reserva el derecho de
              retirarle esta empresa o negocio y no devolver el importe enviado
              con anterioridad.
            </Text>
          </HStack>
        </ListItem>
      </List>
    </VStack>
    </Center>
  );
};

export default TermsPage;
