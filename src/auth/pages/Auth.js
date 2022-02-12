import { Center, Box } from '@chakra-ui/react';
import { GlassImageWrapper } from '../../main/components/GlassImageWrapper';

import Login from '../components/Login';
import Signup from '../components/Signup';

const Auth = ({isLoging}) => {

  return (
    <GlassImageWrapper>
    <Center mt="50px">
      <Box
        maxWidth="400px"
        h="auto"
        w="90%"
        mb="150px"
        bgColor="news"
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
