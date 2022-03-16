import { Button, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

const MotionButton = motion(Button);

const ScrollUpButton = () => {
    

  return (
    <MotionButton
      variant="outline"
      colorScheme="purple"
      w="50px"
      h="50px"
      borderRadius={'100%'}
      position="fixed"
      right="20"
      bottom="10vh"
      zIndex="10"
      color="#D50954"
      borderWidth={'3px'}
      whileTap={{
        scale: 1.2,
      }}
      whileHover={{
        scale: 1.1,
      }}

      initial={{ scale:0 }}
      animate={{ scale: 1 }}
    transition={{ duration: 0.25 }}
      
      onClick={() => {
        scroller.scrollTo('logo', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuint',
          offset: -200,
        });
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </MotionButton>
  );
};

export default ScrollUpButton;
