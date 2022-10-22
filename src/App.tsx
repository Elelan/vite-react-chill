import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { Chakra } from '@/containers/Chakra';
import Router from '@/routers';
import AuthRouter from '@/routers/AuthRouter';
import { store, persistor } from '@/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <Chakra>
            <AuthRouter>
              <Router />
            </AuthRouter>
          </Chakra>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
