import React, { useState } from 'react'

import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    CloseButton
} from '@chakra-ui/react'
import type { AlertStatus } from '@chakra-ui/react'

type WemoErrorProps = {
    errorStatus: AlertStatus
    errorTitle: string,
    children: React.ReactNode
}

export default function WemoError (props: WemoErrorProps) {
    const [isShown, setIsShown] = useState(true)

    return (
        <>
            { isShown ? (
                <Alert status={props.errorStatus}>
                    <AlertIcon />
                    <AlertTitle mr={2}>{props.errorTitle}</AlertTitle>
                    <AlertDescription>
                        {props.children}
                    </AlertDescription>
                    <CloseButton position={'absolute'} right={'8px'} top={'8px'} onClick={() => setIsShown(false)} />
                </Alert>
            ) : null}
        </>
    )
}