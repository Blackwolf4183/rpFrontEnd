import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';

const MotionChevronDownIcon = motion(ChevronDownIcon);

const ScrollDownIcons = () => {
  return (
    <ScrollLink
      activeClass="active"
      to="nosotros"
      spy={true}
      smooth={true}
      offset={-70}
      duration={700}
      style={{cursor:"pointer"}}
    >
      <MotionChevronDownIcon
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        fontSize="40px"
        color="mainFont"
        display="block"
        w={'50px'}
        h={'50px'}
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
        w={'50px'}
        h={'50px'}
      />
    </ScrollLink>
  );
};

export default ScrollDownIcons;
