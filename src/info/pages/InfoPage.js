import React from 'react';
import { VStack, Image, Box, Heading } from '@chakra-ui/react';

import Navbar from '../../shared/Navbar';
import logo from '../../assets/Logo.svg'
import Nosotros from '../About/Nosotros';
import SocialSideMenu from '../components/SocialSideMenu';
import Donations from '../Donations/Donations';
import ScrollDownIcons from '../components/ScrollDownIcons';
import Updates from '../Updates/Updates';
import MediaIconBundle from '../../shared/MediaIconBundle';
import ScrollUpButton from '../components/ScrollUpButton';
import Footer from '../components/Footer';

import { useMediaQuery } from '@react-hook/media-query';
import { useInView } from 'react-intersection-observer';

const InfoPage = () => {

  const isLowRes = useMediaQuery('(max-width:860px)');
  const { ref, inView } = useInView();

  

  return (
    <>
      {!isLowRes && <SocialSideMenu />}
      {!inView && <ScrollUpButton/>} {/* SOLO SI HEMOS PASADO EL LOGO */}

      <VStack
        bgColor="blackAlpha.400"
        h="auto"
        spacing="50px"
        overflow={'hidden'}
      >
        <Navbar />

        <Image
          userSelect={'none'}
          src={logo}
          w={'50%'}
          maxW={'700px'}
          minWidth={isLowRes ? '320px' : '360px'}
          pt={isLowRes ? '120px' : '12vh'}
          pb="10vh"
          id="logo"
          ref={ref}
        />

        <ScrollDownIcons />

        {!isLowRes && <Box h="20vh" />}

        <Nosotros isLowRes />

        <Donations />

        <Updates />

        {isLowRes && (
          <VStack maxW={"200px"} textAlign="center">
            <Heading size="lg">¡Síguenos en nuestras redes sociales!</Heading>
            <MediaIconBundle />
          </VStack>
        )}

        <Footer />
      </VStack>
    </>
  );
};

export default InfoPage;
