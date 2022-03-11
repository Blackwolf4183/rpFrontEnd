import { Heading, Box, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Nosotros = () => {
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
          h="0"
          w="3px"
          bgGradient="linear(to-t,#ED7147 , #D50353)"
          animate={{ height: "auto" }}
          transition={{ duration: 0.75 }}
        />
        <Text fontSize={'xl'} ml="50px" maxW={"800px"} fontWeight="600">
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
