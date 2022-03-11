import {
  Heading,
  Box,
  Text,
  Wrap,
  Button,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import DonatorBox from './Components/DonatorBox';
import LatestDonations from './Components/LatestDonations';

const MotionBox = motion(Box);

const Donations = () => {
  return (
    <Box w="60%" pb="100px" id="donaciones">
      <Heading textAlign={'right'}>Donaciones</Heading>
      <Box
        borderTop={'2px solid'}
        mt="10px"
        maxW="500px"
        width="70%"
        minW={'300px'}
        float="right"
      />

      <Wrap mt="75px" spacing="30px" justify={'center'}>
        <Box
          h="200px"
          w="300px"
          borderRadius={'xl'}
          bgColor="secondary_buttons"
          p="15px"
          textAlign={'center'}
        >
          <Text color="white" fontSize={'xl'} mt="10px" fontWeight={'600'}>
            ¡Tú también puedes contribuir a mejorar el servidor!
          </Text>
          <Button
            borderRadius={'xl'}
            size="lg"
            colorScheme={'blackAlpha'}
            color="white"
            mt="20px"
          >
            Dona aquí
          </Button>
        </Box>

        <LatestDonations />

        <VStack alignContent={'right'} spacing="50px">
          <Flex>
            <VStack spacing="10px" align={'right'}>
              <Box
                textAlign={'center'}
                w="auto"
                h="auto"
                borderRadius={'md'}
                borderColor="secondary_donation_box"
                borderWidth={"3px"}
              ><Heading fontSize={"lg"} p="25px">Top 5 Donadores</Heading></Box>
              
              <DonatorBox username={'ElMillor'} amount={0.25} />
              <DonatorBox username={'Abderraman III'} amount={0.22} />
              <DonatorBox username={'Lucas'} amount={0.12} />
              <DonatorBox username={'Lucas'} amount={0.12} />
              <DonatorBox username={'Lucas'} amount={0.12} />
            </VStack>
            <MotionBox
              ml="20px"
              h="0"
              w="3px"
              bgGradient="linear(to-t,#ED7147 , #D50353)"
              animate={{ height: 'auto' }}
              transition={{ duration: 0.75 }}
            />
          </Flex>
        </VStack>
      </Wrap>
    </Box>
  );
};

export default Donations;