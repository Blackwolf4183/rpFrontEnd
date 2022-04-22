import { VStack } from '@chakra-ui/react';
import React from 'react';
import Icon from '../../shared/Icon';
import {
  faInstagram,
  faDiscord,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { motion } from 'framer-motion';

const MotionStack = motion(VStack);

const SocialSideMenu = () => {
  return (
    <MotionStack
      position={'fixed'}
      top="40%"
      left="30"
      spacing="15px"
      overflow="hidden"
      animate={{x:0}}
      initial={{x:"-100%"}}
      transition={{ duration: 0.55 }}
    >
      {/* <Icon link="https://vm.tiktok.com/ZMLDSrn9o/" icon={faTiktok} /> */}
      <Icon link="https://discord.gg/p7JeqDWaa2" icon={faDiscord} />
      {/* <Icon link="https://twitter.com/" icon={faTwitter} /> */}
      <Icon link="https://www.instagram.com/" icon={faInstagram} />
    </MotionStack>
  );
};

export default SocialSideMenu;
