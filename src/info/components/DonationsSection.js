import { Center, Heading, VStack,Box,Badge,Text } from '@chakra-ui/react'
import React from 'react'

const DonationsSection = () => {
  return (
    <Center mt="150px">
        <VStack spacing="50px">
            <Heading>Donaciones</Heading>

            <Box>
                <Text fontSize={"lg"}>!Manolo ha donado 200€, el servidor entero te agradece tu aportación!</Text>
            </Box>
        </VStack>
    </Center>
  )
}

export default DonationsSection