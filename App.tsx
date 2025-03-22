import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import ErrorBoundary from './src/components/error-boundry';
import SplashScreen from './src/presentation/screens/splash-screen';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          {isSplashVisible ? (
            <SplashScreen onFinish={() => setIsSplashVisible(false)} />
          ) : (
            <AppNavigator />
          )}
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
