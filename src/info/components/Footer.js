import { Image, Box } from '@chakra-ui/react';
import { useMediaQuery } from '@react-hook/media-query';
import footer from '../../assets/footer.svg';
import footerMovil from '../../assets/footerMovil.svg';

const Footer = () => {
  const isLowRes = useMediaQuery('(max-width:860px)');

  if (!isLowRes) {
    return (
      <Box w="100%" position="relative">
        <Image src={footer} w="100%" userSelect={"none"} />
      </Box>
    );
  } else {
    return (
      <Box w="110%" position="relative">
        <Image src={footerMovil} w="100%" mb="-2vh" userSelect={"none"}/>
      </Box>
    );
  }
};

export default Footer;
