import React, { Suspense } from 'react'
import { useGetWemoStateQuery } from "../store/services/conductorApi";
import {
    Box,
    Center,
    Flex,
    Spacer,
    Text
} from "@chakra-ui/react";
import IndeterminateCircularProgress from './presentation/IndeterminateCircularProgress'
import WemoBinaryBadge from './presentation/WemoBinaryBadge';
import WemoFetchError from './presentation/WemoFetchError';

const WemoToggle = React.lazy(() => import('./WemoToggle'))

type WemoControlProps = {
    ip: string,
    port: number,
    name: string
}

function WemoControl (props: WemoControlProps) {
    const { error, isLoading, data } = useGetWemoStateQuery(
        { ip: props.ip, port: props.port },
        { pollingInterval: 10000 }
    )

    return (
        <Box bg={'gray.100'} p={4} rounded={4}>
            { error && <WemoFetchError /> }
            { isLoading && (
                <Center>
                    <IndeterminateCircularProgress color={'gray.700'} />
                </Center>
            )}
            { typeof data === 'boolean' && (
                <>
                    <Flex>
                        <Text isTruncated fontSize={'lg'} fontWeight={'bold'}>
                            {props.name}
                        </Text>
                        <Spacer />
                        <WemoBinaryBadge isOn={data} />
                    </Flex>
                    <Suspense fallback={<IndeterminateCircularProgress color={'gray.700'} />}>
                        <WemoToggle ip={props.ip} port={props.port} currentState={data} />
                    </Suspense>
                </>
            )}
        </Box>
    )
}

export default React.memo(WemoControl)