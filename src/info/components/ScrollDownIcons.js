import React from 'react'
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons';

const MotionChevronDownIcon = motion(ChevronDownIcon);

const ScrollDownIcons = () => {
  return (
    <div>
        <MotionChevronDownIcon
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          fontSize="40px"
          color="mainFont"
          display="block"
          w={"50px"}
          h={"50px"}
        />
        <MotionChevronDownIcon
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          fontSize="40px"
          color="mainFont"
          display="block"
          mt="-8"
          w={"50px"}
          h={"50px"}
        />
        </div>
  )
}

export default ScrollDownIcons