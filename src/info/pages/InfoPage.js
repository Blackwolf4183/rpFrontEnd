
import { Box } from '@chakra-ui/react';
import React from 'react';
import AuthButton from '../../auth/components/AuthButton';
import HamburguerMenu from '../../shared/HamburguerMenu';
import Navbar from '../../shared/Navbar';
import DonationsSection from '../components/DonationsSection';

const InfoPage = () => {
  return (
    <>

        <HamburguerMenu/>
        <Navbar/>
        <AuthButton/>
        <DonationsSection/>


    </>
  );
};

export default InfoPage;
