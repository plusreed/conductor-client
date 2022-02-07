import React from 'react'
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

export default function WemoFetchError () {
    return (
        <Alert status={'error'}>
            <AlertIcon />
            <AlertTitle>Error getting state!</AlertTitle>
        </Alert>
    )
}