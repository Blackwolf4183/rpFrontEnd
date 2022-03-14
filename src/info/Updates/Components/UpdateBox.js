import { Heading, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';

const MotionBox = motion(Box);

const UpdateBox = ({ textDate, title, mainText }) => {
  const [date, setDate] = useState(new Date('March 14, 2022'));

    useEffect(() => {
        if(textDate) {
            setDate(new Date(textDate))
        }
        
    }, [textDate])
    

  return (
    <MotionBox
      textAlign="center"
      pt="30px"
      w="170px"
      h="170px"
      borderRadius={'md'}
      bgGradient="linear(to-b,#ED7147 , #D50353)"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      cursor="pointer"
    >
      <Heading size="2xl">{date.getDate()}</Heading>
      <Heading>{date.toLocaleString('default', { month: 'short' })}</Heading>
      <Heading size="sm" mt="5px">
        {date.getFullYear()}
      </Heading>
    </MotionBox>
  );
};

export default UpdateBox;
