import {
  Heading,
  IconButton,
  Center,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from '@react-hook/media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';

const Navbar = () => {

  const isInPhone = useMediaQuery('(max-width:680px)');

  //TODO: hacer modo movil para pagina principal
  if(isInPhone){
    return <div></div>
  }else{
    return (
    
      <Center>
        <Wrap
          spacing="20px"
          maxWidth={'1200px'}
          justify="center"
          position="fixed"
          zIndex={100}
          top="25px"
  
        >
          <NavLink to="/">
            <IconButton textAlign={'center'} colorScheme="teal">
              <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faHome} />
            </IconButton>
          </NavLink>
  
          <Heading fontSize="lg" lineHeight={'40px'} userSelect="none">
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
            userSelect="none"
          >
            <motion.p
              whileHover={{ textShadow: '0px 0px 12px rgb(255,255,255)' }}
            >
              Sobre nosotros
            </motion.p>
          </Heading>
  
          <Heading
            fontSize="lg"
            lineHeight={'40px'}
            cursor="pointer"
            userSelect="none"
          >
            <motion.p
              whileHover={{ textShadow: '0px 0px 12px rgb(255,255,255)' }}
            >
              Donaciones
            </motion.p>
          </Heading>
  
          <Heading
            fontSize="lg"
            lineHeight={'40px'}
            cursor="pointer"
            userSelect="none"
          >
            <motion.p
              whileHover={{ textShadow: '0px 0px 12px rgb(255,255,255)' }}
            >
              Actualizaciones
            </motion.p>
          </Heading>
        </Wrap>
      </Center>
    );
  }

  
};

export default Navbar;
