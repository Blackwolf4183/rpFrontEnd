
import React from 'react';
import { VStack,Image, Box, Heading} from '@chakra-ui/react';

import Navbar from '../../shared/Navbar';

import logo from '../../assets/LogoPrueba1.svg';
import Footer from '../components/Footer';
import Divider from '../components/Divider'
import Nosotros from '../About/Nosotros';
import SocialSideMenu from '../components/SocialSideMenu';

const InfoPage = () => {
  return (
    <>
    <SocialSideMenu/>
    <VStack bgColor="blackAlpha.400" h="auto" spacing="100px">
      <Navbar/>

      <Image userSelect={"none"} src={logo} w="30%" maxW={"500px"} minWidth="300px"/>
      <Heading>El Efecto RP</Heading>
      <Divider/>
    
      <Nosotros/>
      <Footer/>
    </VStack>
    </>
  );
};

export default InfoPage;
 