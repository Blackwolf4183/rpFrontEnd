import React from 'react';
import { VStack, Image } from '@chakra-ui/react';

import Navbar from '../../shared/Navbar';

import logo from '../../assets/LogoPrueba1.svg';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import Nosotros from '../About/Nosotros';
import SocialSideMenu from '../components/SocialSideMenu';
import Donations from '../Donations/Donations';
import ScrollDownIcons from '../components/ScrollDownIcons';
import Updates from '../Updates/Updates';

import { useMediaQuery } from '@react-hook/media-query';

const InfoPage = () => {
  const isLowRes = useMediaQuery('(max-width:860px)');

  return (
    <>
      {!isLowRes && <SocialSideMenu />}

      <VStack bgColor="blackAlpha.400" h="auto" spacing="50px">
        <Navbar />

        <Image
          userSelect={'none'}
          src={logo}
          w="60%"
          maxW={'700px'}
          minWidth="400px"
        />

        <Divider />
        <ScrollDownIcons />

        <Nosotros />

        <Donations />

        <Updates />

        <Footer />
      </VStack>
    </>
  );
};

export default InfoPage;
