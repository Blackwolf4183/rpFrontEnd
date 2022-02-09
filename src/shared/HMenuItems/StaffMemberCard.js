import { Avatar, AvatarBadge } from '@chakra-ui/avatar';
import { Box, Heading, Text } from '@chakra-ui/layout';

import { motion } from 'framer-motion';

import Icon from '../Icon';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

import myNewTheme from '../../Styles/theme';

const MotionBox = motion(Box);

const StaffMemberCard = ({
  name,
  description,
  rank,
  picture,
  discord,
  mail,
  instagram,
}) => {
  return (
    <MotionBox
      w="200px"
      h="220px"
      display="inline-block"
      borderRadius="15px"
      bg="staffMemberCardBg"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      textAlign="center"
      m="10px"
    >
      <Avatar name={name} src={picture} size="lg" mt="20px">
        <AvatarBadge borderWidth="3px" boxSize="0.9em" bg={rank} />
      </Avatar>
      <Box w="100%" h="20px">
        <Heading mt="10px" color="black" size="md">
          @{name}
        </Heading>
      </Box>

      <Box w="100%" h="60px" overflow="hidden" p="5px">
        <Text mt="5px" fontWeight="600" fontSize="md" color="black">
          {description}
        </Text>
      </Box>

      {/* CONTACT */}
      <Box>

          <Icon
            color={myNewTheme.colors.staffMemberCardFont}
            isMobile
            icon={faDiscord}
            link={discord ? discord : "https://www.discord.com"}
          ></Icon>
        {mail ? (
          <Icon
            color={myNewTheme.colors.staffMemberCardFont}
            isMobile
            icon={faMailBulk}
            link={mail}
          ></Icon>
        ) : null}

        {instagram ? (
          <Icon
            color={myNewTheme.colors.staffMemberCardFont}
            isMobile
            icon={faInstagram}
            link={instagram}
          ></Icon>
        ) : null}
      </Box>
    </MotionBox>
  );
};

export default StaffMemberCard;
