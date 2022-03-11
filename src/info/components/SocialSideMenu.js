import { VStack } from '@chakra-ui/react';
import React from 'react';
import Icon from '../../shared/Icon';
import {
  faInstagram,
  faDiscord,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const SocialSideMenu = () => {
  return (
    <VStack
      position={'fixed'}
      top="30%"
      left="30"
      spacing="15px"
      overflow="hidden"
    >
      <Icon link="https://vm.tiktok.com/ZMLDSrn9o/" icon={faTiktok} />
      <Icon link="https://discord.gg/FnNV2keeDd" icon={faDiscord} />
      <Icon link="https://twitter.com/" icon={faTwitter} />
      <Icon link="https://www.instagram.com/elefectorp/" icon={faInstagram} />
    </VStack>
  );
};

export default SocialSideMenu;
