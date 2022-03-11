import { Box, Heading, Text, Tag, HStack, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LatestDonations = ({ amount, username }) => {
  return (
    <Box
      h="300px"
      w="300px"
      borderRadius={'xl'}
      bgColor="secondary_donation_box"
      p="15px"
      textAlign={'center'}
    >
      <Heading color="white" size={'lg'} mt="10px" fontWeight={'600'}>
        Donaciones recientes
      </Heading>

      <HStack justify={"center"} spacing="15px">
        <IconButton>
          <FontAwesomeIcon style={{width:"30px",height:"30px"}} icon={faArrowLeft} />
        </IconButton>
        <Box>
          <Tag mt="30px" color="white" fontWeight={'600'} variant="outline">
            Nueva
          </Tag>
          <Heading mt="10px">12.3$</Heading>

          <Text fontSize={"xl"} fontWeight={'600'} mt="15px">
            Placeholder
          </Text>
        </Box>
        <IconButton>
          <FontAwesomeIcon style={{width:"30px",height:"30px"}} icon={faArrowRight} />
        </IconButton>
      </HStack>
    </Box>
  );
};

export default LatestDonations;
