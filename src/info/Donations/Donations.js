import {
  Heading,
  Box,
  Text,
  Wrap,
  Button,
  VStack,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { motion,useAnimation } from 'framer-motion';
import DonationsModal from './Components/DonationsModal';
import DonatorBox from './Components/DonatorBox';
import LatestDonations from './Components/LastestDonations';
import { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../context/auth-context';
import { useHistory } from 'react-router-dom';
import { useDonations } from '../../shared/hooks/useDonations';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const MotionBox = motion(Box);

function getTopDonations(array) {
  let sortedArray = array.sort((a, b) =>
    parseFloat(a.amount.$numberDecimal) > parseFloat(b.amount.$numberDecimal)
      ? -1
      : parseFloat(a.amount.$numberDecimal) <
        parseFloat(b.amount.$numberDecimal)
      ? 1
      : 0
  );
  return sortedArray.slice(0, 5);
}

const Donations = () => {
  const history = useHistory();
  const auth = useContext(Authcontext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [donations, loading, error] = useDonations();
  const [topDonations, setTopDonations] = useState(null);
  const [loadingTopDonations, setloadingTopDonations] = useState(true);

  const [usernames, setusernames] = useState(null)

  useEffect(() => {
    if (!loading) {
      var sortedArray = getTopDonations(donations); //conseguimos primero el array de donaciones top 5
      //iteramos en cada elemento y añadimos el username con un fetch
      var usernamesArray = [];

      Promise.all(
        sortedArray.map(item => {return axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/` + item.donatorId)})
      ).then(userModifiedArray => {
        userModifiedArray.forEach(result => {
          usernamesArray.push(result.data.user.name);
         
          for(let i = 0;i<usernamesArray.length;i++){
            sortedArray[i].username = usernamesArray[i];
          }
          
          if(usernamesArray.length == sortedArray.length){ //si se ha completado el fetching de todos los usuarios
            /* console.log(sortedArray); */
            setTopDonations(sortedArray);
            setloadingTopDonations(false);
          }
          
        });
      });
    }
  }, [loading]);

  /* ANIMACIONES */
  const {ref,inView,entry } = useInView();
  const controls = useAnimation();
  const motionBoxVariant = {
    hidden: { height: 0 },
    visible: {
      height: "auto",
      transition: {
        duration: 0.75
      }
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
  
  return (
    <>
      <DonationsModal isOpen={isOpen} onClose={onClose} />
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
              color={!auth.isLoggedIn ? 'black' : 'white'}
              mt="20px"
              onClick={
                auth.isLoggedIn ? onOpen : () => history.push('auth/login')
              }
            >
              {!auth.isLoggedIn ? 'Logeate antes de donar' : 'Dona aquí'}
            </Button>
          </Box>


          <LatestDonations donations={donations} />

          <VStack alignContent={'right'} spacing="50px">
            <Flex>
              <VStack spacing="10px" align={'right'}>
                <Box
                  textAlign={'center'}
                  w="auto"
                  h="auto"
                  borderRadius={'md'}
                  borderColor="secondary_donation_box"
                  borderWidth={'3px'}
                >
                  <Heading fontSize={'lg'} p="25px">
                    Top 5 Donadores
                  </Heading>
                </Box>

                {!loadingTopDonations ? (
                  topDonations.map(item => {
                    return (
                      <DonatorBox
                        username={item.username}
                        amount={item.amount.$numberDecimal}
                        key={item.date}
                      />
                    );
                  })
                ) : (
                  <>
                    <DonatorBox loading={true} />
                    <DonatorBox loading={true} />
                    <DonatorBox loading={true} />
                    <DonatorBox loading={true} />
                    <DonatorBox loading={true} />
                  </>
                )}
              </VStack>
              <MotionBox
                ref={ref}
                ml="20px"
                variants={motionBoxVariant}
                initial={"hidden"}
                w="3px"
                bgGradient="linear(to-b,#ED7147 , #D50353)"
                animate={controls}
              />
            </Flex>
          </VStack>
        </Wrap>
      </Box>
    </>
  );
};

export default Donations;
