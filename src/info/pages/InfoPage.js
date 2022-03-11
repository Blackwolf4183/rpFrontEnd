import React from 'react';
import { VStack, Image, Box } from '@chakra-ui/react';

import Navbar from '../../shared/Navbar';

import logo from '../../assets/LogoPrueba1.svg';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import Nosotros from '../About/Nosotros';
import SocialSideMenu from '../components/SocialSideMenu';
import Donations from '../Donations/Donations';
import ScrollDownIcons from '../components/ScrollDownIcons';

const InfoPage = () => {
  return (
    <>
      <SocialSideMenu />
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
        <Footer />
      </VStack>
    </>
  );
};

export default InfoPage;
