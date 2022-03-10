import { Image,Box,Text } from '@chakra-ui/react'
import React from 'react'

import footer from '../../assets/footer.svg';

const Footer = () => {
  return (
      <Box w="100%" position="relative">
          <Image src={footer} w="100%" />
            <Text position={"absolute"} bottom="8px">Síguenos en nuestras redes sociales</Text>
      </Box>
  )
}

export default Footer