import LogoSvg from '../assets/Logo.svg';
import { Image, Text, Heading } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@react-hook/media-query';
import { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

import AlertRedirectFivem from '../shared/AlertRedirectFivem';

const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionChevronUpIcon = motion(ChevronUpIcon);

const Logo = ({ isMobile, hidden }) => {
  const isLowHeight = useMediaQuery('(max-height: 830px)');
  const isVeryLowHeight = useMediaQuery('(max-height: 630px)');

  const { isOpen, onOpen, onClose } = useDisclosure()

  const controls = useAnimation();

  useEffect(() => {
    if (hidden) {
      controls.start(i => ({
        scale: [1,1.2,0],
        transition: { delay: i * 0.3, duration: 0.7 },
      }));
    }
  }, [hidden,controls]);

  const openDelayed = () => {
    setTimeout(() => {
      onOpen();
    }, 100);
  }

  return (
    <>
      <AlertRedirectFivem open={isOpen} onCloseAlert={onClose}/>

      <MotionImage
        src={LogoSvg}
        w={isLowHeight ? [150, 300] : [220, 260, 400]}
        userSelect="none"
        alt="Logo NeoLife Rp"
        mt="15vh"
        mb="2vh"
        whileHover={!hidden ? { scale: 1.6 } : ''}
        whileTap={!hidden ? { scale: 1.4 } : ''}
        custom={0}
        animate={controls}
        onClick={isMobile ? null : openDelayed}
      />
      <MotionHeading
        p={isVeryLowHeight ? '' : '0 40px 0 40px'}
        size={isMobile ? '2xl' : isLowHeight ? '3xl' : '4xl'}
        color="mainFont"
        textAlign="center"
        custom={1}
        animate={controls}        
      >
        Bienvenido a Neolife RP
      </MotionHeading>

      <MotionText
        p={isVeryLowHeight ? '' : '0 40px 0 40px'}
        fontSize={isMobile ? 'lg' : '2xl'}
        fontWeight="500"
        color="mainFont"
        textAlign="center"
        custom={2}
        animate={controls}
      >
        Descubre el servidor Neolife RP de GTA Roleplay en Fivem
      </MotionText>

      {isMobile ? null : (
        <MotionChevronUpIcon
          animate={ !hidden ? {
            y:[0,-12,0],
            scale:[1,1.3,1]
            
          } : controls}
          transition={{ repeat: Infinity, duration: 2 }}
          fontSize="40px"
          color="mainFont"
        />
      )}
    </>
  );
};

export default Logo;
