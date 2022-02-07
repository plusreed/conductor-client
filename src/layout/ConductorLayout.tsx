import React from 'react'
import { Container, Heading, Stack } from '@chakra-ui/react'

export default function ConductorLayout (props: React.PropsWithChildren<{}>) {
    return (
        <Container maxW={'container.xl'} mt={'16px'} >
            <Stack spacing={6}>
                <Heading as={'h1'} size={'xl'} textAlign={['center', 'left']}>
                    &#x1FA84; Conductor
                </Heading>
                {props.children}
            </Stack>
        </Container>
    )
}