import { Center, Heading,Box, Divider } from '@chakra-ui/layout';

const StaffMembersRow = props => {
  return (
    <>
      <Heading mt="50px" size="lg" textAlign="center">
        {props.rowName}
      </Heading>
      <Center>
        <Box textAlign="center" mt="20px" width="60%">
          {props.children}
        </Box>
      </Center>
      <Center><Divider w="60%" m="20px 0 20px 0"/></Center>
      
    </>
  );
};

export default StaffMembersRow;
