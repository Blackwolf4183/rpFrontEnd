import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';

import { Box, Center } from '@chakra-ui/layout';

import LogoPequeño from '../../assets/LogoGrande.png';

import StaffMemberCard from '../HMenuItems/StaffMemberCard'
import StaffMembersRow from '../HMenuItems/StaffMembersRow';

import Staff from '../../DUMMY_DATA/Staff.json'

const StaffDrawer = props => {
  return (
    <Drawer
      className="staff-drawer"
      onClose={props.onDrawerClose}
      isOpen={props.isDrawerOpen}
      size={'full'}
      placement="bottom"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <Center>
          <Heading size="xl" mt="50px" mb="10px">
            Integrantes del Staff de AlocaoRP
          </Heading>
        </Center>
        <DrawerBody>
          <Center>
            <Image
              src={LogoPequeño}
              w={150} /* Ratio de 1.32 */
              h={113}
              userSelect="none"
              alt="Logo AlocaoRP"
              mt="20px"
            />
          </Center>

          <Center>
            <Box w="50%" textAlign="center">
              <Text mt="20px" fontSize="xl">
                Os presentamos los componentes del Staff de AlocaoRP.
              </Text>
              <Text fontSize="xl">
                Os proporcionamos a todos los usuarios del servidor con un
                equipo extenso y variado que pueda ayudaros con cualquier duda o
                problema que os pueda surgir a lo largo de vuestra estancia en
                el servidor.
              </Text>
            </Box>
          </Center>

          <StaffMembersRow rowName="Fundador y Cofundadores">
            {getMembers('fundador')}
          </StaffMembersRow>

          <StaffMembersRow rowName="Programadores">
            {getMembers('programador')}
          </StaffMembersRow>

          <StaffMembersRow rowName="Administradores">
            {getMembers('administrador')}
          </StaffMembersRow>

          <StaffMembersRow rowName="Moderadores">
            {getMembers('moderador')}
          </StaffMembersRow>

          <StaffMembersRow rowName="Soporte">
            {getMembers('soporte')}
          </StaffMembersRow>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default StaffDrawer;

/* LOS GENERADORES DE CADA FILA DE LOS MIEMBROS */

const getMembers = memberRank => {
  return Staff.members.map(item => {
    if (item.rank === memberRank) {
      return (
        <StaffMemberCard
          discord={item.discordId}
          mail={item.mail}
          instagram={item.instagram}
          name={item.name}
          description={item.shortDescription}
          rank={item.rank}
          picture={item.pictureUrl}
          key={item.id}
        />
      );
    } else return null
  });
};
