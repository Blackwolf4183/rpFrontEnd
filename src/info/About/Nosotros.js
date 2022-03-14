import { Heading, Box, Text, Flex } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const MotionBox = motion(Box);

const Nosotros = () => {
  /* ANIMACIONES */
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
    <Box w="60%" textAlign={'left'} pb="100px" id="nosotros">
      <Heading textAlign={'left'}>Sobre Nosotros</Heading>
      <Box
        borderTop={'2px solid'}
        mt="10px"
        maxW="500px"
        width="70%"
        minW={'300px'}
      ></Box>
      <Flex mt="50px" pl="5" pr="5">
        <MotionBox
          style={{width:"3px"}}
          bgGradient="linear(to-b,#ED7147 , #D50353)"
          ref={ref}
          ml="20px"
          mr="5px"
          variants={motionBoxVariant}
          initial={'hidden'}
          animate={controls}
        />
        <Text fontSize={'xl'} ml="50px" maxW={'800px'} fontWeight="600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          sagittis feugiat est vitae varius. Praesent vestibulum mauris ut urna
          imperdiet ullamcorper. Duis ac nibh enim. Curabitur iaculis purus
          lacus, sed aliquam eros tempor in. Fusce lectus libero, hendrerit non
          gravida ultricies, pellentesque non nulla. Curabitur dignissim justo
        </Text>
      </Flex>
    </Box>
  );
};

export default Nosotros;
