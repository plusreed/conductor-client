import React from 'react'
import { Text, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import ConductorLayout from '../layout/ConductorLayout'

function NotFound () {
    return (
        <ConductorLayout>
            <Text>
                Route not found, <Link as={RouterLink} to="/" color={"blue.600"}>go back to the dashboard?</Link>
            </Text>
        </ConductorLayout>
    )
}

export default React.memo(NotFound)