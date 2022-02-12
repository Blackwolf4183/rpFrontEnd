import {
  Heading,
  IconButton,
  Center,
  Wrap,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Authcontext } from '../context/auth-context';
import { useContext } from 'react';

import { motion } from 'framer-motion';
import AuthButton from '../auth/components/AuthButton';

const Navbar = () => {
  const auth = useContext(Authcontext);

  return (
    <Center>
      <Wrap
        spacing="20px"
        maxWidth={'1200px'}
        justify="center"
        position="fixed"
        zIndex={100}
        top="25px"
        maxWidth="80%"
      >
        <NavLink to="/">
          <IconButton textAlign={'center'} colorScheme="teal">
            <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faHome} />
          </IconButton>
        </NavLink>

        <Heading fontSize="lg" lineHeight={'40px'}>
          <NavLink to="/main">
            <motion.p
              whileHover={{ textShadow: '0px 0px 12px rgb(255,255,255)' }}
            >
              Inicio
            </motion.p>
          </NavLink>
        </Heading>
        {/* TODO: animación hacia cierto elemento de la pagina (scroll) */}
        <Heading
          fontSize="lg"
          lineHeight={'40px'}
          whiteSpace="nowrap"
          cursor="pointer"
        >
          <motion.p
            whileHover={{ textShadow: '0px 0px 12px rgb(255,255,255)' }}
          >
            Sobre nosotros
          </motion.p>
        </Heading>

        <Heading fontSize="lg" lineHeight={'40px'} cursor="pointer">
          <motion.p
            whileHover={{ textShadow: '0px 0px 12px rgb(255,255,255)' }}
          >
            Donaciones
          </motion.p>
        </Heading>

        <Heading fontSize="lg" lineHeight={'40px'} cursor="pointer">
          <motion.p
            whileHover={{ textShadow: '0px 0px 12px rgb(255,255,255)' }}
          >
            Actualizaciones
          </motion.p>
        </Heading>
      </Wrap>
    </Center>
  );
};

export default Navbar;
