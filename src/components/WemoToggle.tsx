import React from 'react'
import { useSetWemoStateMutation } from "../store/services/conductorApi";
import { Box, Button } from "@chakra-ui/react";

type WemoToggleProps = {
    ip: string,
    port: number,
    currentState: boolean
}

function WemoToggle (props: WemoToggleProps) {
    const [updateWemo, { isLoading: isUpdating }] = useSetWemoStateMutation()

    const toggleWemo = async () => {
        await updateWemo({
            ip: props.ip,
            port: props.port,
            state: !props.currentState
        })
    }

    return (
        <Box display={'block'} mt={2}>
            <Button colorScheme={'blue'} variant={'solid'} isLoading={isUpdating} onClick={toggleWemo} width="100%">
                Toggle
            </Button>
        </Box>
    )
}

export default React.memo(WemoToggle)
