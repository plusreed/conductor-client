import React, { memo } from 'react'
import { CircularProgress } from '@chakra-ui/react'
import type { CircularProgressProps } from '@chakra-ui/react'

type IndeterminateCircularProgressProps = {
    color: CircularProgressProps["color"]
}

function IndeterminateCircularProgress (props: IndeterminateCircularProgressProps) {
    return (
        <CircularProgress isIndeterminate color={props.color} />
    )
}

export default memo(IndeterminateCircularProgress)