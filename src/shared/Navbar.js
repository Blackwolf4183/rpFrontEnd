import {
  Heading,
  Text,
  HStack,
  Spacer,
  Box,
  VStack,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';

import { useMediaQuery } from '@react-hook/media-query';

import { motion, useAnimation } from 'framer-motion';
import AuthButton from '../auth/components/AuthButton';
import { Link } from 'react-router-dom';

import NavbarLine from '../assets/navbarLine.svg';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionImg = motion(Image);

const Navbar = () => {
  const mobile = useMediaQuery('(max-width:870px)');

  const linkVariants = {
    active: {
      width: '100%',
      transition: { duration: 0.3 },
    },
    inactive: {
      width: '0%',
      transition: { duration: 0.3 },
    },
  };

  const mobileNavControls = useAnimation();
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const handleMobileNavClick = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
    isNavbarExpanded
      ? mobileNavControls.start('inactive')
      : mobileNavControls.start('active');
  };

  const [navBarState, setNavBarState] = useState({
    nosotros: 'inactive',
    actualizaciones: 'inactive',
    donaciones: 'inactive',
  });

  if (mobile) {
    return (
      <>
        <NavbarDrawer
          isOpen={isNavbarExpanded}
          onClose={handleMobileNavClick}
        />
        <VStack
          spacing="5px"
          position={'absolute'}
          left="10"
          top="10"
          userSelect={'none'}
          cursor="pointer"
          onClick={handleMobileNavClick}
        >
          <MotionImg
            src={NavbarLine}
            w="25px"
            userSelect={'none'}
            initial={'inactive'}
            animate={mobileNavControls}
            variants={{
              active: {
                x: 5,
                transition: { duration: 0.3 },
              },
              inactive: {
                x: 0,
                transition: { duration: 0.3 },
              },
            }}
          />
          <MotionImg src={NavbarLine} w="25px" userSelect={'none'} />
          <MotionImg
            src={NavbarLine}
            w="25px"
            userSelect={'none'}
            initial={'inactive'}
            animate={mobileNavControls}
            variants={{
              active: {
                x: -5,
                transition: { duration: 0.3 },
              },
              inactive: {
                x: 0,
                transition: { duration: 0.3 },
              },
            }}
          />
        </VStack>
      </>
    );
  } else {
    return (
      <HStack mt="10" w="90%" spacing="5">
        <Link to="/">
          <Heading userSelect={'none'} fontSize={'2xl'}>
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
            variants={linkVariants}
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
            variants={linkVariants}
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
            variants={linkVariants}
          />
        </MotionText>

        <AuthButton />
      </HStack>
    );
  }
};

export default Navbar;

const NavbarDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay bg="transparent" />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader bgColor={'rgba(17, 21, 28, 0.95)'}>
          El Efecto RP
        </DrawerHeader>

        <DrawerBody bgColor={'rgba(17, 21, 28, 0.95)'} textAlign="left">
          <VStack spacing="20px" textAlign={'left'}>
            <Button
              w="60%"
              mt="100px"
              variant="outline"
              borderWidth={'2px'}
              size="lg"
              borderColor="#D50954"
              onClick={() => {
                onClose();
                scroller.scrollTo('nosotros', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart',
                  offset:-50,
                });
              }}
            >
              Nosotros
            </Button>
            <Button
              w="60%"
              mt="100px"
              variant="outline"
              borderWidth={'2px'}
              size="lg"
              borderColor="#D50954"
              onClick={() => {
                onClose();
                scroller.scrollTo('donaciones', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart',
                  offset:-50,
                });
              }}
            >
              Donaciones
            </Button>
            <Button
              w="60%"
              mt="100px"
              variant="outline"
              borderWidth={'2px'}
              size="lg"
              borderColor="#D50954"
              onClick={() => {
                onClose();
                scroller.scrollTo('actualizaciones', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart',
                  offset:-50,
                });
              }}
            >
              Actualizaciones
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
