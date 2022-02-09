import React from 'react';
import HamburguerMenu from '../../shared/HamburguerMenu';
import Navbar from '../../shared/Navbar';
import DonationsSection from '../components/DonationsSection';

const InfoPage = () => {
  return (
    <>
        <HamburguerMenu/>
        <Navbar/>

        <DonationsSection/>

    </>
  );
};

export default InfoPage;
