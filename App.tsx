import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import ErrorBoundary from './src/components/error-boundry';
import SplashScreen from './src/presentation/screens/splash-screen';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        {isSplashVisible ? (
          <SplashScreen onFinish={() => setIsSplashVisible(false)} />
        ) : (
          <AppNavigator />
        )}
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
