import React, { Suspense, useCallback } from 'react';
import ConductorLayout from '../layout/ConductorLayout';
import { useGetAllWemosQuery } from "../store/services/conductorApi";
import { SimpleGrid, Link } from "@chakra-ui/react";
import WemoError from '../components/WemoError';
import IndeterminateCircularProgress from '../components/presentation/IndeterminateCircularProgress';

const WemoControl = React.lazy(() => import('../components/WemoControl'))

function App () {
    const { error, isLoading, data, refetch } = useGetAllWemosQuery()
    const wemoRefetch = useCallback(
        () => refetch(),
        [refetch]
    )

    return (
        <ConductorLayout>
            {error && (
                <WemoError errorStatus={'error'} errorTitle={'Error fetching the Wemos!'}>
                    This usually means Conductor isn't running.
                    <Link href={"#"} color={'red.700'} ml={2} onClick={wemoRefetch}>Try again?</Link>
                </WemoError>
            )}

            {isLoading && <IndeterminateCircularProgress color={'blue.400'} />}

            {data && (
                <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing="20px">
                    {data.map(wemo => {
                        return (
                            <Suspense key={wemo.ip} fallback={<IndeterminateCircularProgress color={'gray.700'} />}>
                                <WemoControl ip={wemo.ip} port={wemo.port} name={wemo.name} />
                            </Suspense>
                        )
                    })}
                </SimpleGrid>
            )}
        </ConductorLayout>
    )
}

export default App