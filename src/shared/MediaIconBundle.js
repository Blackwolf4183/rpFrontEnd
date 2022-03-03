import { Box } from '@chakra-ui/layout';
import {
  faInstagram,
  faDiscord,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';


import Icon from './Icon';


const MediaIconBundle = ({isMobile}) => {
  return (
    <Box textAlign="center">

      <Icon link="https://vm.tiktok.com/ZMLDSrn9o/" isMobile={isMobile} icon={faTiktok}/>
      <Icon link="https://discord.gg/FnNV2keeDd" isMobile={isMobile} icon={faDiscord}/>
      <Icon link="https://twitter.com/" isMobile={isMobile} icon={faTwitter}/>
      <Icon link="https://www.instagram.com/elefectorp/" isMobile={isMobile} icon={faInstagram}/>
      
    </Box>
  );
};

export default MediaIconBundle;
