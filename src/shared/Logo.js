import LogoGrande from '../assets/LogoGrande.png';
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
        src={LogoGrande}
        w={isLowHeight ? [150, 200] : [200, 250, 330]} /* Ratio de 1.32 */
        h={isLowHeight ? [113, 151] : [151, 189, 250]}
        userSelect="none"
        alt="Logo El Efecto Rp"
        mt={isMobile ? '10vh' : isLowHeight ? '5vh' : '15vh'}
        mb="2%"
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
        Bienvenido a El Efecto RP
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
        Descubre el servidor El Efecto RP de GTA Roleplay en Fivem
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
