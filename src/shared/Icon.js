import { Link } from '@chakra-ui/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myNewTheme from '../Styles/theme'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Icon = ({ link, isMobile, icon,color }) => {
  return (
    <MotionLink
      href={link}
      isExternal
      width="40px"
      textAlign="center"
      display="inline-block"
      float={isMobile ? '' : 'right'}
      mt={isMobile ? '' : '20px'}
      mr="10px"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
    >
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          size={"2x"}
          color={color ? color : myNewTheme.colors.icons}
        />
      ) : null}
    </MotionLink>
  );
};

export default Icon;
