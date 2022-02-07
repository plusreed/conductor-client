import React, { memo, useMemo } from 'react'
import { Badge } from '@chakra-ui/react'

type WemoBinaryBadgeProps = {
    isOn: boolean
}

function WemoBinaryBadge (props: WemoBinaryBadgeProps) {
    const memoizedColor = useMemo<string>(() => {
        if (props.isOn) return 'green'

        return 'red'
    }, [props.isOn])

    return (
        <Badge variant={'solid'} fontSize={'md'} colorScheme={memoizedColor} alignSelf={'center'}>
            { props.isOn ? 'On' : 'Off'}
        </Badge>
    )
}

export default memo(WemoBinaryBadge)