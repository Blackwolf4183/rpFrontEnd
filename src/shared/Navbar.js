import { Heading, Text, HStack, Spacer, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { useMediaQuery } from '@react-hook/media-query';

import { motion } from 'framer-motion';
import AuthButton from '../auth/components/AuthButton';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Navbar = () => {
  const mobile = useMediaQuery('(max-width:870px)');

  const variants = {
    active: {
      width: '100%',
      transition: { duration: 0.3 },
    },
    inactive: {
      width: '0%',
      transition: { duration: 0.3 },
    },
  };

  const [navBarState, setNavBarState] = useState({
    nosotros: 'inactive',
    actualizaciones: 'inactive',
    donaciones: 'inactive',
  });

  if (mobile) {
    return <div>hola</div>;
  } else {
    return (
      <HStack mt="10" w="90%" spacing="5">
        <Link to="/">
          <Heading  userSelect={'none'} fontSize={'2xl'}>
            El Efecto RP
          </Heading>
        </Link>

        <Spacer />

        <MotionText
          fontSize={'lg'}
          fontWeight={'600'}
          userSelect={'none'}
          cursor="pointer"
          onHoverStart={() => {
            setNavBarState({ ...navBarState, nosotros: 'active' });
          }}
          onHoverEnd={() =>
            setNavBarState({ ...navBarState, nosotros: 'inactive' })
          }
        >
          <ScrollLink
            activeClass="active"
            to="nosotros"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Nosotros
          </ScrollLink>
          <MotionBox
            w="100%"
            h="2px"
            bgColor="white"
            initial={{ width: '0%' }}
            animate={navBarState.nosotros}
            variants={variants}
          />
        </MotionText>

        <MotionText
          fontSize={'lg'}
          fontWeight={'600'}
          userSelect={'none'}
          cursor="pointer"
          onHoverStart={() => {
            setNavBarState({ ...navBarState, actualizaciones: 'active' });
          }}
          onHoverEnd={() =>
            setNavBarState({ ...navBarState, actualizaciones: 'inactive' })
          }
        >
          <ScrollLink
            activeClass="active"
            to="actualizaciones"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Actualizaciones
          </ScrollLink>
          <MotionBox
            w="100%"
            h="2px"
            bgColor="white"
            initial={{ width: '0%' }}
            animate={navBarState.actualizaciones}
            variants={variants}
          />
        </MotionText>

        <MotionText
          fontSize={'lg'}
          fontWeight={'600'}
          userSelect={'none'}
          cursor="pointer"
          onHoverStart={() => {
            setNavBarState({ ...navBarState, donaciones: 'active' });
          }}
          onHoverEnd={() =>
            setNavBarState({ ...navBarState, donaciones: 'inactive' })
          }
        >
          <ScrollLink
            activeClass="active"
            to="donaciones"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Donaciones
          </ScrollLink>
          <MotionBox
            w="100%"
            h="2px"
            bgColor="white"
            initial={{ width: '0%' }}
            animate={navBarState.donaciones}
            variants={variants}
          />
        </MotionText>

        <AuthButton />
      </HStack>
    );
  }
};

export default Navbar;
