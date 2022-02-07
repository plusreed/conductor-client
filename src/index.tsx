import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { ChakraProvider } from '@chakra-ui/react'
import FullScreenFallback from './FullScreenFallback';

const App = React.lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
          <Provider store={store}>
              <Suspense fallback={<FullScreenFallback />}>
                <App />
              </Suspense>
          </Provider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
