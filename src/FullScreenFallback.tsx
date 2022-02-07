import React from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'
import IndeterminateCircularProgress from './components/presentation/IndeterminateCircularProgress'

export default function FullScreenFallback () {
    return (
        <Center bg="white" h="100vh">
            <Box display={'block'}>    
                <IndeterminateCircularProgress color={'gray.700'}  />
            </Box>
            <Heading as='h1' fontSize={'2xl'} ml={'16px'}>
                Conductor is loading.
            </Heading>
        </Center>
    )
}
