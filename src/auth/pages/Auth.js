import { Center, Box } from '@chakra-ui/react';
import { GlassImageWrapper } from '../../main/components/GlassImageWrapper';

import Login from '../components/Login';
import Signup from '../components/Signup';

const Auth = ({isLoging}) => {

  return (
    <GlassImageWrapper bgC="rgba( 0, 0, 0, 0.35 )" bgB="blur( 7px )">
    <Center mt="50px">
      <Box
        maxWidth="400px"
        h="auto"
        w="90%"
        mb="150px"
        borderWidth={2}
        borderColor="border"
        bgColor={"blackAlpha.300"}
        borderRadius={'md'}
      >
        {isLoging ? (
          <Login />
        ) : (
          <Signup/>
        )}
      </Box>
    </Center>
    </GlassImageWrapper>
  );
};

export default Auth;
