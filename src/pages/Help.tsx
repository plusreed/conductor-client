import React from 'react'
import { Container, Heading, Text } from '@chakra-ui/react'

export default function Help () {
    return (
        <Container maxW={'container.xl'} mt={'16px'}>
            <Heading as='h1' fontSize={'xl'}>
                Help
            </Heading>
            <Text>
                Conductor is easy to use &mdash; find the switch, and press Toggle.
            </Text>
        </Container>
    )
}