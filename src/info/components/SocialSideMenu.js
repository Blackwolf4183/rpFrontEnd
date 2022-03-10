import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

const SocialSideMenu = () => {
  return (
    <VStack position={"fixed"} top="30%" left="30" overflow={"auto"} spacing="15px">
        <Box w="25px" h="25px" bgColor={"white"}/>
        <Box w="25px" h="25px" bgColor={"white"}/>
        <Box w="25px" h="25px" bgColor={"white"}/>
    </VStack>
  )
}

export default SocialSideMenu