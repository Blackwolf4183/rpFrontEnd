import { Box, Center, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const LoadingPage = () => {
  return (
    <VStack w="100vw" h="100vh" bgColor={'blackAlpha.400'} >
        <Box m="auto">

        <Center>
      <HStack mb="30px" spacing={'25px'} >
        <MotionBox
          w="20px"
          h="20px"
          borderRadius={'100%'}
          bgColor={'white'}
          animate={{ y: [0, -25, 0] }}
          transition={{ ease: 'easeOut', duration: 1, repeat: Infinity }}
        />
        <MotionBox
          w="20px"
          h="20px"
          borderRadius={'100%'}
          bgColor={'white'}
          animate={{ y: [0, -25, 0] }}
          transition={{
            ease: 'easeOut',
            duration: 1,
            repeat: Infinity,
            delay: 0.3,
          }}
        />
        <MotionBox
          w="20px"
          h="20px"
          borderRadius={'100%'}
          bgColor={'white'}
          animate={{ y: [0, -25, 0] }}
          transition={{
            ease: 'easeOut',
            duration: 1,
            repeat: Infinity,
            delay: 0.6,
          }}
        />
      </HStack>
      </Center>

      <div>
        <Box w="200px" h="2px" bgColor={'white'}></Box>
        <Center>
          <Box w="80px" h="3px" bgColor={'white'}></Box>
        </Center>
      </div>
      <Heading mt="30px">Cargando</Heading>
      </Box>
    </VStack>
  );
};

export default LoadingPage;
