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

      <Icon link="https://vm.tiktok.com/ZMRtsT1fy/" isMobile={isMobile} icon={faTiktok}/>
      <Icon link="https://discord.gg/FnNV2keeDd" isMobile={isMobile} icon={faDiscord}/>
      <Icon link="https://twitter.com/alocao_rp?s=09" isMobile={isMobile} icon={faTwitter}/>
      <Icon link="https://www.instagram.com/alocaorp_/" isMobile={isMobile} icon={faInstagram}/>
      
    </Box>
  );
};

export default MediaIconBundle;
