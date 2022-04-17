import { Heading, Box, Text, Flex } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const MotionBox = motion(Box);

const Nosotros = () => {
  /* ANIMACIONES */
  const isLowRes = useMediaQuery('(max-width:860px)');

  const { ref, inView, entry } = useInView();
  const controls = useAnimation();
  const motionBoxVariant = {
    hidden: { height: 0 },
    visible: {
      height: 'auto',
      transition: {
        duration: 0.75,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <Box
      w={isLowRes ? '90%' : '60%'}
      textAlign={'left'}
      pb="100px"
      id="nosotros"
    >
      <Heading textAlign={'left'}>Sobre Nosotros</Heading>
      <Box
        borderTop={'2px solid'}
        mt="10px"
        maxW="500px"
        width="70%"
        minW={'300px'}
      ></Box>
      <Flex mt="50px" pl="5" pr="5">
        {!isLowRes && (
          <MotionBox
            style={{ width: '3px',background:"linear-gradient(to bottom, #ED7147, #D50353)" }}
            ref={ref}
            ml="20px"
            mr="5px"
            variants={motionBoxVariant}
            initial={'hidden'}
            animate={controls}
          />
        )}

        <Text fontSize={'xl'} ml={!isLowRes && "50px"} textAlign="justify" maxW={'800px'} fontWeight="600">
          Buenas! Nos alegra verte por aquí! Somos una tienda enfocada en el aspecto roleplay del famoso juego Gta V.
          Nuestro objetivo es proporcionar todo tipo de servicios para aquellos que se aventuran en este extenso mundo.
          Entre ellos, podeis esperar encontraros items como <b>keys de FiveM</b>, scripts creados desde 0 por nosotros 
          así como servicios para la construcción y mantenimiento de servidores. 
          <Text >También aspiramos a la venta de hosts seguros y fiables para vuestros servidores. </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default Nosotros;
