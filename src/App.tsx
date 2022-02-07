import React, { Suspense } from 'react'
import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom'

import IndeterminateCircularProgress from './components/presentation/IndeterminateCircularProgress'

const ConductorHome = React.lazy(() => import('./pages/ConductorMain')) 
const NotFound      = React.lazy(() => import('./pages/NotFound'))

function RouterSwitch () {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<IndeterminateCircularProgress color={'gray.700'} />}>
                            <ConductorHome />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<IndeterminateCircularProgress color={'gray.700'} />}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    )
}

export default RouterSwitch;
