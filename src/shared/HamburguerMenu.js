import {
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  Menu,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import ContactModal from '../shared/HMenuItems/ContactModal'
import DonationsModal from '../shared/HMenuItems/DonationsModal';
import StaffDrawer from '../shared/HMenuItems/StaffDrawer';

import { useState } from 'react';

const HamburguerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openedModal, setopenedModal] = useState('none');

  const handleOpening = modal => {
    setopenedModal(modal);
    onOpen();
  };

  return (
    <>
      <ContactModal
        isContactOpen={isOpen && openedModal === 'contact'}
        onContactClose={onClose}
      ></ContactModal>
      <DonationsModal
        isDonationsOpen={isOpen && openedModal === 'donations'}
        onDonationsClose={onClose}
      ></DonationsModal>
      <StaffDrawer
        isDrawerOpen={isOpen && openedModal === 'drawer'}
        onDrawerClose={onClose}
      ></StaffDrawer>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon fontSize="20px" color="icons" />}
          variant="outline"
          position="absolute"
          width={25}
          heigth={25}
          m={5}
          border="none"
          _hover={{ bg: 'hoverHamburguerMenuItem' }}
          _expanded={{ bg: 'hoverHamburguerMenuItem' }}
        />
        <Portal>
          <MenuList bgColor="menus" border="none" color="mainFont">
            <MenuItem
              _hover={{ bg: 'hoverHamburguerMenuItem' }}
              onClick={e => handleOpening('drawer')}
            >
              Nuestro equipo
            </MenuItem>
            <MenuItem
              _hover={{ bg: 'hoverHamburguerMenuItem' }}
              onClick={e => handleOpening('contact')}
            >
              Contáctanos
            </MenuItem>
            <MenuItem
              _hover={{ bg: 'hoverHamburguerMenuItem' }}
              onClick={e => handleOpening('donations')}
            >
              Donaciones
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
};

export default HamburguerMenu;
